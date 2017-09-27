'use strict';

import Type from './Types';
import ToastUtils from '../utils/ToastUtils';

let mDispatch;
let mTotalData = [];

function _requestObj(num) {
    return new Request('http://gank.io/api/data/Android/10/' + num, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    });
}

function _status(response) {
    //是否正常返回,ok代表状态码在200-299之间==(response.status >= 200 && response.status < 300)
    if (response.ok) {

        console.log(response.status);
        console.log(response.statusText);
        console.log(response.type);
        console.log(response.url);
        console.log('------------------');

        return Promise.resolve(response)
    } else {
        //TODO 此处登录失败会出现红色弹窗，需优化 return Promise.reject(new Error(response.statusText))
        return Promise.resolve(response)

    }
}

function _json(res) {
    return res.json()
}

function _parseJson(responseJson) {
    console.log('androidview responsejson:' + responseJson);
    if (!responseJson.error) {
        ToastUtils.show("网络连接成功");
        console.log('mTotalData:-----');
        console.log(mTotalData);

        mTotalData = mTotalData.concat(responseJson.results);
        mDispatch(android_done(mTotalData));
        console.log('mTotalData:-----');
        console.log(mTotalData);
    } else {
        ToastUtils.show("网络连接失败，请重连后重试");
        mDispatch(android_error(mTotalData));
    }
}

function _catch(error) {
    // console.error(error); ToastUtils.show("网络连接失败，请重连后重试");
    mDispatch(android_error(mTotalData));
}

export function doDoing(opt) {
    return (dispatch) => {
        mDispatch = dispatch;
        if(opt.isRefresh){
            mTotalData = [];
        }
        dispatch(android_doing(mTotalData));

        let result = fetch(_requestObj(opt.num))
            .then(_status)
            .then(_json)
            .then(_parseJson)
            .catch(_catch);

    }
}

function android_doing(data) {
    return {type: Type.android.ANDROD_DOING, data: data}
}

function android_done(data) {
    return {type: Type.android.ANDROD_DONE, data: data}
}

function android_error(data) {
    return {type: Type.android.ANDROD_ERROR, data: data}
}