"use strict";

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Utils from '../utils/Utils';

var TitleBar = React.createClass({

    _search() {
        this.props.propsPara('Search'); // open drawer

    },

    _menu() {
        this.props.propsPara('DrawerOpen'); // open drawer
        // this.props.navigation.navigate('DrawerClose'); // close drawer
    },

    getDefaultProps() {
        return {
            propsPara: null,
        }
    },

    componentWillMount() {

    },

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        activeOpacity={global.constants.ActiveOpacityNum}
                        onPress={() => this._menu()}>
                        <Image resizeMode={'center'}
                               source={require('../assets/img/icon_menu.png')}
                               style={styles.img}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>All</Text>
                </View>
                <View>
                    <TouchableOpacity
                        activeOpacity={global.constants.ActiveOpacityNum}
                        onPress={() => this._search()}>
                        <Image resizeMode={'center'}
                               source={require('../assets/img/icon_search.png')}
                               style={styles.img}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: Utils.size.width,
        height: Utils.getHeight(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: Utils.getWidth(15),
        paddingRight: Utils.getWidth(15),
        borderBottomWidth:Utils.getHeight(1),
        borderBottomColor:'#cccccc'
    },
    img: {
        width: Utils.getWidth(20),
        height: Utils.getHeight(20),
        margin: 1,
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        fontSize: Utils.getWidth(17),
    },
});

export default TitleBar;