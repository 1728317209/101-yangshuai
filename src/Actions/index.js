import { normalize } from 'normalizr';
import * as ActionTypes from '../Const/ActionTypes';
import * as Schema from '../schema/index';

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
            },
            normalizeFuc: json => {
                return {
                    current: normalize(json.currentLessonsList, Schema.lessonListSchema),
                    history: normalize(json.historyLessonsList, Schema.lessonListSchema)
                };
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
            },
            normalizeFuc: json => {
                return {
                    StudentsInfo: normalize(json, Schema.StudentsInfoSchema),
                };
            }
        }
    }
}

export function fetchSatisfiledList(mid) {
    return {
        SERVER_API: {
            type: ActionTypes.FETCH_SATISFILED_INFO,
            endpoint: '/getSatisfiledList',
            params: {
                mid
            },
            normalizeFuc: json => {
                return {
                    SatisfiledInfo: normalize(json.list, Schema.SatisfiledInfoSchema)
                };
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
            },
            normalizeFuc: json => {
                return {
                    coursesList: normalize(json.list, Schema.classInfoSchema),
                    basicInfo: json.basic_info
                };
            }
        }
    }
}

export function selectByMid(mid) {
    return {
        type: ActionTypes.SELECTBYMID,
        mid
    }
}

export function selectByNick(nick) {
    return {
        type: ActionTypes.SELECTBYNICK,
        nick
    }
}

export function handleChangeReplyStatus(classTime) {
    return {
        type: ActionTypes.CHANGEREPLYSTATUS,
        classTime
    }
}