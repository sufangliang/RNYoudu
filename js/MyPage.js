import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    ImageBackground,
    Button,
    TouchableHighlight,
    ListView,
    TouchableOpacity,
    SectionList,
    DeviceEventEmitter
} from 'react-native';

import Constants from '../util/Constants';

const { width } = Dimensions.get('window')
export default class MyPage extends Component {
    _data = [
        new MyFunClass(require('../res/images/me_bank.png'),'我的银行卡'),
        new MyFunClass(require('../res/images/me_invitation.png'),'我要还款'),
    ]
    _second_data = [
        new MyFunClass(require('../res/images/me_tool.png'),'邀请好友'),
        new MyFunClass(require('../res/images/me_aboutus.png'),'关于我们'),
        new MyFunClass(require('../res/images/me_moer_ico.png'),'关于我们'),

    ]

    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ds,
            isLogin: global.constants.isLogin,
            userData: global.constants.userInfo
        };
    }

    componentWillMount(){

        this.setState({isLogin:false})

        // UserService.getLoginState().then(res => {
        //     global.constants.userInfo = res;
        //     global.constants.isLogin = true
        //     this.setState({userData:global.constants.userInfo,isLogin:global.constants.isLogin})
        // }).catch(error =>{
        //     this.setState({isLogin:false})
        // })
    }
    componentDidMount(){
        this.loginNotice = DeviceEventEmitter.addListener('loginNotice',(isLogin) =>{
            console.info(global.constants.userInfo)
            this.setState({userData:global.constants.userInfo,isLogin:true})
            console.info(this.state.userData)
        })
    }

    _login () {

    }

    render() {
        const isLoggedIn = this.state.isLogin;
        let loginView = null;
        if (!isLoggedIn) {
            loginView =
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',}}>
                    <View style={{flexDirection:'row',alignItems:'center',height:50,width:width }}>
                        <TouchableHighlight style={{ marginLeft: width*0.3, width: 55,height: 20}}>
                            <Text onPress={() => alert("功能正在开发中")}>请登录</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{width: 55,height: 20}}  >
                            <Text onPress={() => alert("功能正在开发中")}>     注册</Text>
                        </TouchableHighlight>
                    </View>




                </View>

        } else {
            loginView = <View style = {{flex:1,flexDirection:'row',height:80,alignItems:'center',justifyContent:'space-between'}}>
                <TouchableHighlight style={{marginLeft:30}}><Text>{this.state.userData["mobile"]}</Text></TouchableHighlight>
                <Image style={{marginRight:20,width:22,height:25,resizeMode: Image.resizeMode.contain}} source={require('../res/images/home_banner1.png')}/>
            </View>
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={ require('../res/images/me_banner_bg.png')} style={{width:width,height : 194}} >
                    <View style={{flex:1,flexDirection:'row',marginTop: 100,height:80,justifyContent:'flex-start'}}>
                        {loginView}
                    </View>
                    <View style={{marginTop:55,flexDirection:'row',alignSelf:'center', justifyContent:'space-between',height:50,width:width-100,backgroundColor:'white'}}>
                        <View style={{flexDirection:'column',width:(width-100)/3}} >
                            <Image style={{width:(width-100)/3,height:25,resizeMode: Image.resizeMode.contain,alignItems:'flex-start'}} source={require('../res/images/me_probate_ico_not.png')}/>
                            <TouchableHighlight style={{marginTop:5,alignItems:'center',width:(width-100)/3}}>
                                <Text style={{textAlign:'center',width:(width-100)/3}} onPress={() => alert("功能正在开发中")}>未认证</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={{width:(width-100)/3}} >
                            <Image style={{width:(width-100)/3,height:25,resizeMode: Image.resizeMode.contain}} source={require('../res/images/me_money.png')}/>
                            <TouchableHighlight style={{marginTop:5,alignItems:'center',width:(width-100)/3}}>
                                <Text  style={{textAlign:'center',width:(width-100)/3}} onPress={() => alert("功能正在开发中")}>我的佣金</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={{width:(width-100)/3}} >
                            <Image style={{width:(width-100)/3,height:25,resizeMode: Image.resizeMode.contain}} source={require('../res/images/me_probate_ico_not.png')}/>
                            <TouchableHighlight style={{marginTop:5,alignItems:'center',width:(width-100)/3}}>
                                <Text  style={{textAlign:'center',width:(width-100)/3}} onPress={() => alert("功能正在开发中")}>U豆商城</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ImageBackground>



                <SectionList  style={{marginTop:10}}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={() =>this.cellAction(item)} >
                            <View style={{height:48,backgroundColor:'white',flex:1,flexDirection:'row',alignItems:'center',borderBottomColor:'#CCCCCC',//cell的分割线
                                borderBottomWidth:1}} >
                                <Image style={{marginLeft:15,width:22,height:25,resizeMode: Image.resizeMode.contain}} source={item.icon}/>
                                <Text style={{marginLeft: 15,width:100}}>{item.text}</Text>
                                <Image style={{marginLeft: (width-30-22-100)*0.85}} source={require('../res/images/line_right_arrow.png')}/>
                            </View>
                        </TouchableOpacity>}
                    renderSectionHeader={({section}) =>  <View style={{ flex:1 ,height:10}}></View>}
                    sections={[ // 不同section渲染相同类型的子组件
                        {data: this._data, key: Math.random()},
                        {data: this._second_data, key: Math.random()},
                    ]}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }

    cellAction = (item) => {
        if(item.text === "常见问题"){
            this.props.navigation.navigate('ProblemPage')
        }else{
            alert("功能正在开发中")
        }
    }


}
export function MyFunClass(icon,text){
    this.icon=icon;
    this.text=text;
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    rightViewStyle:{
        flexDirection:'row',
        borderBottomColor:'#CCCCCC',//cell的分割线
        borderBottomWidth:1
    }
})
