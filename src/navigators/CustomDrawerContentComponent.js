"use strict";
import React from 'react';
import {DrawerItems} from 'react-navigation';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";


class CustomDrawerContentComponent extends React.Component {

    render() {
        var myIcon = require('../assets/img/icon_me.png');
        console.log('抽屉 加载图片 start')
        console.log(this)
        // console.log(all)

        if (this && this.props && this.props.all && this.props.all.data) {
            console.log('抽屉 加载图片 doing')

            for (let index in this.props.all.data) {
                if ('福利' == this.props.all.data[index].type) {
                    myIcon = {uri: '' + this.props.all.data[index].url};
                    console.log('抽屉 加载图片 success')
                    console.log('抽屉 加载图片 success ' + this.props.all.data[index].url)
                    return (
                        <View style={styles.container}>
                            <ScrollView>
                                <View>
                                    <View style={{backgroundColor: '#ffff'}}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                // props.navigation.navigate('All');
                                            }}>
                                            <Text style={styles.titleMsg}>Gank</Text>
                                            <Image source={{uri: this.props.all.data[index].url}}
                                                   style={styles.img}/>
                                        </TouchableOpacity>
                                    </View>
                                    <DrawerItems {...this.props.items}/>
                                </View>
                            </ScrollView>
                        </View>
                    )
                }
            }
        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={{backgroundColor: '#ffff'}}>
                            <TouchableOpacity
                                onPress={() => {
                                    // props.navigation.navigate('All');
                                }}>
                                <Text style={styles.titleMsg}>Gank</Text>
                                <Image source={myIcon} style={styles.img}/>
                            </TouchableOpacity>
                        </View>
                        <DrawerItems {...this.props.items}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabImg: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 100,
        width: 100,
    },
    titleMsg: {
        textAlign: 'center',
        color: '#ff3233',
        paddingTop: 40,
        paddingBottom: 20,
    }
});

//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
function mapStateToProps(state) {
    const {all} = state;
    return {all}
}

export default connect(mapStateToProps)(CustomDrawerContentComponent);