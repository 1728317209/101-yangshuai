import { init_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function OpInfo(state=init_state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_USER_INFO_SUC: {
            const newState = {...state};
            newState.Students_Info = action.response;
            return newState;
        }
        case ActionTypes.FETCH_LESSON_INFO_SUC: {
            const newState = {...state};
            newState.LearningCourse = [...action.response.currentLessonsList];
            newState.HistoryData = [...action.response.historyLessonsList];
            return newState;
        }
        case ActionTypes.FETCH_SATISFILED_INFO_SUC: {
            const newState = {...state};
            newState.SatisfiledList = [...action.response.list];
            return newState;
        }
        case ActionTypes.CHANGEREPLYSTATUS: {
            const newState = {...state};
            newState.SatisfiledList.filter(item => {
                if(item.class_info.id === action.classId) {
                    item.reply_status = 1;
                }
            })
            
            return newState;
        }
        case ActionTypes.FETCH_USER_INFO_FAI: {
            // alert(action.err);
            return state;
        }
        case ActionTypes.FETCH_LESSON_INFO_FAI: {
            // alert(action.err);
            return state;
        }
        default:
            return state;
    }
}