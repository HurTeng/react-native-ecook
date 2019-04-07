'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ToastAndroid,
    FlatList,
    RefreshControl,
    TouchableNativeFeedback, Platform
} from 'react-native';
import MenuDetail from './MenuDetail';
import Swiper from '../component/Swiper';
import Search from './Search'; // 搜索组件
import SearchBar from '../component/SearchBar'; // 搜索组件
import MenuRow from '../component/MenuRow'; // 搜索组件

import {getHomeData, getCategoryListByType} from '../api/Api';
import {px2dp} from '../common/Util';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastId: 0,
            data: [],
            swiper: [],
            noMore: false,
            isFreshing: false
        }
    }

    componentDidMount() {
        // this.getHomeData();
        this.getCategoryListByType(this.state.lastId);
    }

    getClickEffect() {
        return Platform.Version >= 21 ?
            TouchableNativeFeedback.Ripple('rgba(0,0,0,0.2)', false) :
            TouchableNativeFeedback.SelectableBackground()
    }

    getHomeData() {
        getHomeData()
            .then((data) => {
                let temArr = this.state.data.slice();
                temArr.push(...data.recommendRecipes);
                this.setState({
                    data: temArr
                })
            }).catch((e) => {
            ToastAndroid.show(e, ToastAndroid.SHORT);
        })
    }

    getCategoryListByType(lastId) {
        getCategoryListByType('latest', lastId)
            .then((menuList) => {
                if (menuList.length <= 0) {
                    this.state.noMore = true;
                    return;
                }

                let tempList = this.state.data.slice();
                tempList.push(...menuList);
                let lastId = tempList[tempList.length - 1].id;
                this.setState({
                    data: tempList,
                    lastId: lastId
                })
            }).catch((e) => {
            ToastAndroid.show(e, ToastAndroid.SHORT);
        })
    }

    loadMore() {
        if (this.noMore) {
            return;
        }
        this.getCategoryListByType(this.state.lastId);
    }

    refreshHandle() {
        this.setState({
            data: [],
            lastId: 0
        }, () => {
            this.getCategoryListByType(this.state.lastId);
        });
    }

    navTo(itemId) {
        let uri = '';
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].id === itemId) {
                uri = this.state.data[i].url;
                break;
            }
        }
        this.props.navigator.push({
            component: MenuDetail,
            args: {
                uri: uri
            }
        });
    }

    renderSwiper() {
        return (
            <Swiper
                data={this.state.data.slice(0, 5)}
                height={px2dp(200)}
                activeColor='#ffa500'
                pressHandle={this.navTo.bind(this)}
                {...this.props}
            />
        )
    }

    // 搜索
    navToSearch() {
        this.props.navigator.push({
            component: Search,
            args: {}
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* 头部信息栏 ,由于页面没有navigator这个属性，在根页面把navigator属性传过去 */}
                <SearchBar {...this.props}/>

                <FlatList
                    ref="dataList"
                    data={this.state.data.length > 0 ? this.state.data.slice(5) : []}
                    onEndReached={this.loadMore.bind(this)}
                    onEndReachedThreshold={0.2}
                    extraData={this.state.data}
                    ListHeaderComponent={this.renderSwiper()}
                    keyExtractor={(item, index) => index.toString()} // key属性
                    renderItem={({item, separators}) => (
                        <MenuRow menuData={item} {...this.props}/>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isFreshing}
                            onRefresh={this.refreshHandle.bind(this)}
                            colors={['red', '#ffd500', '#0080ff', '#99e600']}
                            tintColor='red'
                            title="Loading..."
                            titleColor='red'
                        />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: px2dp(150),
        paddingTop: px2dp(15),
        paddingLeft: px2dp(10),
        paddingRight: px2dp(10),
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    itemBox: {
        height: px2dp(150),
        paddingTop: px2dp(15),
        paddingLeft: px2dp(10),
        paddingRight: px2dp(10),
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    itemMain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainLeft: {
        width: px2dp(220),
    },
    title: {
        color: 'black'
    },
    summary: {
        color: '#b4b4b4',
        marginTop: px2dp(6),
        fontSize: px2dp(12)
    },
    mainRight: {
        width: px2dp(120),
        height: px2dp(100),
    },
    itemTips: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: px2dp(0.8),
        borderBottomColor: 'rgba(0,0,0,0.1)',
        paddingBottom: px2dp(10)
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
