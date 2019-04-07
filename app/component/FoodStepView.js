import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'
import {common_theme, commonStyle} from "./../common/CommonStyle";
import NetWorkImage from "./NetWorkImage";
import {getImageUrl} from "../common/Util";

class FoodStepView extends Component {

    render() {
        let {ingredients, title} = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.titleView, commonStyle.row, commonStyle.separatorStyle]}>
                    <Text style={styles.titleFontStyle}>{title}</Text>
                </View>
                <View>
                    <FlatList style={styles.flatList}
                              data={ingredients}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={(item) => this.renderColumnItem(item)}/>
                </View>
            </View>
        )
    }

    renderColumnItem(data) {
        const {onClickStepImage, ingredients} = this.props;
        const details = data.item.details;
        const length = ingredients.length;
        return (
            <View style={styles.tagButtonView}>
                <Text style={styles.blackTextStyle}>
                    {`${data.index + 1}/${length} ${details}`}
                </Text>
                <TouchableOpacity activeOpacity={1} style={styles.imgView}
                                  onPress={() => onClickStepImage(ingredients, data.index)}>
                    <NetWorkImage uri={getImageUrl(data.item.imageid)} style={styles.img}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleFontStyle: {
        fontSize: 20,
        color: common_theme.titleColor,
    },
    container: {},
    titleView: {
        padding: 20,
        height: 25,
        backgroundColor: '#f3f3f3'
    },
    flatList: {},
    tagButtonView: {
        paddingHorizontal: 20,
    },
    blackTextStyle: {
        marginTop: 6,
        fontSize: common_theme.titleFontSize,
        color: common_theme.titleColor,
        marginBottom: 6,
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: common_theme.screenWidth * 0.9,
        height: 200,
        marginBottom: 10,
        borderRadius: 10
    },
    separatorStyle: {
        marginLeft: 10,
        backgroundColor: common_theme.separatorColor,
        height: 0.6
    }
});
export default FoodStepView;