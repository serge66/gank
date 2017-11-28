'use strict';

import Type from './Types';
import ToastUtils from '../../utils/ToastUtils';

let mDispatch;
let mTotalData = [];

function _requestObj(opt) {

    return new Request('http://gank.io/api/search/query/' + opt.content
        + '/category/all/count/20/page/' + opt.num, {
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
        if (responseJson.results == null || responseJson.results.length == 0) {
            ToastUtils.show('no data!')
        }
        mTotalData = mTotalData.concat(responseJson.results);
        mDispatch(query_done(mTotalData));
        console.log('mTotalData  22222:-----');
        console.log(mTotalData);
    } else {
        ToastUtils.show("网络连接失败，请重连后重试");
        mDispatch(query_error(mTotalData));
    }
}

function _catch(error) {
    // console.error(error); ToastUtils.show("网络连接失败，请重连后重试");
    mDispatch(query_error(mTotalData));
}

export function doDoing(opt) {
    return (dispatch) => {
        mDispatch = dispatch;
        if (opt.isRefreshing) {
            mTotalData = [];
        }
        dispatch(query_doing(mTotalData, opt.isRefreshing, opt.isLoading));

        let result = fetch(_requestObj(opt))
            .then(_status)
            .then(_json)
            .then(_parseJson)
            .catch(_catch);

    }
}

function query_doing(data, isRefreshing, isLoadging) {
    return {
        type: Type.query.QUERY_DOING, data: data,
        isRefreshing: isRefreshing, isLoading: isLoadging
    }
}

function query_done(data) {
    return {type: Type.query.QUERY_DONE, data: data}
}

function query_error(data) {
    return {type: Type.query.QUERY_ERROR, data: data}
}