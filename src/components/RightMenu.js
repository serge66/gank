"use strict";

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    Clipboard, Linking,
} from 'react-native';
import Utils from '../utils/Utils';
import CommonStyles from '../styles/Common';
import Menu from 'teaset/components/Menu/Menu';

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
    _copyURL(url){
        Clipboard.setString(url);
    }
    _openBrowser(url){
            Linking.canOpenURL(url).then(supported => {
                if (!supported) {
                    console.log('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url);
                }
            }).catch(err => console.error('An error occurred', err));
    }

    show(view, align) {
        view.measureInWindow((x, y, width, height) => {
            let items = [
                {title: 'Copy URL',  onPress: () => this._copyURL(this.props.url)},
                {title: 'Open Browser',  onPress: () => this._openBrowser(this.props.url)},
            ];
            Menu.show({x, y, width, height}, items, {align});
        });
    }


    _iosComponent() {
        return (
            <TouchableOpacity
                ref='touchable'
                onPress={() => this.show(this.refs['touchable'], 'end')}
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
                ref='touchable'
                onPress={() => this.show(this.refs['touchable'], 'end')}
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
