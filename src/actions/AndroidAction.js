'use strict';

import Type from './Types';
import ToastUtils from '../utils/ToastUtils';

let mDispatch;

function _requestObj(num) {
    return new Request('http://gank.io/api/data/Android/20/'+num, {
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
    console.log('androidview responsejson:'+responseJson);
    if (!responseJson.error) {
        // ToastUtils.show("网络连接成功");
            mDispatch(done(responseJson));
    } else {
        // ToastUtils.show("网络连接失败，请重连后重试");
        mDispatch(error());
    }
}

function _catch(error) {
    // console.error(error);
    // ToastUtils.show("网络连接失败，请重连后重试");
    mDispatch(android_error());
}

export function doDoing(num) {
    return (dispatch) => {
        mDispatch = dispatch;
        dispatch(doing());

        let result = fetch(_requestObj(num))
            .then(_status)
            .then(_json)
            .then(_parseJson)
            .catch(_catch);

    }
}

function doing() {
    return {type: Type.android.ANDROD_DOING}
}

function done(data) {
    return {type: Type.android.ANDROD_DONE, data: data}
}

function android_error() {
    return {type: Type.android.ANDROD_ERROR}
}