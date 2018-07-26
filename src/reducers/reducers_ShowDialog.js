import { SHOW_DIALOG_B, SHOW_DIALOG_C } from '../Const/actionTypes';
import { init_state } from './INIT';

export default function itemMessages_2(state=init_state, action) {
    switch (action.type) {
        case SHOW_DIALOG_B:{
            let newState = { ...state };
            newState.isDialogActive = action.Active_id;
            return newState;
            break;
        }
        case SHOW_DIALOG_C:{
            let newState = { ...state };
            newState.isDialogActive = action.Active_id;
            newState.idx = action.idx;
            return newState;
            break;
        }
        
        default:
            return state;
    }
}




