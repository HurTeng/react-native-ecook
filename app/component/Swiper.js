import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    ToastAndroid
} from 'react-native';

let {width} = Dimensions.get('window');
import {px2dp, getImageUrl} from '../common/Util';
import MenuDetail from "../page/MenuDetail";
import {saveBrowserMenuList} from "../common/Storage";

export default class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curIndex: 0,
            duration: 3000
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.startTimer()
        }, this.state.duration)
    }

    renderCircle() {
        let circle = [];
        let length = this.props.data.length || 0;
        for (let index = 0; index < length; index++) {
            circle.push(<View key={index}
                              style={[styles.circle, {backgroundColor: this.state.curIndex === index ? this.props.activeColor : 'white'}]}/>)
        }
        return circle;
    }

    // The current page number is calculated after the animation
    onAnimationEnd(e) {
        let offSetX = e.nativeEvent.contentOffset.x;
        let curIndex = Math.floor(offSetX / width);
        this.setState({
            curIndex: curIndex
        });
    }

    startTimer() {
        const imgCount = this.props.data.length;
        this.timer = setInterval(() => {
            let activeIndex = 0;
            if ((this.state.curIndex + 1) >= imgCount) {
                activeIndex = 0;
            } else {
                activeIndex = this.state.curIndex + 1;
            }
            this.setState({
                curIndex: activeIndex
            });
            let offsetX = activeIndex * width;
            this.refs.swiper.scrollTo({x: offsetX, y: 0, animated: true});
        }, this.state.duration)
    }

    onScrollBeginDrag() {
        clearInterval(this.timer);
    }

    onScrollEndDrag() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    navTo(menuData) {
        saveBrowserMenuList(menuData);
        this.props.navigator.push({
            component: MenuDetail,
            args: {
                id: menuData.id,
                data: menuData,
            }
        });
    }

    render() {
        return (
            <View style={{width: '100%', height: this.props.height}}>
                <ScrollView
                    ref="swiper"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}// 隐藏水平滚动条
                    pagingEnabled={true}// 自动分页
                    onMomentumScrollEnd={this.onAnimationEnd.bind(this)}// 当一帧滚动结束
                    onScrollBeginDrag={this.onScrollBeginDrag.bind(this)}// 开始拖拽
                    onScrollEndDrag={this.onScrollEndDrag.bind(this)}// 停止拖拽
                >
                    {
                        this.props.data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[styles.banner, {width: width, height: this.props.height}]}
                                    key={item.id}
                                    onPress={this.navTo.bind(this, item)}
                                >
                                    <Image
                                        style={[styles.bannerImage, {height: this.props.height}]}
                                        source={{uri: getImageUrl(item.imageid)}}
                                        resizeMode='stretch'
                                    />
                                    <Text style={styles.bannerText}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.circleBox}>
                    {this.renderCircle()}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    banner: {},
    bannerImage: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    bannerText: {
        position: 'absolute',
        bottom: px2dp(12),
        left: px2dp(5),
        color: 'white',
        fontSize: px2dp(16),
        fontWeight: '500'
    },
    circleBox: {
        position: 'absolute',
        bottom: px2dp(5),
        right: px2dp(5),
        flexDirection: 'row'
    },
    circle: {
        width: px2dp(5),
        height: px2dp(5),
        borderRadius: px2dp(50),
        backgroundColor: 'white',
        marginLeft: px2dp(3)
    }
});