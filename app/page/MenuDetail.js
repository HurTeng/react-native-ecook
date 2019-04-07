'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text, ToastAndroid, ScrollView, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackHandleComponent from '../component/BackHandleComponent';
import NetWorkImage from "../component/NetWorkImage";
import FoodStepView from "../component/FoodStepView";
import FoodIngredientView from '../component/FoodIngredientView'
import {common_theme, commonStyle} from "./../common/CommonStyle"

import {
    getCollectionMenuList, addIntoCollectionMenuList,
    includeOnList, deleteFromCollectionList
} from "../common/Storage";

import {getImageUrl, px2dp} from '../common/Util';
import {getMenuDetail} from '../api/Api';
import {isEmptyObject} from "../common/Util";

const scrollEventThrottle = 1;

export default class MenuDetail extends BackHandleComponent {
    constructor(props) {
        super(props);
        this.state = {
            topViewOpacity: new Animated.Value(0),
            menuData: {},
            title: '',
            healthStr: '',
            detail: {},
            steps: [],
            materialList: [],
            show: false,
            img: '',
            isCollected: false
        }
    }

    componentDidMount() {
        this.hasCollected();
        this.fetchData();
    }

    hasCollected() {
        let that = this;
        let id = this.props.id;
        getCollectionMenuList(function (menuList) {
            let result = includeOnList(menuList, id);
            that.setState({
                isCollected: result
            });
        });
    }

    collectMenu() {
        let menuData = this.props.data;
        let result = this.state.isCollected;
        if (result) {
            deleteFromCollectionList(menuData);
        } else {
            addIntoCollectionMenuList(menuData);
        }
        console.log(!result);
        this.setState({
            isCollected: !result
        });
    }

    fetchData() {
        const res = getMenuDetail(this.props.id);
        res.then((data) => {
            this.setState({ // 设置状态
                menuData: data,
                title: data.name,
                img: getImageUrl(data.imageid),
                healthStr: data.description,
                steps: data.stepList,
                materialList: data.materialList
            });
        }).catch((e) => { // 错误异常处理
            ToastAndroid.show(e, ToastAndroid.SHORT); // androidToast
        })
    }

    render() {
        const food_select_item = this.state.menuData;
        const isLike = this.state.isCollected;


        return (
            <View style={styles.container}>

                <Animated.View
                    style={[commonStyle.rowCenter, styles.navigationBar, {opacity: this.getOpacity.call(this)}]}>
                    <Text style={styles.headerTitleStyle}>{food_select_item.name}</Text>
                </Animated.View>

                <View style={[styles.backButton, commonStyle.rowCenter]}>
                    <Icon style={styles.backIcon} name='chevron-left' onPress={() => {
                        this.props.navigator.pop()
                    }}/>
                </View>

                {isEmptyObject(food_select_item) ? null :
                    <View style={[styles.likeButton, commonStyle.rowCenter]}>
                        <Icon style={styles.backIcon} name={isLike ? 'star' : 'star-border'}
                              onPress={this.collectMenu.bind(this)}/>
                    </View>
                }

                <ScrollView style={styles.container}
                            onScroll={this.onScroll.bind(this)}>

                    {isEmptyObject(food_select_item) ?
                        null :
                        <View>
                            <View style={styles.topView}>
                                <NetWorkImage uri={getImageUrl(food_select_item.imageid)} style={styles.topIcon}/>
                            </View>

                            <View style={styles.textColumn}>
                                <Text style={styles.titleTextView}>{food_select_item.name}</Text>
                                <Text style={styles.imtroText}>{food_select_item.description}</Text>
                            </View>

                            <FoodIngredientView title="用料" ingredients={food_select_item.materialList}/>

                            <View style={styles.stepsView}>
                                <FoodStepView title="烹饪步骤" ingredients={food_select_item.stepList}/>
                            </View>
                        </View>
                    }
                </ScrollView>
            </View>
        )
    }

    onScroll(event) {
        const y = event.nativeEvent.contentOffset.y;
        const maxY = 150;
        if (y <= maxY) {
            this.startAnimated(y / maxY);
        } else {
            this.startAnimated(1);
        }
    }

    startAnimated(toValue) {
        Animated.timing(this.state.topViewOpacity, {
            toValue: toValue,
            duration: scrollEventThrottle
        }).start()
    }

    getOpacity() {
        return this.state.topViewOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
    }

    popBack() {
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        height: px2dp(40),
        backgroundColor: 'white',
        borderBottomWidth: px2dp(1),
        borderBottomColor: '#f5f5f3',
        alignItems: 'center'
    },
    backIconBox: {
        width: px2dp(40),
        height: px2dp(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        fontSize: px2dp(30),
        color: "#ffffff",
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    navigationBar: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: common_theme.navigationBarHeight,
        width: common_theme.screenWidth,
        backgroundColor: common_theme.themeColor,
        zIndex: 666 // 最上面的视图
    },
    textColumn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    headerTitleStyle: {
        marginTop: common_theme.statusBarHeight,
        fontSize: 17,
        color: "#fff",
        fontWeight: 'bold'
    },
    topView: {
        width: common_theme.screenWidth,
        height: 200,
    },
    topIcon: {
        width: common_theme.screenWidth,
        height: 200,
    },
    titleTextView: {
        fontSize: 20,
        color: common_theme.titleColor,
        marginTop: 6,
    },
    imtroText: {
        fontSize: 16,
        color: common_theme.subTitleColor,
        marginTop: 6,
    },
    stepsView: {},
    rightIconStyle: {
        width: 20,
        height: 20
    },
    backButton: {
        position: 'absolute',
        left: 0,
        top: common_theme.statusBarHeight,
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        zIndex: 6666
    },
    likeButton: {
        position: 'absolute',
        right: 0,
        top: common_theme.statusBarHeight,
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        zIndex: 6666
    },
    like: {
        position: 'absolute',
        right: 0,
        top: common_theme.statusBarHeight,
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        zIndex: 666666
    }

});
