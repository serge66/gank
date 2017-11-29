"use strict";

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    RefreshControl
} from 'react-native';
import Utils from '../utils/Utils';
// import {} from "react-navigation/lib/views/assets";
import commonStyles from '../styles/Common';
import {doDoing} from '../redux/actions/QueryAction';
import Progress from '../components/ProgressComponent';
import {connect} from 'react-redux';
import ToastUtils from '../utils/ToastUtils';
import MyItem from '../components/MyItem';

let mCurPage;
let isFirstRefresh;
let thiz;
let content;

class SearchView extends Component {
    static navigationOptions = ({

        // headerTitle:(
        //     <View style={{width:60,height:20,backgroundColor:'red'}}/>
        // ),
        // headerBackTitle: 'Back',
        // headerTruncatedBackTitle: 'Back',
        headerRight: (
            <View
                style={[{width: Utils.size.width - 50}]}>
                <TextInput
                    editable={true}
                    maxLength={15}
                    multiline={false}//
                    // autoFocus={true}//如果为true，在componentDidMount后会获得焦点。默认值为false。
                    //如果为true，文本框会在提交的时候失焦。对于单行输入框默认值为true，多行则为false。注意：对于多行输入框来说，
                    // 如果将blurOnSubmit设为true，则在按下回车键时就会失去焦点同时触发onSubmitEditing事件，而不会换行。
                    blurOnSubmit={true}
                    placeholder={'search'}
                    // inlineImageLeft={'react-navigation/lib/views/assets/back-icon.png'}//指定一个图片放置在左侧。
                    // inlineImagePadding={10}//给放置在左侧的图片设置padding样式
                    returnKeyLabel={'search'}//将软键盘返回键上的文字设置为指定的 label。可以用它来代替 returnKeyType. android
                    returnKeyType={'search'}//决定“确定”按钮显示的内容。 ios
                    // clearButtonMode={'always'}//是否要在文本框右侧显示“清除”按钮。ios('never', 'while-editing', 'unless-editing', 'always')
                    enablesReturnKeyAutomatically={true}
                    //当一个键被按下的时候调用此回调。传递给回调函数的参数为{ nativeEvent: { key: keyValue } }，
                    // 其中keyValue即为被按下的键。会在onChange之前调用。
                    // onKeyPress={}
                    style={{
                        fontSize: Utils.getFontSize(15), height: Utils.getHeight(40)
                    }}
                    onSubmitEditing={(event) => thiz._onSubmitEditing(event.nativeEvent.text)}
                />
            </View>
        ),
        // headerLeft:(
        //     <View>
        //         <Text>left</Text>
        //     </View>
        // ),
        headerStyle: {
            backgroundColor: '#fff'
        },
        // headerTitleStyle:{
        //     color:'red'
        // },
        // headerBackTitleStyle:{
        //     tintColor:'#789'
        // },
        // headerTintColor:'#956',
        gesturesEnabled: true
    })

    _onSubmitEditing(s) {
        if (s == null || s == '') {
            return;
        }
        content = s.trim();
        // ToastUtils.show(content+'-ssss');
        isFirstRefresh = true;
        this._refreshing();
    }

    componentWillMount() {
        thiz = this;
        mCurPage = 1;
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        // if (this.props.android && this.props.android.data) {
        //     isFirst = false;
        // }
    }

    renderLoadingView() {
        return (
            <View>
                {/*<TitleBar propsPara={this.props.navigation.navigate} title='Android'/>*/}
                <Progress visible={this.props.query.isRefreshing || this.props.query.isLoading}/>
            </View>
        );
    }

    //加载失败view
    renderErrorView() {
        return (
            <View style={[styles.container, commonStyles.bgColor]}>
                {/*<TitleBar propsPara={this.props.navigation.navigate} title='Android'/>*/}
                <Text style={styles.errorText}>
                    网络连接出错,请检查后重试!
                </Text>
            </View>
        );
    }

    //返回itemView
    _renderItemView({item, index}) {
        return (
            <MyItem
                noImg={true}
                propsNavigate={this.props.navigation.navigate}
                url={item.url}
                key={item.index}
                desc={item.desc}
                who={item.who}
                publishedAt={item.publishedAt.substring(0,10)}
            />
        );
    }

    _header() {
        return (
            <View>
                <Text>header</Text>
            </View>
        );
    }

    _footer() {
        //当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素
        // 的距离时调用。原生的滚动事件会被作为参数传递。译注：当第一次渲染时，如果数据不足一屏（比如初始值是空的），
        // 这个事件也会被触发，请自行做标记过滤。 下面这个标记尚未彻底解决问题 isFirstRefresh
        if (isFirstRefresh) {
            console.log('sssssssssssssssssssss1');
            return thiz._foot_no_loading();
        } else if (!thiz.props.query.isLoading) {
            console.log('sssssssssssssssssssss2');
            return thiz._foot_no_loading();
        } else {
            console.log('sssssssssssssssssssss3');
            return thiz._foot_loading();
        }
    }

