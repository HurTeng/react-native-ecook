import React, {Component} from 'react';
import {
    View,
    RefreshControl,
    FlatList,
    ToastAndroid
} from 'react-native';
import MenuRow from "../component/MenuRow";
import BackHandleComponent from "../component/BackHandleComponent";
import {getMenuCategoryById} from '../api/Api';
import BackBar from "../component/BackBar";

export default class CategoryList extends BackHandleComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: this.props.id,
            page: 0,
            noMore: false,
            isFreshing: false,
            menuList: [],
        };
    }

    // mount
    componentDidMount() {
        this.getMenuData(this.state.page);
    }

    getMenuData(page) {
        const res = getMenuCategoryById(this.state.categoryId, page);
        res.then((menuList) => {
            if (menuList.length <= 0) {
                this.state.noMore = true;
                return;
            }

            let tempList = this.state.menuList.slice();
            tempList.push(...menuList);
            this.setState({
                menuList: tempList,
            });
        }).catch((e) => {
            ToastAndroid.show(e, ToastAndroid.SHORT);
        })
    }

    loadMore() {
        if (this.noMore) {
            return;
        }
        this.state.page++;
        this.getMenuData(this.state.page);
    }

    refreshHandle() {
        this.setState({
            page: 0,
            menuList: []
        }, () => {
            this.getMenuData(this.state.page);
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* head */}
                <BackBar title={this.props.name} {...this.props}/>

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