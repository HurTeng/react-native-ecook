import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

const storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    // 存储引擎：RN使用AsyncStorage, 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,
    // 读写时在内存中缓存数据，默认开启
    enableCache: true,
    // 如果storage中没有相应数据，或数据已过期 则会调用相应的sync方法，无缝返回最新数据。
    sync: {}
});

const BROWSER_MENU_KEY = "browserMenuKey";
const COLLECTION_MENU_KEY = "collectionMenuKey";

function isInit() {
    if (storage === undefined) {
        throw "call _getStorage() to initialize";
    }
}

function _sava(key, object, defaultExpires = null) {
    _sava3(key, object, defaultExpires);
}

/**
 key: key value(note: please do not use the underscore('_') symbol in key!)
 object：data value
 expires：valid time(null: never expire)
 */
function _sava3(key, object, expires) {
    isInit();
    storage.save({
        key: key,
        data: object,
        expires: expires
    });
}

function _remove(key) {
    isInit();
    storage.remove({
        key: key,
    });
}

function _loadList(key, callBack) {
    _loadDefault(key, [], callBack);
}

function _loadDefault(key, defaultValue, callBack) {
    isInit();
    storage.load({
        key: key,
        autoSync: true,
    }).then(ret => {
        callBack(ret);
        return ret;
    }).catch(err => {
        switch (err.name) {
            case 'NotFoundError':
                callBack(defaultValue);
                break;
            case 'ExpiredError':
                break;
        }
    });
}

/**
 查询数据
 */
function _load(key, callBack) {
    _load3(key, null, null, callBack);
}

function _load3(key, params, someFlag, callBack) {
    isInit();
    storage.load({
        key: key,
        // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
        autoSync: true,
        // syncInBackground(默认为true)意味着如果数据过期，
        // 在调用sync方法的同时先返回已经过期的数据。
        // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
        syncInBackground: true,

        // You can also pass additional parameters to the sync method
        syncParams: {
            params,
            someFlag: someFlag,
        },
    }).then(ret => {
        callBack(ret);
        return ret;
    }).catch(err => {
        // If no data is found and there is no sync method, catch exceptions
        switch (err.name) {
            case 'NotFoundError':
            case 'ExpiredError':
                callBack([]);
                break;
            default:
                console.warn(err);
                break;
        }
    });
}

export function includeOnList(list, id) {
    let result = list.find(item => {
        return item.id === id;
    });
    return !!result;
}

export function getBrowserMenuList(callback) {
    _loadList(BROWSER_MENU_KEY, callback);
}

export function getCollectionMenuList(callback) {
    _loadList(COLLECTION_MENU_KEY, callback);
}

function saveCollectionList(menuList) {
    _sava(COLLECTION_MENU_KEY, menuList);
}

export function saveBrowserMenuList(menu) {
    getBrowserMenuList((historyList) => {
        let isIncluded = includeOnList(historyList, menu.id);
        if (!isIncluded) {
            historyList.unshift(menu);
            const limit = 10;
            if (historyList.length > limit) {
                historyList.splice(limit, historyList.length - limit);
            }
            _sava(BROWSER_MENU_KEY, historyList);
        }
    });
}

export function addIntoCollectionMenuList(menu) {
    getCollectionMenuList((menuList) => {
        let isIncluded = includeOnList(menuList, menu.id);
        if (!isIncluded) {
            menuList.unshift(menu);
            const limit = 10;
            if (menuList.length > limit) {
                menuList.splice(limit, menuList.length - limit);
            }
            saveCollectionList(menuList);
        }
    });
}

export function deleteFromCollectionList(menuItem) {
    getCollectionMenuList((menuList) => {
        let id = menuItem.id;
        let index = menuList.findIndex(item => {
            return item.id === id;
        });
        if (index > -1) {
            menuList.splice(index, 1);
            saveCollectionList(menuList);
        }
    });

}

export function switchCollectionMenuList(menu) {
    getCollectionMenuList((menuList) => {
        let isIncluded = includeOnList(menuList, menu.id);
        if (isIncluded) {
            let index = menuList.findIndex(item => {
                return item.id === menu.id;
            });
            menuList.splice(index, 1);
        } else {
            menuList.unshift(menu);
            const limit = 10;
            if (menuList.length > limit) {
                menuList.splice(limit, menuList.length - limit);
            }
        }
        saveCollectionList(menuList);
        return !isIncluded;
    });
}

export function hasCollected(id) {
    let hasCollected = false;
    getCollectionMenuList((menuList) => {
        let result = menuList.find(item => item.id === id);
        hasCollected = !!result;
    });
    return hasCollected;
}
