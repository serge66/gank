"use strict";

import React, {Component} from 'react';

import {
    StyleSheet,
    View
} from "react-native";
import * as Progress from "react-native-progress";
import Utils from '../utils/Utils';

export default class ProgressDialogCS extends Component {

    render() {
        return (
            <View style={[styles.flex, styles.posi]}>
                <View style={[styles.progressContent, styles.flex]}>
                    <Progress.CircleSnail
                        style={[styles.progress]} color={['#2196F3']} size={60}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    posi: {
        position: 'absolute'
    },
    progress: {
        margin: 10,
        alignSelf: 'center'
    },
    progressContent: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55555555',
        width: Utils.size.width,
        height: Utils.size.height,
    },
    topContent: {
        position: 'absolute',
        height: Utils.size.height,
    }
});
