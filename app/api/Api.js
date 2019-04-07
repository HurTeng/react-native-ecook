// 获取搜索实时匹配
export function getTipsWords(words) {
    return new Promise((resolve, reject) => {
        fetch(`http://www.yidianzixun.com/home/q/search_channel?word=${encodeURIComponent(words)}&appid=web_yidian`)
            .then((response) => response.json())
            .then((json) => {
                if (json.code === 0) {
                    let wordsArr = [];
                    if (json.channels) {
                        let arr = json.channels.slice();
                        arr.map((item, index) => {
                            if (item.type === 'keyword' || item.type === 'sugkwd') {
                                wordsArr.push(item.name);
                            }
                        })
                    }
                    resolve(wordsArr);
                } else {
                    throw new Error(json.status);
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

// 获取搜索实时匹配
export function getHotKey() {
    return new Promise((resolve, reject) => {
        let api = 'https://api.ecook.cn/public/getHotSearchKeywords.shtml?type=recipe';
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (json.state === '200') {
                    resolve(json.list);
                } else {
                    throw new Error(json.status);
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

// 获取发现页面列表
export function getHomeData() {
    return new Promise((resolve, reject) => {
        let api = 'https://api.ecook.cn/public/getHomeData.shtml?version=15.4.5';
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (json.state === '200') {
                    resolve(json.data)
                } else {
                    throw new Error('暂时无法获得数据');
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

// 获取分类列表
export function getCategoryList() {
    return new Promise((resolve, reject) => {
        let api = 'https://api.ecook.cn/public/getRecipeHomeData.shtml'; // api
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (json.state === '200') {
                    resolve(json.list)
                } else {
                    throw new Error('暂时无法获得数据');
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

// 根据id获取分类
export function getMenuCategoryById(id = 7136536, page = 0) {
    return new Promise((resolve, reject) => {
        let api = `https://api.ecook.cn/public/getContentsBySubClassid.shtml?version=15.4.5&id=${id}&page=${page}`;
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (json.state === '200') { // 数据请求成功
                    let list = json.list; // 列表数据
                    resolve(list);
                } else {
                    throw new Error(json.status);
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

// 获取分类列表
export function getCategoryListByType(type, lastId) {
    return new Promise((resolve, reject) => {
        let api = `https://api.ecook.cn/public/getRecipeListByType.shtml?version=15.4.5&type=${type}&id=${lastId}`; // api
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (json.state === '200') {
                    resolve(json.list)
                } else {
                    throw new Error('暂时无法获得数据');
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}

// 获取菜谱详情信息
export function getMenuDetail(id) {
    return new Promise((resolve, reject) => {
        let api = `https://api.ecook.cn/public/getRecipeListByIds.shtml?version=15.4.5&ids=${id}`;
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (json.state === '200') {
                    resolve(json.list[0])
                } else {
                    throw new Error('暂时无法获得数据');
                }
            })
            .catch((e) => {
                reject(e.toString())
            })
    })
}