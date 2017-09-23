'use strict';
import React, {Component} from "react";
import {
    Animated,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    RefreshControl,
} from "react-native";
import TitleBar from '../components/TitleBar';
import Utils from '../utils/Utils';
import {doDoing} from '../actions/AndroidAction';
import Progress from '../components/ProgressComponent';
import {connect} from 'react-redux';
import commonStyles from "../styles/Common";
import ToastUtils from "../utils/ToastUtils";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class AndroidView extends Component {

    componentDidMount() {
        // 请求数据
        this
            .props
            .dispatch(doDoing(1));
    }

    renderLoadingView() {
        return (
            <View>
                <TitleBar propsPara={this.props.navigation.navigate} title='Android'/>
                <Progress visible={this.props.android.isShowProgress}/>
            </View>
        );
    }

    //加载失败view
    renderErrorView() {
        return (
            <View style={[styles.container, commonStyles.bgColor]}>
                <TitleBar propsPara={this.props.navigation.navigate} title='Android'/>
                <Text style={styles.errorText}>
                    网络连接出错,请检查后重试!
                </Text>
            </View>
        );
    }

    //点击列表点击每一行
    _clickItem(item,index) {
        alert(item.desc)
        alert(index)
    }


    //返回itemView
    _renderItemView({item,index}) {
        return (
            <TouchableOpacity
                style={commonStyles.item}
                key={item.index}
                activeOpacity={1}
                onPress={() => this._clickItem(item,index)}>

                <Text
                    numberOfLines={2}
                    lineHeight={Utils.getHeight(20)}
                    style={commonStyles.itemTop}>{item.desc}</Text>

                <Text
                    numberOfLines={1}
                    lineHeight={Utils.getHeight(10)}
                    style={commonStyles.itemBottom}>⟨{item.who}⟩</Text>
            </TouchableOpacity>
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
        return (
            <View style={{height:Utils.getHeight(50),flex:1}}>
            </View>
        );
    }

    _separator() {
        return (
            <View style={commonStyles.separator}>
            </View>
        );
    }
    _listEmptyComponent(){
        return(
            <View style={[styles.container, commonStyles.bgColor]}>
                <Text style={[styles.emptyData,commonStyles.bgColor]}>
                    数据为空!
                </Text>
                <Text style={[styles.emptyData,commonStyles.bgColor]}/>
            </View>
        );
    }
    _refreshing() {
        ToastUtils.show('刷新成功');
    }

    _onload() {
        ToastUtils.show('到达底部');
        this
        .props
        .dispatch(doDoing(2));
    }
    _sourceData(){
        if(this.props.android&&this.props.android.data&&this.props.android.data.results){
           return this.props.android.data.results
        }else{
           return null
        }
    }
    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item, index) => item._id;

    renderData() {
        console.log(this.props.android)
        return (
            <View style={commonStyles.bgColor}>
                <TitleBar propsPara={this.props.navigation.navigate} title='Android'/>
                    <AnimatedFlatList
                        data={this._sourceData()}
                        renderItem={this._renderItemView.bind(this)}
                        //ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        //ItemSeparatorComponent={this._separator}
                        ListEmptyComponent={this._listEmptyComponent}
                        onRefresh={this._refreshing()}
                        refreshing={this.props.android.isShowProgress}
                        keyExtractor={this._keyExtractor}
                        refreshControl={
                             <RefreshControl
                                 refreshing={false}
                             />
                         }
                        onEndReachedThreshold={0.1}
                        onEndReached={() => {
                            this._onload()
                        }}
                        getItemLayout={(data, index) => (
                             {length: Utils.getHeight(67), offset: Utils.getHeight(67) * index, index}
                         )}
                    />
            </View>
        );
    }

    render() {
        //第一次加载等待的view
        console.log('----this.props.android.status:' + this.props.android.status);
        if (this.props.android.status == 'doing') {
            return this.renderLoadingView();
        } else if (this.props.android.status == 'error') {
            //请求失败view
            return this.renderErrorView();
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
    emptyData:{
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
    const {android} = state;
    return {android}
}

export default connect(mapStateToProps)(AndroidView);