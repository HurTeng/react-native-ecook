'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {px2dp} from "../common/Util";
import {common_theme, commonStyle} from "../common/CommonStyle";

export default class BackBar extends Component{
    static propTypes = {
        title: PropTypes.string,
    };

    constructor(props){
      super(props);
    }

    render(){
        return(
            <View style={styles.headerBar}>
                <View
                    style={[commonStyle.rowCenter, styles.navigationBar]}>
                    <Text style={styles.headerTitleStyle}>{this.props.title}</Text>
                </View>

                <View style={[styles.backButton, commonStyle.rowCenter]}>
                    <Icon style={styles.backIcon} name='chevron-left' onPress={() => {
                        this.props.navigator.pop()
                    }}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerTitleStyle: {
        marginTop: common_theme.statusBarHeight,
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold'
    },
    navigationBar: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: common_theme.navigationBarHeight,
        width: common_theme.screenWidth,
        backgroundColor: common_theme.themeColor,
        zIndex: 666
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
    backIcon: {
        fontSize: px2dp(30),
        color: "#fff",
    },

    headerBar: {
        height: px2dp(40),
        backgroundColor: '#ffa500',
        flexDirection: 'row',
        paddingLeft: px2dp(10),
        paddingRight: px2dp(10),
        alignItems: 'center'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: px2dp(18),
        color: 'white'
    },
    searchBox: {
        backgroundColor: '#f5f5f3',
        flex: 1,
        marginLeft: px2dp(15),
        height: px2dp(25),
        borderRadius: px2dp(3),
        padding: px2dp(3),
        flexDirection: 'row',
        alignItems: 'center'
    }
});