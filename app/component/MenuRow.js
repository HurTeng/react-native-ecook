'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, Image, TouchableNativeFeedback, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {px2dp, getImageUrl, getAvatarUrl} from "../common/Util";
import MenuDetail from "../page/MenuDetail";
import {saveBrowserMenuList} from "../common/Storage";

export default class MenuRow extends Component {
    static propTypes = {
        menuData: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props)
    }

    getClickEffect() {
        return Platform.Version >= 21 ?
            TouchableNativeFeedback.Ripple('rgba(0,0,0,0.2)', false) :
            TouchableNativeFeedback.SelectableBackground()
    }

    navTo(id) {
        let menuData = this.props.menuData;
        saveBrowserMenuList(menuData);
        this.props.navigator.push({
            component: MenuDetail,
            args: {
                id: id,
                data: menuData,
            }
        });
    }

    render() {
        let imageUrl = getImageUrl(this.props.menuData.imageid);
        let avatarUrl = getAvatarUrl(this.props.menuData.user.imageid);
        let title = this.props.menuData.name;
        let description = this.props.menuData.description;
        let username = this.props.menuData.user.nickname;
        let commentNum = this.props.menuData.infos.collectionCount;
        let likeNum = this.props.menuData.infos.likeCount;
        return (
            <View>
                <TouchableNativeFeedback
                    background={this.getClickEffect()}
                    onPress={this.navTo.bind(this, this.props.menuData.id)}>
                    <View style={styles.itemBox}>
                        <View style={styles.itemMain}>
                            <Image
                                style={styles.menuImage}
                                source={{uri: imageUrl}}
                                resizeMode='stretch'
                            />

                            <View style={styles.menuContent}>
                                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                                <Text numberOfLines={2} style={styles.summary}>{description}</Text>
                                <View style={styles.itemTips}>
                                    <View style={styles.tipsLeft}>
                                        <Image
                                            style={styles.authorImg}
                                            source={{uri: avatarUrl}}
                                            resizeMode='stretch'
                                        />
                                        <Text style={styles.authorName}>{username}</Text>
                                    </View>
                                    <View style={styles.tipsRight}>
                                        <Icon style={styles.icon} name='comment'/>
                                        <Text style={styles.num}>{commentNum}</Text>
                                        <Icon style={styles.icon} name='thumb-up'/>
                                        <Text style={styles.num}>{likeNum}</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    itemBox: {
        height: px2dp(100),
        marginTop: px2dp(5),
        marginHorizontal: px2dp(10),
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
        borderWidth: px2dp(1),
        borderColor: '#e1e1e1',
        borderRadius: px2dp(10),
        elevation: px2dp(10), // shadow height(android must set to have a shadow effect)
        shadowColor: "#e1e1e1",
        shadowOpacity: 0.8,
        shadowRadius: px2dp(10),
        shadowOffset: {
            height: px2dp(10),
            width: px2dp(10)
        }
    },
    itemMain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuContent: {
        width: px2dp(220),
        margin: px2dp(10),
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        color: 'black'
    },
    summary: {
        color: '#b4b4b4',
        marginTop: px2dp(6),
        fontSize: px2dp(12)
    },
    menuImage: {
        width: px2dp(120),
        height: px2dp(98),
        borderTopLeftRadius: px2dp(5),
        borderBottomLeftRadius: px2dp(5),
    },
    itemTips: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tipsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorImg: {
        width: px2dp(20),
        height: px2dp(20),
        borderRadius: px2dp(50)
    },
    authorName: {
        marginLeft: px2dp(10),
        fontSize: px2dp(12)
    },
    tipsRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: px2dp(2),
        marginLeft: px2dp(10),
        color: '#b4b4b4'
    },
    num: {
        fontSize: px2dp(12),
        color: '#b4b4b4'
    },
});