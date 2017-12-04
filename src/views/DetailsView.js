"use strict";

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    WebView
} from 'react-native';
import Utils from '../utils/Utils';
import commonStyles from "../styles/Common";
import RightMenu from '../components/RightMenu';

const BGWASH = 'rgba(255,255,255,0.8)';

export default class DetailsView extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: navigation.state.params.title,
            headerTitleStyle: {
                fontSize: Utils.getFontSize(13),
            },
            // headerRight: (
            //     <RightMenu/>
            // ),
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
                <WebView
                    ref={(webview) => this.webview = webview}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.props.navigation.state.params.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    // onNavigationStateChange={this._onNavigationStateChange}
                    // onShouldStartLoadWithRequest={this._onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    // onMessage={this._onMessage}
                    scalesPageToFit={true}
                    //allowsInlineMediaPlayback bool
                    //指定HTML5视频是在网页当前位置播放还是使用原生的全屏播放器播放。 默认值为false。
                    //注意 : 要让视频在网页中播放，不光要将这个属性设为true，HTML中的视频元素本身也需要包含webkit-playsinline属性。
                    allowsInlineMediaPlayback={true}
                    dataDetectorTypes={'link'}
                    //设置页面中的HTML5音视频是否需要在用户点击后再开始播放。默认值为true.
                    mediaPlaybackRequiresUserAction={true}
                    // onError={}//加载失败时调用。
                    // onLoad={}//加载成功时调用
                    renderError={this._renderErrorView}//设置一个函数，返回一个视图用于显示错误。
                    // renderLoading={}//设置一个函数，返回一个加载指示器
                    scrollEnabled={true}
                    mixedContentMode={'compatibility'}
                    saveFormDataDisabled={true}
                />
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

//javaScriptEnabled:是否启用JavaScript （android），ios无此属性，已经默认true
//domStorageEnabled:是否开启DOM本地存储(android)
//decelerationRate:指定一个浮点数,用于设置触摸停止后，多块速度停止滚动,也可传字符串，normal,fast
//onNavigationStateChange:当webview加载开始或者结束回调函数
//onShouldStartLoadWithRequest:允许为webview发起的请求运行一个自定义的处理函数。返回true或false表示是否要继续执行响应的请求(ios)
//startInLoadingState:强制WebView在第一次加载时先显示loading视图。默认为true
//scalesPageToFit:设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例。
//automaticallyAdjustContentInsets 控制是否调整放置在导航条、标签栏或工具栏后面的web视图的内容。默认值是true
//source={require('./helloworld.html')可以加载html
//postMessage RN发送消息给html
//onMessage:html发送消息给RN
//injectJavaScript注入脚本