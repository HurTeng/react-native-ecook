'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackHandleComponent from '../component/BackHandleComponent';

import {getHotKey} from '../api/Api';
import {px2dp} from '../common/Util';

export default class Search extends BackHandleComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            hotWords: [],
            tipsWords: [],
        }
    }

    componentDidMount() {
        this.getHotKey();
    }

    getHotKey() {
        getHotKey()
            .then((data) => {
                this.setState({
                    hotWords: data
                })
            })
            .catch((e) => {
                ToastAndroid.show(e, ToastAndroid.SHORT);
            })
    }

    getTipsWords(words) {
        if (words.trim() === '') {
            this.setState({
                tipsWords: []
            });
        }
    }

    searchWords(words) {
        Keyboard.dismiss();
        if (words.trim() === '') {
            ToastAndroid.show('请输入内容', ToastAndroid.SHORT);
            return;
        }
    }

    inputChangeHandle(text) {
        this.setState({
            text: text
        }, () => {
            this.getTipsWords(text);
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.searchBar}>
                    {/* back button */}
                    <View style={styles.backIconBox}>
                        <Icon style={styles.backIcon} name='chevron-left' onPress={() => {
                            this.props.navigator.pop()
                        }}/>
                    </View>
                    {/* search box */}
                    <View style={styles.searchBox}>
                        <Icon style={styles.searchIcon} name='search'/>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={this.inputChangeHandle.bind(this)}
                            value={this.state.text}
                            placeholder="搜索菜谱"
                            placeholderTextColor="#bdbdbd"
                            underlineColorAndroid="transparent"
                            selectionColor="#3385ff"
                        />
                    </View>
                    <Text onPress={this.searchWords.bind(this, this.state.text)} style={styles.searchBtn}>搜索</Text>
                </View>

                {
                    <View style={{flex: 1, padding: px2dp(10)}}>
                        <Text style={{fontSize: px2dp(16), color: '#212121', padding: px2dp(10)}}>热门搜索</Text>
                        <View style={styles.hotWordsList}>
                            {
                                this.state.hotWords.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={styles.hotWordBox}
                                            key={index}
                                            onPress={this.searchWords.bind(this, item)}
                                        >
                                            <Text style={styles.hotWord}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        height: px2dp(40),
        backgroundColor: 'white',
        borderBottomWidth: px2dp(1),
        borderBottomColor: '#fafafa',
        alignItems: 'center'
    },
    backIconBox: {
        width: px2dp(40),
        height: px2dp(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        fontSize: px2dp(35)
    },
    searchBox: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        borderWidth: px2dp(1),
        borderRadius: px2dp(10),
        borderColor: '#f5f5f5',
        height: px2dp(30),
        padding: px2dp(5),
    },
    searchIcon: {
        fontSize: px2dp(20)
    },
    searchInput: {
        flex: 1,
        color: '#212121',
        height: px2dp(30),
        fontSize: px2dp(12),
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: px2dp(5),
        paddingRight: px2dp(5),
    },
    searchBtn: {
        width: px2dp(50),
        fontSize: px2dp(14),
        textAlign: 'center',
        color: '#ff8c00'
    },
    hotWordsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    hotWordBox: {
        paddingLeft: px2dp(20),
        paddingRight: px2dp(20),
        paddingTop: px2dp(2),
        paddingBottom: px2dp(2),
        borderWidth: px2dp(1),
        borderColor: '#bdbdbd',
        borderRadius: px2dp(10),
        margin: px2dp(5)
    },
    hotWord: {
        fontSize: px2dp(12)
    }
});