import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Wrapper from './Wrapper';

export default class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* status bar */}
                <StatusBar
                    backgroundColor="#ff8c00"
                    barStyle="light-content"/>

                {/* Content data */}
                <Navigator
                    initialRoute={{component: Wrapper}}
                    configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                    renderScene={(route, navigator) => {
                        return <route.component navigator={navigator} {...route.args}/>
                    }
                    }
                />
            </View>
        )
    }
}
