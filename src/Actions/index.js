// import * as ActionTypes from '../Const/ActionTypes';

// export function fetchUserInfo(mid) {
//     return {
//         SERVER_API: {//特殊action的标记
//             type: ActionTypes.FETCH_USER_INFO,
//             url: 'http://xly-wkop.xiaoniangao.cn/getUserInfo',
//             params: {
//                 mid
//             }
//         }
//     }
// }

import * as ActionTypes from '../Const/ActionTypes';

export function fetchUserInfo(mid) {
    return {
        SERVER_API: {
            type: ActionTypes.FETCH_USER_INFO,
            endpoint: '/getUserInfo',
            params: {
                mid
            }
        }
    }
}

export function fetchLessonInfo(mid) {
    return {
        SERVER_API: {
            type: ActionTypes.FETCH_LESSON_INFO,
            endpoint: '/getLessonInfo',
            params: {
                mid
            }
        }
    }
}

export function fetchStudentsInfo(mid) {
    return {
        SERVER_API: {
            type: ActionTypes.FETCH_PROFILE_INFO,
            endpoint: '/getStudentList',
            params: {
                mid
            }
        }
    }
}

export function fetchClassInfo(id) {
    return {
        SERVER_API: {
            type: ActionTypes.FETCH_CLASS_INFO,
            endpoint: '/getClassInfo',
            params: {
                id
            }
        }
    }
}

export function select(mid) {
    return {
        type: ActionTypes.SELECT,
        mid
    }
}