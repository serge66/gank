/**
 防止重复点击工具类，目前时间定为3秒
 返回true,代表可以点击，false,代表不可以点击
 */
const minClickDelayTime = 3000; // 延迟时间
let lastClickTime = 0; // 最后点击时间

const noDoubleClick = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime > minClickDelayTime) {
        lastClickTime = currentTime;
        return true;
    }
    return false;
};

// 清空点击时间
const resetLastTime = () => {
    lastClickTime = 0;
};

export default {noDoubleClick, resetLastTime};

/*

使用方法：
1.在需要的js文件中，首先导入
import ClickUtil from '../文件路径/文件名称';

2.在点击时间处，加上下面的方法就可以了
if (ClickUtil.noDoubleClick())
{
    this.pushToSetting();
}
*/
