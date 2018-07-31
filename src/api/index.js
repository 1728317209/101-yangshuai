import axios from 'axios';
import * as ActionTypes from '../Const/ActionTypes';

export function fetchUserInfo(next) {
    next({
        type: `${ActionTypes.FETCH_USER_INFO}_REQ`
    });

    axios({
        method: 'POST',
        url: 'http://xly-wkop.xiaoniangao.cn/getUserInfo',
        data: {
            mid: 'MID330900002'
        }
    }).then(res => {
        console.log(res.data.data);
        next({
            type: ActionTypes.FETCH_USER_INFO_SUC,
            data: res.data.data
        });
    }).catch(err => {
        console.log(err);
        next({
            type: ActionTypes.FETCH_USER_INFO_FAI,
            err
        });
    });
}
export function fetchLessonInfo(next) {
    next({
        type: `${ActionTypes.FETCH_LESSON_INFO}_REQ`
    });

    axios({
        method: 'POST',
        url: 'http://xly-wkop.xiaoniangao.cn/getLessonInfo',
        data: {
            mid: 'MID330900002'
        }
    }).then(res => {
        console.log(res.data.data);
        next({
            type: ActionTypes.FETCH_LESSON_INFO_SUC,
            data: res.data.data
        });
    }).catch(err => {
        console.log(err);
        next({
            type: ActionTypes.FETCH_LESSON_INFO_FAI,
            err
        });
    });
}