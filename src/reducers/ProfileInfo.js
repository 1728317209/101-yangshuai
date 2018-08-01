import { init_profile_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function ProfileInfo(state=init_profile_state, action) {
    switch (action.type) {
        case ActionTypes.FETCH_PROFILE_INFO_SUC: {
            const newState = {...state};
            newState.Students_Info = [ ...action.response ];
            return newState;
        }

        default:
            return state;
    }
}