"use strict";
import React from 'react';
import {StackNavigator, DrawerItems, DrawerNavigator} from "react-navigation";
import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';
import All from '../views/AllView';
import Android from '../views/AndroidView';
import Utils from '../utils/Utils';
import CustomDrawerContentComponent from './CustomDrawerContentComponent';
import SearchView from "../views/SearchView";
import DetailsView from "../views/DetailsView";

const MyApp = DrawerNavigator({
    // All: {
    //      screen: All,
    //      navigationOptions: {
    //          drawerLabel: 'All',
    //          drawerIcon: ({tintColor}) => (
    //              <Image
    //                  source={require('../assets/img/icon_all.png')}
    //                  style={[styles.icon, {tintColor: tintColor}]}/>
    //          ),
    //      },
    //
    //  },
    Android: {
        screen: Android,
        navigationOptions: {
            drawerLabel: 'Android',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/img/icon_android.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
    },
    iOS: {
        screen: All,
        navigationOptions: {
            drawerLabel: 'iOS',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/img/icon_ios.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
    },
    JS: {
        screen: All,
        navigationOptions: {
            drawerLabel: 'JS',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/img/icon_js.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
    },
    Girl: {
        screen: All,
        navigationOptions: {
            drawerLabel: 'Girl',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/img/icon_girl.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
    },
    Video: {
        screen: All,
        navigationOptions: {
            drawerLabel: 'Video',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/img/icon_video.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
    },
    Me: {
        screen: All,
        navigationOptions: {
            drawerLabel: 'Me',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/img/icon_me.png')}
                    style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
    },
}, {
    drawerWidth: Utils.size.width / 4 * 3,
    drawerPosition: 'left',
    backBehavior: 'initialRoute',
    contentComponent: props => <CustomDrawerContentComponent {...props}/>,
    contentOptions: {
        initialRouteName: 'All',
        activeItemKey: 'All',//识别活动路线的钥匙
        labelStyle: {
            height: Utils.getHeight(20),
            fontSize:Utils.getWidth(15),
            textAlign:'center',

        },
        activeTintColor: 'white',
        activeBackgroundColor: '#cccccc',
        inactiveTintColor: '#000',
        inactiveBackgroundColor: '#fff',
        style: {
            marginVertical: 0,
            // alignItems:'flex-start',
            justifyContent:'center',
        },
    }
});

const App = StackNavigator({
    Root: {
        screen: MyApp,
        navigationOptions: {
            header:null,
        },
    },
    Search:{
        screen:SearchView,
        navigationOptions: {
            headerTitle:'Search',
        },
    },
    Details:{
        screen:DetailsView,
        // navigationOptions:{
        //     headerTitle:'Details'
        // }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    icon: {
        // padding: 2,
        width:Utils.getWidth(30),
        height:Utils.getHeight(30),
    },
});

export default App;