import { init_class_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function ClassInfo(state=init_class_state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_CLASS_INFO_SUC: {
            const newState = {...state};
            console.log(123,action.response.basic_info)
            newState.basic_info = { ...action.response.basic_info };
            newState.list = [ ...action.response.list ];
            console.log(123,action.response.basic_info.real_teacher)
            newState.real_teacher = { ...action.response.basic_info.real_teacher };
            newState.virtual_teacher = { ...action.response.basic_info.virtual_teacher };
            return newState;
        }

        default:
            return state;
    }
}