"use strict"

import Moment from 'moment';

exports.getTitleStr = tab => {
    let str = "";
    switch (tab) {
        case "latest":
            str = "全部";
            break;
        case "hot":
            str = "最热";
            break;
        case "nodes":
            str = "节点";
            break;
        case "about":
            str = "关于";
            break;
        case "topic":
            str = "主题";
            break;
        default:
            str = tab;
    }
    return str;
}

exports.getTimeStr = (time, fromNow) => {
    Moment.locale('zh-cn');

    if (fromNow) {
        return Moment.unix(time).fromNow();
    } else {
        return utils.fmtDate(new Date(time),'yyyy-MM-dd hh:mm');
    }
}
