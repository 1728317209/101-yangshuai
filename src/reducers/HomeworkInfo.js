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
            newState.HomeworkEntities = {
                ...state.HomeworkEntities,
                ...HomeworkReview.entities
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
            newState.HomeworkEntities = {
                ...state.HomeworkEntities,
                ...HomeworkReview.entities
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
            newState.HomeworkEntities = {
                ...state.HomeworkEntities,
                ...HomeworkReview.entities
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
            newState.HomeworkEntities = {
                ...state.HomeworkEntities,
                ...HomeworkReview.entities
            }
            return newState;
        }
        default:
            return state;
    }
}