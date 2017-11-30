'use strict';

import {combineReducers} from 'redux';
import android from './AndroidReducer'; // 导入登录的redux处理过程
import query from './QueryReducer'; // 导入登录的redux处理过程
import all from './AllReducer';
import ios from './IosReducer';
import js from './JsReducer';
import girl from './GirlReducer';
import recommendation from './RecomendationReducer';
import resources from './ResourcesReducer';
import video from './VideoReducer';
import app from './AppReducer';

const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起
    all:all,
    android: android,
    query: query,
    ios: ios,
    js: js,
    girl: girl,
    recommendation: recommendation,
    resources: resources,
    video: video,
    app: app,
});

export default rootReducer; // 导出,作为统一入口