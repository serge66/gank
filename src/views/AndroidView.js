"use strict";

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import TitleBar from '../components/TitleBar';
import ToastUtils from '../utils/ToastUtils';
import {doDoing} from '../actions/AndroidAction';
import Progress from '../components/ProgressComponent';
import {connect} from 'react-redux';

class AndroidView extends Component {
    _navigator() {
        this
            .props
            .navigation
            .navigate('DrawerOpen'); // open drawer
        // this.props.navigation.navigate('DrawerClose'); // close drawer
    }

    componentDidMount() {
        console.log('界面挂载');
        this
            .props
            .dispatch(doDoing());
    }
    render() {
        return (
            <View style={styles.container}>
                <TitleBar propsPara={this.props.navigation.navigate} title='Android'/>
                <View></View>
                <Progress visible={this.props.android.isShowProgress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
function mapStateToProps(state) {
    const {android} = state;
    return {android}
}

export default connect(mapStateToProps)(AndroidView);