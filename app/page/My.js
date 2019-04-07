'use strict';

import React, {Component} from 'react';
import {
    View,
    FlatList,
} from 'react-native';

import TopTabView from "../component/TopTabView";
import SearchBar from "../component/SearchBar";
import MenuRow from "../component/MenuRow";
import {getBrowserMenuList, getCollectionMenuList} from "../common/Storage";

const TYPE_HISTORY = 'history';
const TYPE_COLLECTION = 'collection';

export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyList: [],
            collectionList: [],
            curChannelIndex: 0,
            channelInfo: [{'type': TYPE_HISTORY, 'name': '历史'}, {'type': TYPE_COLLECTION, 'name': '收藏'}]
        };
    }

    componentDidMount() {
        this.getMenuList();
    }

    getMenuList() {
        this.getHistoryList();
        this.getCollectionList();
    }

    getCollectionList() {
        let that = this;
        getCollectionMenuList((data) => that.setState({
            collectionList: data
            })
        );
    }

    getHistoryList() {
        let that = this;
        getBrowserMenuList(function (data) {
            that.setState({
                historyList: data
            });
        });
    }

    changeType(index) {
        this.setState({
            curChannelIndex: index
        }, () => {
            this.getMenuList();
        })
    }

    getCurrentType() {
        let curIndex = this.state.curChannelIndex;
        return this.state.channelInfo[curIndex].type;
    }

    getItemTitles() {
        let titles = [];
        let channelInfo = this.state.channelInfo;
        channelInfo.forEach(function (channel) {
            titles.push(channel.name);
        });
        return titles;
    }

    render() {
        let menuList = this.getCurrentType() === TYPE_HISTORY ? this.state.historyList : this.state.collectionList;
        return (
            <View style={{flex: 1}}>
                {/* header */}
                <SearchBar {...this.props}/>

                {/* tab bar */}
                <TopTabView
                    items={this.getItemTitles()}
                    selectHandle={this.changeType.bind(this)}/>

                {/* data list */}
                <FlatList
                    ref="menuList"
                    data={menuList}
                    onEndReachedThreshold={0.2}
                    keyExtractor={(item, index) => index.toString()} // key属性
                    renderItem={({item}) => (
                        <MenuRow menuData={item} {...this.props}/>
                    )}
                />

            </View>
        )
    }
}