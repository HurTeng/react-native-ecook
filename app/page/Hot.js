import React, {Component} from 'react';
import {
    View,
    RefreshControl,
    FlatList,
    ToastAndroid
} from 'react-native';
import SearchBar from '../component/SearchBar';
import MenuRow from "../component/MenuRow";
import {getCategoryListByType} from '../api/Api';

export default class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'hotest',
            lastId: 0,
            menuList: [],
            noMore: false,
            isFreshing: false,
        };
    }

    // mount
    componentDidMount() {
        this.getMenuList(this.state.lastId);
    }

    getMenuList(lastId) {
        getCategoryListByType(this.state.type, lastId)
            .then((menuList) => {
                if (menuList.length <= 0) {
                    this.state.noMore = true;
                    return;
                }

                let tempList = this.state.menuList.slice();
                tempList.push(...menuList);
                let lastId = tempList[tempList.length - 1].id;
                this.setState({
                    menuList: tempList,
                    lastId: lastId
                })
            })
            .catch((e) => {
                ToastAndroid.show(e, ToastAndroid.SHORT);
            })
    }

    loadMore() {
        if (this.noMore) {
            return;
        }
        this.getMenuList(this.state.lastId);
    }

    refreshHandle() {
        this.setState({
            lastId: 0,
            menuList: []
        }, () => {
            this.getMenuList(this.state.lastId);
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* head */}
                <SearchBar {...this.props}/>

                {/* list */}
                <FlatList
                    ref="menuList"
                    data={this.state.menuList}
                    onEndReached={this.loadMore.bind(this)}
                    onEndReachedThreshold={0.2}
                    keyExtractor={(item, index) => index.toString()} // key
                    // renderItem={this.renderItem.bind(this)}
                    renderItem={({item}) => (
                        <MenuRow menuData={item} {...this.props}/>
                    )}

                    /* refreshControl */
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isFreshing}
                            onRefresh={this.refreshHandle.bind(this)}
                            colors={['red', '#ffd500', '#0080ff', '#99e600']}
                            tintColor='red'
                            title="Loading..."
                            titleColor='red'/>
                    }

                />
            </View>
        )
    }

    renderItem(item) {
        return (<MenuRow menuData={item} {...this.props}/>);
    }
}