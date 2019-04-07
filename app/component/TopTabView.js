'use strict';

import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';

import {px2dp} from '../common/Util';

const screenWidth = Dimensions.get('window').width;

export default class TopTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curIndex: 0
        };
        this.selectTab = this._selectTab.bind(this);
    }

    _selectTab(index) {
        this.setState({
            curIndex: index
        }, () => {
            this.props.selectHandle(index)
        })
    }

    render() {
        return (
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.tabList}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <Text
                                key={'tab' + index}
                                onPress={() => {
                                    this.selectTab(index);
                                }}
                                style={[styles.tabItem, this.state.curIndex === index ? styles.selectedText : styles.tabText]}
                            >
                                {item}
                            </Text>
                        )
                    })
                }
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    scrollView: {
        maxHeight: px2dp(40),
        borderBottomWidth: px2dp(1),
        borderBottomColor: '#f5f5f3',
    },
    tabList: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    tabItem: {
        width: screenWidth / 2,
        height: px2dp(40),
        maxHeight: px2dp(40),
        lineHeight: px2dp(30),
        textAlign: 'center',
    },
    tabText: {},
    selectedText: {
        color: '#ffa500',
        borderBottomWidth: px2dp(3),
        borderBottomColor: '#ffa500',
    }
});