import { init_class_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function ClassInfo(state=init_class_state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_CLASS_INFO_SUC: {
            const newState = {...state};
            newState.basic_info = {
                ...state.basic_info,
                ...action.response.basicInfo
            }
            newState.real_teacher = {
                ...state.real_teacher,
                ...action.response.basicInfo.real_teacher
            };
            newState.virtual_teacher = {
                ...state.virtual_teacher,
                ...action.response.basicInfo.virtual_teacher
            };
            newState.coursesList = {
                ...state.coursesList,
                courseEntities: action.response.coursesList.entities.courses,
                courseTimes: action.response.coursesList.result
            }
            return newState;
        }
        default:
            return state;
    }
}