import { init_colPermission_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function ColPermission(state=init_colPermission_state, action) {
    switch (action.type) {
        case ActionTypes.HANDLE_SELECT_EMPLOYEE: {
            return {
                ...state,
                selectedEmployee: [...action.ids]
            }
        }
        case ActionTypes.HANDLE_DEL_EMPLOYEE: {
            console.log(123456, action.ids)
            const { selectedEmployee } = state;
            for(let i=0; i<action.ids.length; i++) {
                const index = selectedEmployee.indexOf(action.ids[i]);
                console.log(',,,,,,,,,,,,,,,,,,', index);
                selectedEmployee.splice(index,1)
            }
            return {
                ...state,
                selectedEmployee: [...selectedEmployee]
            }
        }
        default:
            return state;
    }
}