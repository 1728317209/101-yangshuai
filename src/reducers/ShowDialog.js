import { SHOW_DIALOG_B, SHOW_DIALOG_C } from '../Const/actionTypes';
import { init_state } from './INIT';

export default function itemMessages_2(state=init_state, action) {
    switch (action.type) {
        case SHOW_DIALOG_B:{
            let newState = { ...state };
            newState.isDialogActive = action.Active_id;
            return newState;
        }
        case SHOW_DIALOG_C:{
            let newState = { ...state };
            newState.isDialogActive = action.Active_id;
            return newState;
        }
        
        default:
            return state;
    }
}




