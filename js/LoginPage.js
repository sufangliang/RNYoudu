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
import Register from "./Register";

export default class LoginPage  extends Component<{}> {

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
                <View style={{borderRadius:10,height:100,marginLeft:30,marginRight:30,marginTop:110+64}}>
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
                    </View>
                </View>

                    <TouchableOpacity style={[{backgroundColor: this.state.disabled ? '#a0a0a0':'#ff0000'},styles.button]}>
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                              登录
                            </Text>
                    </TouchableOpacity>
                    <View style = {{flexDirection: "row",justifyContent: "space-between",marginLeft:30,marginRight:30,marginTop:20}}>
                        <TouchableOpacity onPress={() => this.register()}><Text style={{color:'#8c8c8c'}}>注册</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this._forGetPassword()}><Text style={{color:'#8c8c8c'}}>忘记密码</Text></TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        );
    }

    register() {
        this.props.navigation.navigate('Register')
    }
    _forGetPassword() {
        this.props.navigation.navigate('Register')
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

