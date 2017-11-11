"use strict";

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import Utils from '../utils/Utils';
import commonStyles from "../styles/Common";
import Image from 'react-native-image-progress';
const BGWASH = 'rgba(255,255,255,0.8)';

export default class GirlDetailView extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: navigation.state.params.title,
            headerTitleStyle: {
                fontSize: Utils.getFontSize(16),
            },
        }
    )

    _renderErrorView() {
        return (
            <View style={[styles.container, commonStyles.bgColor]}>
                <Text style={styles.errorText}>
                    网络连接出错,请检查后重试!
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    source={{uri: this.props.navigation.state.params.url}}
                    indicator={ActivityIndicator}
                    renderError={this._renderErrorView}
                    style={{
                        width: Utils.size.width,
                        height: Utils.size.height,
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    webView: {
        backgroundColor: BGWASH,
        height: Utils.size.height,
        width: Utils.size.width,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    errorText: {
        flex: 1,
        // position:'absolute',
        alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: Utils.size.height / 5 * 2,
    },
});
