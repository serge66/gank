'use strict';

import React from 'react';
import {Dimensions} from 'react-native';

const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;

const Util = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    /** 根据实际屏幕尺寸转换对应的像素高度 */
    getHeight(h) {
        if (!this.height) {
            this.height = Util.size.height;
            this.width = Util.size.width;
        }
        return h * (this.height / BASE_WIN_HEIGHT);
    },

    /** 根据实际屏幕尺寸转换对应的像素宽度 */
    getWidth(w) {
        if (!this.width) {
            this.height = Util.size.height;
            this.width = Util.size.width;
        }
        return w * (this.width / BASE_WIN_WIDTH);
    }

};


export default Util;