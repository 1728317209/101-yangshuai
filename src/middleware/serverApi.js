import axios from 'axios';

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

const callServerApi = (endpoint, params, normalizeFuc) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: API_DOMAIN + endpoint,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: params
        }).then(res => {
            console.log('666666666666666666666666', res.data.data)
            if (res.data.ret === 1) {
                console.log('a')
                return resolve(typeof(normalizeFuc) !== 'undefined' ? normalizeFuc(res.data.data) : res.data.data);
            }
            console.log('b')
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
        params,
        normalizeFuc
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

    return callServerApi(endpoint, params, normalizeFuc)
        .then(res => {
            console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwww', res);
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