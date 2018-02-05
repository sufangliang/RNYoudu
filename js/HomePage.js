import React from 'react';
import { View, Text,StyleSheet,Image,Dimensions,Platform,TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import IndexPage from './IndexPage'
import MyPage from './MyPage'

const { width } = Dimensions.get('window')
const HomePage = TabNavigator({
    IndexPage: {
        screen: IndexPage,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor,focused }) => (
                <Image
                    source={focused ? require('../res/images/tab_home_pre.png') : require('../res/images/home_ico__normal.png')}
                    style={[styles.icon]}
                />
            ),
            headerRight:(
                <TouchableOpacity onPress={() => navigation.navigate('RNAboutWe') } >
                    <View style={{marginRight: 10}}>
                        <Image  source={require('../res/images/me_bank.png')}   />
                    </View>
                </TouchableOpacity>
            ),
            headerLeft:(
                <TouchableOpacity onPress={() => alert("功能正在开发中")} >
                    <View style={{marginLeft: 10,flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Image   source={require('../res/images/me_bank.png')}   />
                        <Text style={{marginLeft: 5}}>深圳</Text>
                    </View>
                </TouchableOpacity>
            ),
            headerStyle :{shadowOpacity : 0}

        },
    },

    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor ,focused}) => (
                <Image
                    source={focused ? require('../res/images/tab_me_pre.png') : require('../res/images/tab_me_normal.png')}
                    style={[styles.icon]}
                />
            ),
            header: null
        },
    }
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom',
    swipeEnabled: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    tabBarOptions: {
        activeTintColor: '#FF4F12',
        inactiveTintColor:"#B4B4B4",
        showIcon: true,
        style: {
            backgroundColor: '#FFFFFF', // TabBar 背景色
            height:49
        },
        indicatorStyle: {height: 0},
        scrollEnabled: false,
        labelStyle: {
            fontSize: 12,
            marginTop: Platform.OS == 'android' ?0 : 15
        }

    }
});



const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16,
    },

});

export default HomePage;