"use strict";

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import TitleBar from '../components/TitleBar';
// import ToastUtils from '../utils/ToastUtils';

export default class All extends Component {
    _navigator() {
        this.props.navigation.navigate('DrawerOpen'); // open drawer
        // this.props.navigation.navigate('DrawerClose'); // close drawer
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleBar propsPara={this.props.navigation.navigate} title='All'/>
                <View></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

