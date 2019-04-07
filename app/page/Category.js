import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    SectionList,
    Dimensions,
    ToastAndroid
} from 'react-native'
import CategoryList from "./CategoryList";
import SearchBar from "../component/SearchBar";

import {getCategoryList} from "../api/Api";
import {getImageUrl} from "../common/Util";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Category extends Component {

    constructor(props) {
        super(props);
        this._flatList = null;
        this._sectionList = null;
        this.state = {
            categoryData: [],
            selectedRootCate: 0
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const res = getCategoryList();
        res.then((data) => {
            this.setState({
                categoryData: data,
            });
        }).catch((e) => {
            ToastAndroid.show(e, ToastAndroid.SHORT);
        })
    }

    _renderItem = item => {
        let index = item.index;
        let title = item.item.title;
        return (
            <TouchableOpacity
                key={index}
                style={[{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 44
                }, this.state.selectedRootCate === index ? {
                    backgroundColor: '#F5F5F5',
                    borderLeftWidth: 3,
                    borderLeftColor: 'orange'
                } : {backgroundColor: 'white'}]}
                onPress={() => {
                    setTimeout(() => {
                        (this.state.categoryData.length - index) * 45 > height - 65 ? this._flatList.scrollToOffset({
                            animated: true,
                            offset: index * 45
                        }) : null;
                        this._sectionList.scrollToLocation({
                            itemIndex: 0,
                            sectionIndex: item.index,
                            animated: true,
                            viewOffset: 30
                        })
                    }, 100);
                    this.setState({selectedRootCate: index})
                }}
            >
                <Text
                    style={{
                        fontSize: 13,
                        color: this.state.selectedRootCate === index ? 'orange' : '#333'
                    }}>{title}</Text>
            </TouchableOpacity>
        )
    };

    renderRootCate() {
        let data = [];
        this.state.categoryData.map((item, index) => {
            data.push({key: index, title: item.name})
        });
        return (
            <View style={{backgroundColor: '#F5F5F5'}}>
                <FlatList
                    ref={flatList => this._flatList = flatList}
                    data={data}
                    ListHeaderComponent={() => (<View/>)}
                    ListFooterComponent={() => (<View/>)}
                    ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#F5F5F5'}}/>}
                    renderItem={this._renderItem}
                    onEndReachedThreshold={20}
                    showsVerticalScrollIndicator={false}
                >
                </FlatList>
            </View>
        )
    }

    sectionComp(item) {
        return (
            <View style={{backgroundColor: '#F5F5F5', justifyContent: 'center'}}>
                <Text style={styles.itemTitle}>{item.section.key}</Text>
            </View>
        )
    }

    renderCell(item) {
        return (
            <TouchableOpacity
                key={item.id}
                style={styles.itemCell}
                onPress={this.navTo.bind(this, item)}>

                <Image style={{width: 60, height: 70, marginVertical: 10}} source={{uri: getImageUrl(item.icon)}}/>
                <Text style={{color: '#ccc', fontSize: 13}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    navTo(item) {
        this.props.navigator.push({
            component: CategoryList,
            args: {
                id: item.id,
                name: item.name
            }
        });
    }

    renderItem(item) {
        let data = item.section.data;
        return item.index === 0 ?
            <View key={item.index} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {data.map((cell, index) => this.renderCell(cell))}
            </View> : null
    }

    renderItemCate() {
        let tempArr = this.state.categoryData.map((item, index) => {
            let tempObj = {};
            tempObj.key = item.name;
            tempObj.data = item.list;
            return tempObj
        });
        return (
            <View style={{flex: 1, backgroundColor: '#F5F5F5', marginLeft: 10, marginTop: 8}}>
                <SectionList
                    ref={(ref) => this._sectionList = ref}
                    renderSectionHeader={this.sectionComp}
                    renderItem={(data) => this.renderItem(data)}
                    sections={tempArr}
                    ItemSeparatorComponent={() => <View/>}
                    ListHeaderComponent={() => <View/>}
                    ListFooterComponent={() => <View/>}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index + item}
                />
            </View>
        )
    }

    renderCategory() {
        return (
            <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#F5F5F5'}}>
                {this.renderRootCate()}
                {this.renderItemCate()}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar {...this.props}/>
                {this.renderCategory()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    itemCell: {
        height: 110,
        width: (width - 140) / 2,
        backgroundColor: 'white',
        marginBottom: 8,
        marginRight: 10,
        alignItems: 'center',
        borderRadius: 10
    },

    itemTitle: {
        color: 'gray',
        textAlign: 'center',
        margin: 10
    }
});