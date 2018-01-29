/**
 * NetUitl 网络请求的实现
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';
import NetConstant from './NetConstant'
class NetUitl extends React.Component{
    /*
     *  get请求
     *  url:请求地址
     *  callback:回调函数
     * */
    static get(url,params){
        var url =  NetUitl.requestUrl + url;
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }). then((response) => {
                    if (response.status === NetConstant.succStatus) {
                        resolve(response.json());
                    } else {
                        reject({"msg":NetConstant.errorMsg});
                    }
                }
            )
        });
    }
    /*
     *  post请求
     *  url:请求地址
     *  data:参数
     * */
    static post(url,params){
        return new Promise(function(resolve, reject) {
            console.info(NetConstant.requestUrl+url +"      "+params)
            fetch(NetConstant.requestUrl+url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            }). then((response) => {
                    if (response.status === NetConstant.succStatus) {
                        resolve(response.json());
                    } else {
                        reject({"msg":NetConstant.errorMsg});
                    }
                }
            )
        });
    }
}

module.exports = NetUitl;