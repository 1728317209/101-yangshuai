import { init_homework_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function HomeworkInfo(state=init_homework_state, action) {
    switch (action.type) {

        case `${ActionTypes.FETCH_MYWILLREVIEW_HOMEWORK_INFO}_SUC`:
        case `${ActionTypes.FETCH_ALLWILLREVIEW_HOMEWORK_INFO}_SUC`:
        case `${ActionTypes.FETCH_MYREVIEWED_HOMEWORK_INFO}_SUC`:
        case `${ActionTypes.FETCH_ALLREVIEWED_HOMEWORK_INFO}_SUC`: {
            const newState = {...state};
            const { HomeworkReview } = action.response;
            switch (action.type) {
                case `${ActionTypes.FETCH_MYWILLREVIEW_HOMEWORK_INFO}_SUC`:{
                    //当前老师 未点评
                    newState.HomeworkIdx.MyWillReviewHomeworkIds = [
                        ...state.HomeworkIdx.MyWillReviewHomeworkIds,
                        ...HomeworkReview.result
                    ];
                    break;
                }
                case `${ActionTypes.FETCH_ALLWILLREVIEW_HOMEWORK_INFO}_SUC`:{
                    //所有老师 未点评
                    newState.HomeworkIdx.AllWillReviewHomeworkIds = [
                        ...state.HomeworkIdx.AllWillReviewHomeworkIds,
                        ...HomeworkReview.result
                    ];
                    break;
                }
                case `${ActionTypes.FETCH_MYREVIEWED_HOMEWORK_INFO}_SUC`:{
                    //当前老师 已点评
                    newState.HomeworkIdx.MyReviewedHomeworkIds = [
                        ...state.HomeworkIdx.MyReviewedHomeworkIds,
                        ...HomeworkReview.result
                    ];
                    break;
                }
                case `${ActionTypes.FETCH_ALLREVIEWED_HOMEWORK_INFO}_SUC`:{
                    //所有老师 已点评
                    newState.HomeworkIdx.ALLReviewedHomeworkIds = [
                        ...state.HomeworkIdx.ALLReviewedHomeworkIds,
                        ...HomeworkReview.result
                    ];
                    break;
                }
            }
            newState.HomeworkEntities.HomeworkReviewInfo = {
                ...state.HomeworkEntities.HomeworkReviewInfo,
                ...HomeworkReview.entities.HomeworkReviewInfo
            }
            newState.HomeworkEntities.author = {
                ...state.HomeworkEntities.author,
                ...HomeworkReview.entities.author
            }
            newState.HomeworkEntities.classInfo = {
                ...state.HomeworkEntities.classInfo,
                ...HomeworkReview.entities.classInfo
            }
            newState.HomeworkEntities.commentsItem = {
                ...state.HomeworkEntities.commentsItem,
                ...HomeworkReview.entities.commentsItem
            }
            newState.HomeworkEntities.teacherInfo = {
                ...state.HomeworkEntities.teacherInfo,
                ...HomeworkReview.entities.teacherInfo
            }
            return newState;
        }
        case ActionTypes.CHANGECOMMENTSTATUS: {
            const newState = {...state};
            newState.HomeworkEntities.commentsItem[action.commentId].status = 'reject';
            newState.HomeworkEntities.commentsItem[action.commentId].reason = action.reason;
            return newState;
        }
        case ActionTypes.SENDREVIEWCOMMENTS: {
            const newState = {...state};
            const { homeworkId, content, time, TabKey } = action;
            const { comments, teacherInfo, commentator } = state.HomeworkEntities.HomeworkReviewInfo[homeworkId];
            const commentId = comments[comments.length-1] + 1;
            newState.HomeworkEntities.HomeworkReviewInfo[homeworkId].comments.push(commentId);
            newState.HomeworkEntities.commentsItem = {
                ...newState.HomeworkEntities.commentsItem,
                [commentId]: {
                    id: commentId,
                    commentator: {"nick": commentator, "role": ''},
                    content: content,
                    from: "teacher",
                    nick: state.HomeworkEntities.teacherInfo[teacherInfo].nick,
                    reason: '',
                    status: "unrevised",
                    time: time
                }
            }
            switch (TabKey) {
                case 1:{
                    const indexOfMy = newState.HomeworkIdx.MyWillReviewHomeworkIds.indexOf(homeworkId);
                    const indexOfAll = newState.HomeworkIdx.AllWillReviewHomeworkIds.indexOf(homeworkId);
                    newState.HomeworkIdx.MyWillReviewHomeworkIds.splice(indexOfMy, 1);
                    newState.HomeworkIdx.AllWillReviewHomeworkIds.splice(indexOfAll, 1);
                    newState.HomeworkIdx.MyReviewedHomeworkIds.unshift(homeworkId);
                    newState.HomeworkIdx.ALLReviewedHomeworkIds.unshift(homeworkId);
                    break;
                }
                case 3:{
                    const indexOfMy = newState.HomeworkIdx.MyWillReviewHomeworkIds.indexOf(homeworkId);
                    const indexOfAll = newState.HomeworkIdx.AllWillReviewHomeworkIds.indexOf(homeworkId);
                    if(indexOfMy !== -1){
                        newState.HomeworkIdx.MyWillReviewHomeworkIds.splice(indexOfMy, 1);
                    }
                    newState.HomeworkIdx.AllWillReviewHomeworkIds.splice(indexOfAll, 1);
                    newState.HomeworkIdx.MyReviewedHomeworkIds.unshift(homeworkId);
                    newState.HomeworkIdx.ALLReviewedHomeworkIds.unshift(homeworkId);
                    break;
                }
                default:
                    break;
            }
            return newState;
        }
        case ActionTypes.CHANGE_ISEXCELLENT: {
            const newState = {...state};
            const { isExcellent } = newState.HomeworkEntities.HomeworkReviewInfo[action.homeworkId];
            newState.HomeworkEntities.HomeworkReviewInfo[action.homeworkId].isExcellent = !isExcellent;
            return newState;
        }
        default:
            return state;
    }
}