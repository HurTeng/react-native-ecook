import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import {common_theme, commonStyle} from "./../common/CommonStyle";

class FoodIngredientView extends Component {

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
                              renderItem={this.renderColumnItem.bind(this)}
                              numColumns={2}
                              ItemSeparatorComponent={this.itemSeparatorComponent}
                    />
                </View>
            </View>
        )
    }

    renderColumnItem(data) {
        return (
            <View style={[styles.tagButtonView, commonStyle.rowSpaceBetween]}>
                <Text style={styles.blackTextStyle}>
                    {data.item.name}
                </Text>
                <Text style={commonStyle.subTitleFontStyle}>
                    {data.item.dosage}
                </Text>
            </View>
        )
    }

    itemSeparatorComponent() {
        return (<View style={styles.separatorStyle}/>)
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
        width: common_theme.screenWidth,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    blackTextStyle: {
        fontSize: common_theme.titleFontSize,
        color: common_theme.titleColor
    },
    separatorStyle: {
        backgroundColor: common_theme.separatorColor,
        height: 0.6
    }
});
export default FoodIngredientView;