'use strict';

import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {px2dp} from "../common/Util";
import Search from "../page/Search";

export default class SearchBar extends Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
            <View style={styles.headerBar}>
                <Text style={styles.headerTitle}>网上厨房</Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.searchBox}
                    onPress={this.navToSearch.bind(this)}>
                    <Icon style={styles.searchIcon} name='search'/>
                    <Text style={styles.searchText}>搜索菜谱</Text>
                </TouchableOpacity>
            </View>
        )
    }

    navToSearch() {
        this.props.navigator.push({
            component: Search,
            args: {}
        });
    }
}

const styles = StyleSheet.create({
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
    },
    searchIcon: {
        fontSize: px2dp(18),
    },
    searchText: {
        fontSize: px2dp(13),
    },
});