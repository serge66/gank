'use strict';

import Type from './Types';
import ToastUtils from '../../utils/ToastUtils';

let mDispatch;
let mTotalData = [];

function _requestObj(opt) {

    return new Request('http://gank.io/api/data/' + opt.type + '/10/' + opt.num
        + (opt.isImage ? '?imageView2/0/w/100' : ''), {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    });
}

function _status(response) {
    //是否正常返回,ok代表状态码在200-299之间==(response.status >= 200 && response.status < 300)
    if (response.ok) {

        console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.type);
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
    // console.log('androidview responsejson:' + responseJson);
    if (!responseJson.error) {
        // ToastUtils.show("网络连接成功");
        console.log('mTotalData  11111:-----');
        console.log(mTotalData);

        mTotalData = mTotalData.concat(responseJson.results);
        mDispatch(android_done(mTotalData));
        console.log('mTotalData  22222:-----');
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
        if (opt.isRefreshing) {
            mTotalData = [];
        }
        dispatch(android_doing(mTotalData, opt.isRefreshing, opt.isLoading));

        let result = fetch(_requestObj(opt))
            .then(_status)
            .then(_json)
            .then(_parseJson)
            .catch(_catch);

    }
}

function android_doing(data, isRefreshing, isLoadging) {
    return {
        type: Type.resources.RESOURCES_DOING, data: data,
        isRefreshing: isRefreshing, isLoading: isLoadging
    }
}

function android_done(data) {
    return {type: Type.resources.RESOURCES_DONE, data: data}
}

function android_error(data) {
    return {type: Type.resources.RESOURCES_ERROR, data: data}
}