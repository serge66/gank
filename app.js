"use strict";

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store/Index';
import './src/utils/Constants';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Navigator from './src/navigators/Index';

const store = configureStore()
class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('gank', () => Root);