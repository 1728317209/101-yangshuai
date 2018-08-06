import { init_profile_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function ProfileInfo(state=init_profile_state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_PROFILE_INFO_SUC: {
            const newState = {...state};
            newState.StudentsMids = action.response.StudentsInfo.result;
            newState.StudentsEntities = action.response.StudentsInfo.entities.Students;
            return newState;
        }

        case ActionTypes.SELECTBYMID: {
            const newState = {...state};
            newState.SelectedMids = [];
            if( newState.StudentsMids.includes(action.mid)) {
                console.log(123)
                newState.SelectedMids.unshift(action.mid);
            }
            else {
                alert('Not Find!');
            }
            return newState;
        }

        case ActionTypes.SELECTBYNICK: {
            const newState = {...state};
            newState.SelectedMids = [];
            return newState;
        }

        default:
            return state;
    }
}