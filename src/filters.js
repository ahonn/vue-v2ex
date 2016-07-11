"use strict"

import Moment from 'moment';

exports.getTimeFromNow = (time, fromNow) => {
    Moment.locale('zh-cn');

    return Moment.unix(time).fromNow();
}
