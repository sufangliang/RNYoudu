import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Dimensions,
    ImageBackground
} from 'react-native';


var {height: deviceHeight, width:deviceWidth} = Dimensions.get('window');

export default class Register  extends Component<{}> {

    constructor (props) {
        super(props);
        this.state = {
            phoneText: '',
            passText:'',
            disabled: true,
            visible: false
        };
    }

    render() {
        return (
            <View style={ styles.container}>
                <ImageBackground source={ require('../res/images/login_bg.png')} style={{width:deviceWidth,height : deviceHeight}} >

                    <Image style={{top : 40 + 64 ,alignSelf : 'center'}} source={ require('../res/images/login_logo.png')}></Image>
                    <View style={{borderRadius:10,height:220,marginLeft:30,marginRight:30,marginTop:110+64 }}>
                        <View style={{flexDirection:'row',alignItems:'center' ,borderRadius: 20,borderColor:'#cccccc',borderWidth:0.5}}>
                            {/*<Image source={require('../res/images/phone_icon.png')} style={{marginLeft:10}}/>*/}
                            <TextInput
                                style={{marginLeft:10,marginRight:20,flex: 1,height: 45 ,fontSize:13}}
                                placeholder = "手机号"
                            />
                        </View>
                        <View style={{marginTop:10,flexDirection:'row',alignItems:'center' ,borderRadius: 20,borderColor:'#cccccc',borderWidth:0.5}}>
                            <TextInput
                                style={{marginLeft:10,marginRight:20,flex: 1,height: 45 ,fontSize:13}}
                                placeholder = "密码6-15位"
                            />
                          <Image style={{marginRight : 20}} source={ require('../res/images/yey_off.png')}></Image>
                        </View>
                        <View style={{marginTop:10,flexDirection:'row',alignItems:'center' ,borderRadius: 20,borderColor:'#cccccc',borderWidth:0.5}}>
                            <TextInput
                                style={{marginLeft:10,marginRight:20,flex: 1,height: 45 ,fontSize:13}}
                                placeholder = "验证码"
                            />
                            <Text style={{marginRight:10,fontSize:15,color:'#00aeff'}} onPress={() => alert('别点了')} >
                                验证码
                            </Text>
                        </View>
                        <View style={{marginTop:10,flexDirection:'row',alignItems:'center' ,borderRadius: 20,borderColor:'#cccccc',borderWidth:0.5}}>
                            <TextInput
                                style={{marginLeft:10,marginRight:20,flex: 1,height: 45 ,fontSize:13}}
                                placeholder = "推荐人手机号"
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={[{backgroundColor: this.state.disabled ? '#a0a0a0':'#ff0000'},styles.button]}>
                        <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                            注册
                        </Text>
                    </TouchableOpacity>

                    <View style = {{flexDirection: "row",marginLeft:30,marginRight:30,marginTop: 80}}>
                        <Image style={{alignSelf : 'center'}} source={ require('../res/images/login_with_ico.png')}></Image>
                        <Text style={{marginRight:10,fontSize:15,color:'#00aeff'}} onPress={() => alert('别点了')} >
                              我已阅读并同意
                        </Text>
                        <TouchableOpacity onPress={() => this.register()}><Text style={{color:'#00aeff'}}>《有度注册服务协议》</Text></TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        );
    }



}
const styles = StyleSheet.create({
    container:{
        flex:1,
        top : -64,
        backgroundColor: '#EEEEEE'
    },
    text:{
        marginTop: 70
    },
    button: {
        marginTop:15,
        height: 44,
        marginRight:30,
        marginLeft:30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        textAlign: 'center'
    },
    hud: {
        height: 80,
        justifyContent: 'center',
    }
})

