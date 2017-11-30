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
import Utils from "../utils/Utils";
import CommonStyles from '../styles/Common';

class CustomDrawerContentComponent extends React.Component {

    render() {
        console.log('抽屉 加载图片 start')
        console.log(this)

        if (this && this.props && this.props.all && this.props.all.data) {
            console.log('抽屉 加载图片 doing')

            for (let index in this.props.all.data) {
                if ('福利' == this.props.all.data[index].type) {
                    console.log('抽屉 加载图片 success ' + this.props.all.data[index].url)
                    return (
                        <View style={styles.container}>
                            <ScrollView>
                                <View>
                                    <View style={{backgroundColor: '#ffff'}}>
                                        <TouchableOpacity style={styles.touchable}
                                                          activeOpacity={global.constants.ActiveOpacityNum}
                                                          onPress={() => {
                                                              this.props.items.navigation
                                                                  .navigate('GirlDetail',
                                                                      {
                                                                          title: this.props.all.data[index].desc,
                                                                          url: this.props.all.data[index].url
                                                                      });
                                                          }}>
                                            <Text style={[styles.titleMsg,CommonStyles.adaptiveTopiOS]}>Gank</Text>
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
                            <TouchableOpacity style={styles.touchable}
                                              activeOpacity={global.constants.ActiveOpacityNum}
                                              onPress={() => {
                                                  // this.props.items.navigation.navigate('All');
                                              }}>
                                <Text style={[styles.titleMsg,CommonStyles.adaptiveTopiOS]}>Gank</Text>
                                <Image
                                    resizeMode={'contain'}
                                    source={require('../assets/img/gank.png')} style={styles.img}/>
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
    touchable: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height:'100%',
        width: '100%',

    },
    tabImg: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 200,
        width: 200,
    },
    titleMsg: {
        textAlign: 'center',
        color: '#000',
        // paddingTop: 30,
        paddingBottom: 5,
        fontSize: Utils.getFontSize(20)
    }
});

//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
function mapStateToProps(state) {
    const {all} = state;
    return {all}
}

export default connect(mapStateToProps)(CustomDrawerContentComponent);