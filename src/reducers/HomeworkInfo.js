import { init_homework_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function HomeworkInfo(state=init_homework_state, action) {
    switch (action.type) {
        //当前老师 未点评
        case `${ActionTypes.FETCH_MYWILLREVIEW_HOMEWORK_INFO}_SUC`: {
            const newState = {...state};
            const { HomeworkReview } = action.response;
            newState.HomeworkIdx.MyWillReviewHomeworkIds = [
                ...state.HomeworkIdx.MyWillReviewHomeworkIds,
                ...HomeworkReview.result
            ];
            // newState.HomeworkEntities = {
            //     ...state.HomeworkEntities,
            //     ...HomeworkReview.entities
            // }
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
        //所有老师 未点评
        case `${ActionTypes.FETCH_ALLWILLREVIEW_HOMEWORK_INFO}_SUC`: {
            const newState = {...state};
            const { HomeworkReview } = action.response;
            newState.HomeworkIdx.AllWillReviewHomeworkIds = [
                ...state.HomeworkIdx.AllWillReviewHomeworkIds,
                ...HomeworkReview.result
            ];
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
        //当前老师 已点评
        case `${ActionTypes.FETCH_MYREVIEWED_HOMEWORK_INFO}_SUC`: {
            const newState = {...state};
            const { HomeworkReview } = action.response;
            newState.HomeworkIdx.MyReviewedHomeworkIds = [
                ...state.HomeworkIdx.MyReviewedHomeworkIds,
                ...HomeworkReview.result
            ];
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
        //所有老师 已点评
        case `${ActionTypes.FETCH_ALLREVIEWED_HOMEWORK_INFO}_SUC`: {
            const newState = {...state};
            const { HomeworkReview } = action.response;
            newState.HomeworkIdx.ALLReviewedHomeworkIds = [
                ...state.HomeworkIdx.ALLReviewedHomeworkIds,
                ...HomeworkReview.result
            ];
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
        default:
            return state;
    }
}