'use strict';

import React from 'react';
import {Dimensions} from 'react-native';

const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;

const Utils = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    /** 根据实际屏幕尺寸转换对应的像素高度 */
    getHeight(h) {
        if (!this.height) {
            this.height = Utils.size.height;
            this.width = Utils.size.width;
        }
        return h * (this.height / BASE_WIN_HEIGHT);
    },

    /** 根据实际屏幕尺寸转换对应的像素宽度 */
    getWidth(w) {
        if (!this.width) {
            this.height = Utils.size.height;
            this.width = Utils.size.width;
        }
        return w * (this.width / BASE_WIN_WIDTH);
    },
    getFontSize(w) {
        if (!this.width) {
            this.height = Utils.size.height;
            this.width = Utils.size.width;
        }
        return w * (this.width / BASE_WIN_WIDTH);
    }

};


export default Utils;