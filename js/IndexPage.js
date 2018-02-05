import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    ImageBackground,
    Button,
    ScrollView,
    TouchableHighlight,
    ListView,
    TouchableOpacity,
    SectionList,
    DeviceEventEmitter
} from 'react-native';
import Swiper from 'react-native-swiper'
import Constants from '../util/Constants';
import RNAboutWe from "./RNAboutWe";
var {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export default class IndexPage extends Component {
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
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center',marginTop:60,height:50,width:200,backgroundColor:'white',borderRadius:25 }}>
                            <Text  style={{height:20,alignSelf:'center',color:'#00aeff'}} onPress={() =>  this.props.navigation.navigate('LoginPage')}>登录/注册</Text>
                    </View>

                    <Image source={ require('../res/images/ios_home_title.png',)}  style={{marginTop:20,alignSelf:'center'}} >
                    </Image>
                </View>

        } else {
            loginView = <View style = {{flex:1,flexDirection:'row',height:80,alignItems:'center',justifyContent:'space-between'}}>
                <TouchableHighlight style={{marginLeft:30}}><Text>{this.state.userData["mobile"]}</Text></TouchableHighlight>
                <Image style={{marginRight:20,width:22,height:25,resizeMode: Image.resizeMode.contain}} source={require('../res/images/home_banner1.png')}/>
            </View>
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={ require('../res/images/ios_home_top_bg.png')} style={{width:width,height : 194}} >
                    <View style={{flex:1}}>
                        {loginView}
                    </View>
                </ImageBackground>
                <ScrollView contentContainerStyle={{ height : deviceHeight - 194}}>

                    <View style={{flexDirection:'column',alignItems:'center',justifyContent : 'center',marginTop:0,backgroundColor : 'white',height : (deviceHeight - 194-64-49-30)/3 }}>
                        <View  style={{width: deviceWidth,height : 60, }}>
                        <Text  style={{top:8,color:'#4c4c4c'}}>   我的交单</Text>
                        <Text style={{top: 10 ,color:'#b2b3b3'}}>   提交客户资料、一键查看审批结果</Text>
                            <Image source={require('../res/images/home_single_ico.png') } style={{alignSelf:'flex-end',marginTop:-58}}/>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',marginTop:10,alignItems:'center',backgroundColor:'white',height : (deviceHeight - 194-64-49-30)/3 }}>
                        <View  style={{flexDirection:'row',width: deviceWidth/2,height : 60, }}>
                            <Image source={require('../res/images/home_query_ico.png') } style={{alignSelf:'flex-start',marginTop:-10}}/>
                            <Text style={{ alignSelf:'center',color:'#b2b3b3',height : 20}}> 资格查询</Text>
                        </View>
                        <View  style={{flexDirection:'row',width: deviceWidth/2,height : 60, }}>
                            <Image source={require('../res/images/home_product_ico.png') } style={{alignSelf:'flex-start',marginTop:-10}}/>
                            <Text style={{ alignSelf:'center',color:'#b2b3b3',height : 20}}> 产品查询</Text>
                        </View>
                    </View>


                    <View style={{marginTop:10,height : (deviceHeight - 194-64-49-30)/3 }} >
                    <Swiper
                        width = {deviceWidth}
                        horizontal={true}
                        paginationStyle={{top: 180}}
                        showsPagination = {false}
                        autoplay={true}

                    >
                        <Image source={require('../res/images/home_banner1.png')} style={styles.imgStyle}/>
                        <Image source={require('../res/images/home_banner1.png')} style={styles.imgStyle}/>
                    </Swiper>
                    </View>


                </ScrollView>


            </View>
        );
    }



}
const { width } = Dimensions.get('window')
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
    },

    imgStyle: {
        width: deviceWidth,
        height: 120,
    }
})
