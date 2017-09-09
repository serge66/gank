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

const CustomDrawerContentComponent = (props) => (
    <View style={styles.container}>
        <ScrollView>
            <View>
                <View style={{backgroundColor: '#ffff'}}>
                    <TouchableOpacity
                        onPress={() => {
                            // props.navigation.navigate('All');
                        }}>
                        <Text style={styles.titleMsg}>个人照片</Text>
                        <Image source={require('../assets/img/icon_me.png')} style={styles.img}/>
                    </TouchableOpacity>
                </View>
                <DrawerItems {...props} />
            </View>
        </ScrollView>
    </View>
);

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

export default CustomDrawerContentComponent;