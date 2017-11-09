'use strict';
/**
 * @class StylesCommon
 * @desc 通用样式
 * */

import React from 'react';
import {
    Platform,
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native'
import Util from "../utils/Utils";

var cell_w = Dimensions.get('window').width;

function adaptiveTopiOS() {
    if (Platform.OS == 'ios') {
        return 20
    } else {
        return 0
    }
}

var CommonStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    bgColor: {
        backgroundColor: '#F5FCFF'
    },
    mgt5: {
        marginTop: 5,
    },
    mgb5: {
        marginBottom: 5,
    },
    pdt5: {
        paddingTop: 5,
    },
    pdb5: {
        paddingBottom: 5,
    },
    textCenter: {
        textAlign: 'center',
        flex: 1,
    },
    textAli: {
        textAlign: 'right',
    },
    navbar: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    justAlign: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    modal: {
        height: 100,
        width: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },

    viewList: {
        padding: 10,
        fontSize: 15,
    },

    flexRow: {
        flexDirection: 'row',
    },

    flex1: {
        flex: 1,
    },
    adaptiveTopiOS: {
        paddingTop: adaptiveTopiOS(),
        backgroundColor: '#ffffff'
    },
    item:{
        // height:Util.getHeight(67),
        // backgroundColor: '#F5FCFF',
        // paddingLeft:Util.getWidth(7),
        // paddingRight:Util.getWidth(7),
        // paddingTop:Util.getHeight(5),
        // paddingBottom:Util.getHeight(5),
        // justifyContent:'center',
        flex: 1,
        backgroundColor: 'white',
        padding: Util.getWidth(10),
        paddingVertical:Util.getHeight(20),
        marginLeft: Util.getWidth(5),
        marginRight:Util.getHeight(5),
        marginVertical: Util.getHeight(5),
        borderColor: '#dddddd',
        borderStyle: null,
        borderWidth: Util.getWidth(0.5),
        borderRadius: Util.getWidth(2),
        shadowColor: 'gray',    // 设置阴影
        shadowOffset: {width:0.5, height: 0.5},  
        shadowOpacity: 0.4,   // 透明度
        shadowRadius: 1,
        elevation:Util.getHeight(2)   //   高度，设置Z轴，可以产生立体效果
    
    },
    itemTop:{
        fontSize:Util.getFontSize(15),
        color: 'blue',
    },
    itemBottom:{
        fontSize:Util.getFontSize(15),
        color: 'black',
        // textAlign:'right',
        marginTop:Util.getHeight(2),
        textAlignVertical:'bottom',
        marginBottom:Util.getHeight(2),
    },
    separator:{
        backgroundColor:'#cccccccc',
        height:Util.getHeight(0.5),
        paddingLeft:Util.getWidth(7),
        paddingRight:Util.getWidth(7),
    },
});

export default  CommonStyles;
