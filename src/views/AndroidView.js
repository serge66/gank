'use strict';
import React, {Component} from "react";
import {
    ActivityIndicator,
    Animated,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import TitleBar from '../components/TitleBar';
import ToastUtils from '../utils/ToastUtils';
import {doDoing} from '../actions/AndroidAction';
import Progress from '../components/ProgressComponent';
import {connect} from 'react-redux';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const REQUEST_URL = 'http://gank.io/api/data/Android/10/1';

class AndroidView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: []
        }
    }

    //网络请求
    fetchData() {
        //这个是js的访问网络的方法
        fetch(REQUEST_URL).then((response) => response.json()).then((responseData) => {
            let data = responseData.results;
            let dataBlob = [];
            let i = 0;
            data.map(function (item) {
                dataBlob.push({key: i, value: item})
                i++;
            });
            this.setState({
                //复制数据源
                dataArray: dataBlob,
                isLoading: false
            });
            data = null;
            dataBlob = null;
        }).catch((error) => {
            this.setState({error: true, errorInfo: error})
        }).done();
    }

    componentDidMount() {
        // 请求数据
        this
            .props
            .dispatch(doDoing());
        // this.fetchData();

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
    renderErrorView(error) {
        return (
            <View style={styles.container}>
                <Text>
                    Fail: {error}
                </Text>
            </View>
        );
    }

    //返回itemView
    renderItemView({item}) {
        return (
            <View>
                <Text style={styles.title}>name: {item.desc}
                </Text>
                <Text style={styles.content}>description: {item.who}</Text>
            </View>
        );
    }

    renderData() {
        console.log(this.props.android)
        return (
            <View>
                <TitleBar propsPara={this.props.navigation.navigate} title='Android'/>
                <ScrollView >
                    <AnimatedFlatList
                        data={this.props.android.data.results}
                        renderItem={this.renderItemView}/>
                </ScrollView>
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
            return this.renderErrorView(this.state.errorInfo);
        }
        //加载数据
        return this.renderData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        fontSize: 15,
        color: 'blue'
    },
    content: {
        fontSize: 15,
        color: 'black'
    }

});

//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
function mapStateToProps(state) {
    const {android} = state;
    return {android}
}

export default connect(mapStateToProps)(AndroidView);