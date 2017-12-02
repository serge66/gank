"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    ActivityIndicator,
    TouchableOpacity,
    Image
} from 'react-native';
import Utils from "../utils/Utils";
import CommonStyles from '../styles/Common';
import ClickUtil from "../utils/ClickUtil";


export default class MyItem extends React.Component {

    static defaultProps = {
        propsNavigate: null,
    }

    //点击列表点击每一行
    _clickItem() {
        if (!ClickUtil.noDoubleClick()) {
            return;
        }
        this.props.propsNavigate('Details', {title: this.props.desc, url: this.props.url});
    }

    render() {
        if (this.props.noImg) {
            return (
                <TouchableOpacity
                    style={[CommonStyles.item, {height: Utils.getHeight(67)}]}
                    key={this.props.index}
                    activeOpacity={1}
                    onPress={() => this._clickItem()}>

                    <Text
                        numberOfLines={1}
                        lineHeight={Utils.getHeight(20)}
                        style={CommonStyles.itemTop}>
                        {this.props.desc}</Text>

                    <View style={styles.myView2}>
                        <Text
                            numberOfLines={1}
                            lineHeight={Utils.getHeight(10)}
                            style={CommonStyles.itemBottom}>{this.props.who}</Text>
                        <Text
                            numberOfLines={1}
                            lineHeight={Utils.getHeight(10)}
                            style={CommonStyles.itemBottomRight}>{this.props.publishedAt}</Text>
                    </View>
                </TouchableOpacity>
            );

        } else {

            switch (this.props.type) {

                case '休息视频':
                    return (
                        <TouchableOpacity
                            style={[CommonStyles.item, {height: Utils.getHeight(67)}]}
                            key={this.props.key}
                            activeOpacity={1}
                            onPress={() => this._clickItem()}>

                            <View style={styles.myView}>
                                <Image
                                    source={require('../assets/img/icon_video.png')} style={styles.img}/>

                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(20)}
                                    style={CommonStyles.itemTop}>
                                    {this.props.desc}</Text>
                            </View>

                            <View style={styles.myView2}>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottom}>{this.props.who}</Text>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottomRight}>{this.props.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                    break;
                case '瞎推荐':
                    return (
                        <TouchableOpacity
                            style={[CommonStyles.item, {height: Utils.getHeight(67)}]}
                            key={this.props.key}
                            activeOpacity={1}
                            onPress={() => this._clickItem()}>

                            <View style={styles.myView}>
                                <Image
                                    source={require('../assets/img/recommendation.png')} style={styles.img}/>

                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(20)}
                                    style={CommonStyles.itemTop}>
                                    {this.props.desc}</Text>
                            </View>

                            <View style={styles.myView2}>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottom}>{this.props.who}</Text>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottomRight}>{this.props.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                    break;
                case 'Android':
                    return (
                        <TouchableOpacity
                            style={[CommonStyles.item, {height: Utils.getHeight(67)}]}
                            key={this.props.key}
                            activeOpacity={1}
                            onPress={() => this._clickItem()}>

                            <View style={styles.myView}>
                                <Image
                                    source={require('../assets/img/icon_android.png')} style={styles.img}/>

                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(20)}
                                    style={CommonStyles.itemTop}>
                                    {this.props.desc}</Text>
                            </View>

                            <View style={styles.myView2}>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottom}>{this.props.who}</Text>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottomRight}>{this.props.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                    break;
                case '前端':
                    return (
                        <TouchableOpacity
                            style={[CommonStyles.item, {height: Utils.getHeight(67)}]}
                            key={this.props.key}
                            activeOpacity={1}
                            onPress={() => this._clickItem()}>

                            <View style={styles.myView}>
                                <Image
                                    source={require('../assets/img/icon_js.png')} style={styles.img}/>

                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(20)}
                                    style={CommonStyles.itemTop}>
                                    {this.props.desc}</Text>
                            </View>

                            <View style={styles.myView2}>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottom}>{this.props.who}</Text>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottomRight}>{this.props.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                    break;
                case 'iOS':
                    return (
                        <TouchableOpacity
                            style={[CommonStyles.item, {height: Utils.getHeight(67)}]}
                            key={this.props.key}
                            activeOpacity={1}
                            onPress={() => this._clickItem()}>

                            <View style={styles.myView}>
                                <Image
                                    source={require('../assets/img/icon_ios.png')} style={styles.img}/>

                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(20)}
                                    style={CommonStyles.itemTop}>
                                    {this.props.desc}</Text>
                            </View>

                            <View style={styles.myView2}>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottom}>{this.props.who}</Text>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottomRight}>{this.props.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    );

                    break;
                case '拓展资源':

                    return (
                        <TouchableOpacity
                            style={[CommonStyles.item, {height: Utils.getHeight(67)}]}
                            key={this.props.key}
                            activeOpacity={1}
                            onPress={() => this._clickItem()}>

                            <View style={styles.myView}>
                                <Image
                                    source={require('../assets/img/resource.png')} style={styles.img}/>

                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(20)}
                                    style={CommonStyles.itemTop}>
                                    {this.props.desc}</Text>
                            </View>

                            <View style={styles.myView2}>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottom}>{this.props.who}</Text>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottomRight}>{this.props.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                    break;
                case 'App':
                    return (
                        <TouchableOpacity
                            style={[CommonStyles.item, {height: Utils.getHeight(67)}]}
                            key={this.props.key}
                            activeOpacity={1}
                            onPress={() => this._clickItem()}>

                            <View style={styles.myView}>
                                <Image
                                    source={require('../assets/img/APP.png')} style={styles.img}/>

                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(20)}
                                    style={CommonStyles.itemTop}>
                                    {this.props.desc}</Text>
                            </View>

                            <View style={styles.myView2}>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottom}>{this.props.who}</Text>
                                <Text
                                    numberOfLines={1}
                                    lineHeight={Utils.getHeight(10)}
                                    style={CommonStyles.itemBottomRight}>{this.props.publishedAt}</Text>
                            </View>
                        </TouchableOpacity>
                    );

                    break;
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // position:'absolute'
    },
    errorText: {
        flex: 1,
        // position:'absolute',
        alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: Utils.size.height / 5 * 2,
    },
    emptyData: {
        flex: 1,
        // position:'absolute',
        alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: Utils.size.height / 5 * 2,
    },
    title: {
        fontSize: Utils.getFontSize(15),
        color: 'blue'
    },
    content: {
        fontSize: Utils.getFontSize(15),
        color: 'black'
    },
    img: {
        height: Utils.getHeight(20),
        width: Utils.getWidth(20),
        marginRight: Utils.getWidth(5)
    },
    myView: {
        height: Utils.getHeight(40),
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    myView2: {
        // height: Utils.getHeight(40),
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
});