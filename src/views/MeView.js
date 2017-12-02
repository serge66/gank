"use strict";

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity
} from 'react-native';
import TitleBar from '../components/TitleBar';
import CommonStyles from "../styles/Common";
import ClickUtil from "../utils/ClickUtil";
import Utils from "../utils/Utils";

export default class MeView extends Component {

    _onClick(title,url) {
        if (!ClickUtil.noDoubleClick()) {
            return;
        }
        this.props.navigation.navigate('Details',{title:title,url:url});
    }
    _onClickOpenEmail(url){
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    render() {
        return (
            <View style={[CommonStyles.bgColor, CommonStyles.flex1]}>
                <TitleBar propsPara={this.props.navigation.navigate} title='About'/>
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity style={styles.touchable}
                                          activeOpacity={global.constants.ActiveOpacityNum}
                                          onPress={() => {
                                              // this.props.items.navigation.navigate('All');
                                          }}>
                            <Text style={[styles.titleMsg]}>Gank</Text>
                            <Image
                                resizeMode={'contain'}
                                source={require('../assets/img/gank.png')} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.welcome}>
                        <Text>
                            CSDN:
                        </Text>
                        <Text
                            style={styles.link}
                            onPress={() => this._onClick('CSDN','http://blog.csdn.net/vitamio')}>
                            http://blog.csdn.net/vitamio
                        </Text>
                    </Text>

                    <Text style={styles.welcome}>
                        <Text>
                            简书:
                        </Text>
                        <Text
                            style={styles.link}
                            onPress={() => this._onClick('简书','http://www.jianshu.com/u/2ac1317d87c9')}>
                            http://www.jianshu.com/u/2ac1317d87c9
                        </Text>
                    </Text>

                    <Text style={styles.welcome}>
                        <Text>
                            Email:
                        </Text>
                        <Text
                            style={styles.link}
                            onPress={() => this._onClickOpenEmail("mailto:lishengjiework@gmail.com")}>
                            lishengjiework@gmail.com
                        </Text>
                    </Text>
                    <Text style={styles.welcome}>
                        <Text>
                            Demo:
                        </Text>
                        <Text
                            style={styles.link}
                            onPress={() => this._onClick('Gank','https://github.com/serge66/gank')}>
                            https://github.com/serge66/gank
                        </Text>
                    </Text>
                    <Text style={styles.welcome}>
                        <Text>
                            Api:
                        </Text>
                        <Text
                            style={styles.link}
                            onPress={() => this._onClick('Gank','http://gank.io')}>
                            http://gank.io
                        </Text>
                    </Text>

                    <Text style={styles.instructions}>
                        Version: 1.0
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    link: {
        color: '#2e3c99'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: Utils.getFontSize(16),
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: Utils.getWidth(5),
    },
    touchable: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height:'100%',
        width: '100%',
    },
    img: {
        height: Utils.getHeight(200),
        width: Utils.getWidth(200),
    },
    titleMsg: {
        textAlign: 'center',
        color: '#000',
        // paddingTop: 30,
        paddingBottom: Utils.getWidth(5),
        fontSize: Utils.getFontSize(30)
    }
});

