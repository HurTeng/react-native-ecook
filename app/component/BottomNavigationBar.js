'use strict';

import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from 'react-native-tab-navigator';

import Hot from '../page/Hot';
import Home from '../page/Home';
import My from '../page/My';
import Category from "../page/Category";

import {px2dp} from '../common/Util';

let {width, height} = Dimensions.get('window');

export default class BottomNavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'Home',
            hideTabBar: false
        };
        this.tabNames = [
            ["首页", "home", "Home", <Home {...this.props}/>],
            ["热门", "whatshot", "Hot", <Hot {...this.props}/>],
            ["分类", "apps", "Category", <Category {...this.props}/>],
            ["我的", "person", "My", <My {...this.props}/>]
        ];
        BottomNavigationBar.hideTabBar = BottomNavigationBar.hideTabBar.bind(this);
        BottomNavigationBar.showTabBar = BottomNavigationBar.showTabBar.bind(this);
    }

    static showTabBar(time) {
        this.setState({hideTabBar: false})
    }

    static hideTabBar(time) {
        this.setState({hideTabBar: true})
    }

    render() {
        return (
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={[styles.tabbar,
                    (this.state.hideTabBar ? styles.hide : {})
                ]}
                sceneStyle={{}}>
                {
                    this.tabNames.map((item, index) => {
                        return (
                            <TabNavigator.Item
                                key={item[2]}
                                tabStyle={styles.tab}
                                title={item[0]}
                                titleStyle={styles.tabText}
                                selected={this.state.currentTab === item[2]}
                                selectedTitleStyle={{color: "#ffa500"}}
                                renderIcon={() => <Icon style={styles.icon} name={item[1]}/>}
                                renderSelectedIcon={() => <Icon style={styles.selectedIcon} name={item[1]}/>}
                                onPress={() => this.setState({currentTab: item[2]})}>
                                {item[3]}
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    tabbar: {
        height: px2dp(46),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    hide: {
        transform: [
            {translateX: width}
        ]
    },
    tab: {},
    icon: {
        position: 'relative',
        top: px2dp(3),
        fontSize: px2dp(22)
    },
    selectedIcon: {
        position: 'relative',
        top: px2dp(3),
        color: '#ffa500',
        fontSize: px2dp(22)
    },
    tabText: {
        fontSize: px2dp(10),
        fontWeight: 'bold'
    }
});