'use strict';

import Toast from "react-native-root-toast";

var ToastUtils = {

    show: function (message: string): void {
        Toast.show(message, {
            duration: 1000,
            // duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: false,
            animation: true,
            hideOnPress: true,
            delay: 0,
            // onShow: () => {
            //     // calls on toast\`s appear animation start
            // },
            // onShown: () => {
            //     // calls on toast\`s appear animation end.
            // },
            // onHide: () => {
            //     // calls on toast\`s hide animation start.
            // },
            // onHidden: () => {
            //     // calls on toast\`s hide animation end.
            // }
        });
    },
};
export default ToastUtils;