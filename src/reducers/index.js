import { init_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function StudentsInfo(state=init_state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_USER_INFO_SUC: {
            const newState = {...state};
            newState.Students_Info.unshift(action.data);
            return newState;
        }
        case ActionTypes.FETCH_LESSON_INFO_SUC: {
            const newState = {...state};
            newState.LearningCourse = [...action.data.currentLessonsList];
            newState.HistoryData = [...action.data.historyLessonsList];
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