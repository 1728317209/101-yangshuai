// import axios from 'axios';

// export default store => next => action => {
//     console.log(store, next, action);
//     if (!action.SERVER_API) {
//         return next(action);//如果没有这一步，不会执行redux-logger
//     }
//     //api里面的内容 挪到这里
//     const { type, url, params } = action.SERVER_API;
//     next({
//         type: ``
//     })
// };
import axios from 'axios';

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

const callServerApi = (endpoint, params) => {
    return new Promise((resolve, reject) => {
        console.log(API_DOMAIN + endpoint);
        axios({
            method: 'POST',
            url: API_DOMAIN + endpoint,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: params
        }).then(res => {
            if (res.data.ret === 1) {
                console.log('res', res)
                return resolve(res.data.data);
            }
            return reject({ errMsg: res.data.errMsg });
        }).catch(err => {
            return reject({ errMsg: JSON.stringify(err) });
        });
    });
}

export default store => next => action => {
    if (!action.SERVER_API) {
        return next(action);
    }
    const {
        type,
        endpoint,
        params
    } = action.SERVER_API;

    if (typeof type !== 'string') {
        throw new Error('type shoudle be a string');
    }
    if (typeof endpoint !== 'string') {
        throw new Error('endpoint shoudle be a string');
    }
    if (typeof params !== 'object') {
        throw new Error('params shoudle be a object');
    }

    next({
        type: `${type}_REQ`
    });

    return callServerApi(endpoint, params)
        .then(res => {
            console.log('res', res)
            next({
                type: `${type}_SUC`,
                response: res
            });
        }).catch(err => {
            next({
                type: `${type}_FAI`,
                errMsg: err.errMsg
            });
        });
};











//函数柯理化
// export default function (store) {
//     return function (next) {
//         return function (action) {

//         }
//     }
// }