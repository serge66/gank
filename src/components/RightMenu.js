"use strict";

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native';
import Utils from '../utils/Utils';
import CommonStyles from '../styles/Common';


export default class RightMenu extends React.Component {

    // getDefaultProps() {
    //     return {
    //         propsPara: null,
    //     }
    // },
    static defaultProps = {
        propsPara: null,
    }

    _search() {
        this.props.propsPara('Search'); // open drawer

    }

    _onClick() {
        // this.props.propsPara('DrawerOpen'); // open drawer
        // this.props.navigation.navigate('DrawerClose'); // close drawer
    }


    componentWillMount() {

    }

    _iosComponent() {
        return (
            <TouchableOpacity
                onPress={() => this._onClick()}
                style={[styles.container]}>
                <Image
                    resizeMode={'contain'}
                    source={require('../assets/img/icon_menu_right_ios.png')}
                    style={styles.img}/>
            </TouchableOpacity>
        )
    }

    _androidComponent() {
        return (
            <TouchableOpacity
                onPress={() => this._onClick()}
                style={[styles.container]}>
                <Image
                    resizeMode={'contain'}
                    source={require('../assets/img/icon_menu_right.png')}
                    style={styles.img}/>
            </TouchableOpacity>
        )
    }

    render() {

        if (Platform.OS == 'ios') {
            return this._iosComponent();
        }
        return this._androidComponent();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: Utils.getWidth(50),
        // height: Utils.getHeight(30),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: Utils.getWidth(50),
        height: Utils.getHeight(30),
        margin: 1,
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        fontSize: Utils.getWidth(17),
    },
});
