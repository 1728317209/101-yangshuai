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
            newState.currentLessonIds = action.response.current.result;
            newState.historyLessonIds = action.response.history.result;
            newState.lessonEntities.entities = { ...action.response.current.entities.lesson, ...action.response.history.entities.lesson };
            newState.lessonEntities.classes = { ...action.response.current.entities.classes, ...action.response.history.entities.classes };
            newState.lessonEntities.teachers = { ...action.response.current.entities.teacher, ...action.response.history.entities.teacher };
            return newState;
        }
        case ActionTypes.FETCH_SATISFILED_INFO_SUC: {
            const newState = {...state};
            const { SatisfiledInfo } = action.response;
            newState.SatisfiledLessonTimes = SatisfiledInfo.result;
            newState.satisfiledEntities.SatisfiledInfo = { ...SatisfiledInfo.entities.SatisfiledInfo};
            newState.satisfiledEntities.classes = { ...SatisfiledInfo.entities.classes };
            newState.satisfiledEntities.teachers = { ...SatisfiledInfo.entities.teacher};
            return newState;
        }
        case ActionTypes.CHANGEREPLYSTATUS: {
            const newState = {...state};
            newState.satisfiledEntities.SatisfiledInfo[action.classTime].reply_status = 1; //!newState.entities.SatisfiledInfo[action.classTime].reply_status;
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