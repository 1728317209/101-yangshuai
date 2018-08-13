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

/*
token: 1， ；0或1， token   为0 表示获取全部作业，1，表示只读取当前老师的作业
isReviewed: 1 ; 0或1，isReviewed为0表示读取未点评的作业， 1，表示读取已点评的作业
*/
export function fetchHomeworkInfo(token, isReviewed) {
    let type = '';
    if(token) {
        if(isReviewed) {
            //当前老师 已点评
            type = ActionTypes.FETCH_MYREVIEWED_HOMEWORK_INFO;
        }else {
            //当前老师 未点评
            type = ActionTypes.FETCH_MYWILLREVIEW_HOMEWORK_INFO;
        }
    }else {
        if(isReviewed) {
            //全部老师 已点评
            type = ActionTypes.FETCH_ALLREVIEWED_HOMEWORK_INFO
        }else {
            //全部老师 未点评
            type = ActionTypes.FETCH_ALLWILLREVIEW_HOMEWORK_INFO
        }
    }
    return {
        SERVER_API: {
            type: type,
            endpoint: '/getHomeWork',
            params: {
                token,
                isReviewed
            },
            normalizeFuc: json => {
                return {
                    HomeworkReview: normalize(json, Schema.HomeworkReviewInfoSchema),
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

export function handleChangeCommentStatus(commentId, reason) {
    return {
        type:ActionTypes.CHANGECOMMENTSTATUS,
        commentId,
        reason
    }
}

export function handleSendReviewComments(homeworkId, content, time, TabKey) {
    return {
        type:ActionTypes.SENDREVIEWCOMMENTS,
        homeworkId, 
        content, 
        time,
        TabKey
    }
}

export function handleChangeIsExcellent(homeworkId) {
    return {
        type:ActionTypes.CHANGE_ISEXCELLENT,
        homeworkId 
    }
}

export function handleSelectedEmployee(ids) {
    return {
        type:ActionTypes.HANDLE_SELECT_EMPLOYEE,
        ids
    }
}

export function handleDelEmployee(ids) {
    return {
        type:ActionTypes.HANDLE_DEL_EMPLOYEE,
        ids
    }
}