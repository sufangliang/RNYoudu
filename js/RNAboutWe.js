
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    NativeModules,
    NativeEventEmitter,
    DeviceEventEmitter,
} from 'react-native';
import {PropTypes} from 'prop-types'

var {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export  default class RNAboutWe extends Component <{}> {
// 初始化模拟数据
    constructor(props) {
        super(props);
        this.state = {
             urlStr: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref = "webView"
                    source ={{uri:this.state.urlStr,method: 'GET'}}
                    style={styles.webViewStyle}
                    scalesPageToFit={false}  // 不允许网页缩放或用户改变缩放比例
            />
            </View>
        )
    }
    //组件渲染之前调用此方法
    componentWillMount() {

        // this.subion = DeviceEventEmitter.addListener('refresh', (msg) => {
        //     this.setState({
        //                 urlStr: msg,
        //     });
        // });
        let CalendarManager = NativeModules.CalendarManager;
        CalendarManager.getAboutUrlCallBack((msg) => {
                alert('回到' + msg)
                this.setState({
                            urlStr: msg,
                });
        } );
    }



    componentWillUnmount() {
        // 移除监听器
        // this.subion.remove();

    }


}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },

    webViewStyle: {
        width: deviceWidth,           height: deviceHeight
    },

    navBarLeftItemStyle: {
        width:20,
        height:20,
        marginLeft:15,
    },
    navBarTitleItemStyle: {
        width:66,
        height:20,
    },
    navBarRightItemStyle: {
        width:20,
        height:20,
        marginRight:15,
    },


});
