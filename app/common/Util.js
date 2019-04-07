import {Dimensions} from 'react-native';

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

const basePx = 375;

export function px2dp(px) {
    return px * deviceW / basePx;
}

export function isEmptyObject(object) {
    let t;
    for (t in object) {
        return !1;
    }
    return !0
}

export function getImageUrl(imageid) {
    return `http://pic.ecook.cn/web/${imageid}.jpg!m4`;
}

export function getAvatarUrl(imageid) {
    return `http://pic.ecook.cn/web/${imageid}.jpg!s1`;
}