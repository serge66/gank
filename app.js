"use strict";

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Navigator from './src/navigators/Index';

class Root extends Component {
    render() {
        return (
            <Navigator/>
        )
    }
}

AppRegistry.registerComponent('gank', () => Root);