    _foot_loading() {
        return (
            <View style={{height: Utils.getHeight(50), flex: 1}}>
                <ActivityIndicator
                    // color={this.props.color}
                    size="small"
                    style={{flex: 1}}
                />
            </View>
        );
    }

    _foot_no_loading() {
        return (
            <View style={{height: Utils.getHeight(50), flex: 1}}>
            </View>
        );
    }

    _separator() {
        return (
            <View style={commonStyles.separator}>
            </View>
        );
    }

    _listEmptyComponent() {
        return (
            <View style={[styles.container, commonStyles.bgColor]}>
                <Text style={[styles.emptyData, commonStyles.bgColor]}>
                    数据为空!
                </Text>
                <Text style={[styles.emptyData, commonStyles.bgColor]}/>
            </View>
        );
    }

    _refreshing() {
        if (content == null || content == '') {
            return;
        }
        mCurPage = 1;
        let opt = {
            num: mCurPage,
            isRefreshing: true,
            isLoading: false,
            content: content
        };
        thiz
            .props
            .dispatch(doDoing(opt));
        console.log('xxxxxxxxxxxxxxxx刷新成功');
    }

    _onload() {
        // ToastUtils.show('到达底部');
        if (content == null || content == '') {
            return;
        }
        console.log('1111111111111111111111')
        console.log(thiz.props.query.data.length)
        console.log(content + mCurPage)

        //解决redux缓存数据 列表页数错乱问题
        if (thiz.props !== null && thiz.props.query !== null
            && thiz.props.query.data !== null && thiz.props.query.data.length > 0) {

            // if (thiz.props.query.data.length % 20 > 0) {
            //     mCurPage = thiz.props.query.data.length /20 + 1;
            // } else {
            //     mCurPage = thiz.props.query.data.length / 20;
            // }

            mCurPage = Math.ceil(thiz.props.query.data.length / 20);
        }
        console.log(mCurPage)
        mCurPage++;
        let opt = {
            num: mCurPage,
            isRefreshing: false,
            isLoading: true,
            content: content
        };
        thiz
            .props
            .dispatch(doDoing(opt));
        console.log('xxxxxxxxxxxxxxxx加载更多');
    }

    _sourceData() {
        if (this.props.query && this.props.query.data) {
            // isFirst = false;
            return this.props.query.data
        } else {
            return null
        }
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item, index) => item.ganhuo_id;

    renderData() {
        console.log(this.props.query)
        return (
            <View style={[commonStyles.bgColor, commonStyles.flex1]}>
                {/*<TitleBar propsPara={this.props.navigation.navigate} title='Android'/>*/}
                <FlatList
                    showsVerticalScrollIndicator={true}//是否显示垂直滚动条
                    showsHorizontalScrollIndicator={false}//是否显示水平滚动条
                    numColumns={1}//每行显示1个
                    enableEmptySections={true}//数据可以为空
                    style={[commonStyles.bgColor, commonStyles.flex1]}
                    data={this._sourceData()}
                    renderItem={this._renderItemView.bind(this)}
                    //ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    //ItemSeparatorComponent={this._separator}
                    ListEmptyComponent={this._listEmptyComponent}
                    // refreshing={false}
                    keyExtractor={this._keyExtractor}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.query.isRefreshing}
                            onRefresh={this._refreshing}//此处需要的是方法 _regreshing后面不能有()
                        />
                    }
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        this._onload()//此处需要的是方法 用箭头函数也可以
                    }}
                    //如果设置了getItemLayout，那么renderItem的高度必须和这个高度一样，
                    // 否则加载一段列表后就会出现错乱和显示空白。
                    getItemLayout={(data, index) => (
                        {length: Utils.getHeight(67), offset: Utils.getHeight(67) * index, index}
                    )}
                />
            </View>
        );
    }

    render() {
        console.log('----this.props.query.status:' + this.props.query.status);
        //当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素
        // 的距离时调用。原生的滚动事件会被作为参数传递。译注：当第一次渲染时，如果数据不足一屏（比如初始值是空的），
        // 这个事件也会被触发，请自行做标记过滤。 下面这个标记尚未彻底解决问题
        if (this.props.query.status == 'success') {
            isFirstRefresh = false;
        }
        if (this.props.query.status == 'error') {
            //请求失败view
            return this.renderErrorView();
        } else if (this.props.query.status == 'init') {
            return null;
        }
        //加载数据
        return this.renderData();
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
    }

});

//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
function mapStateToProps(state) {
    const {query} = state;
    return {query}
}

export default connect(mapStateToProps)(SearchView);