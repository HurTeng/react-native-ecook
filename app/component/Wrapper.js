'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';
import BottomNavigationBar from './BottomNavigationBar';

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <BottomNavigationBar navigator={this.props.navigator}/>
            </View>
        )
    }
}