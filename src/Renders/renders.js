import { ADD_ITEM, DEL_ITEM, TOP_ITEM, SHOW_DIALOG_B, SHOW_DIALOG_C, MULDELITEMS, GET_INDEXS, DEL_ITEMS } from '../Const/actionTypes';

import icon from '../resource/icon_Good_B-2.png';

export default function itemMessagesList(state = { messagesList: [] }, action) {
    switch (action.type) {
        case ADD_ITEM:
            const newMessages = state.messagesList.slice();
            newMessages.unshift({
                icon: icon,
                title: action.obj.title,
                descript: action.obj.descript,
                time: action.obj.time
            });
            const newState = { ...state };
            newState.messagesList = newMessages;
            newMessages.isDialogActive = 0;
            return newState;
            break;
    
        case DEL_ITEM:
            if(state.idx) {
                const newMessages = state.messagesList.slice();
                newMessages.splice(state.idx, 1);
                const newState1 = { ...state };
                newState1.messagesList = newMessages;
                newState1.isDialogActive = 0;
                newMessages.idx = null;
                return newState1;
            }
            break;
    
        case TOP_ITEM:
            if (state.idx) {
                const newMessages = state.messagesList.slice();
                const obj = newMessages.splice(state.idx, 1);
                newMessages.unshift(obj[0]);
                const newState2 = { ...state };
                newState2.messagesList = newMessages;
                newState2.isDialogActive = 0;
                newState2.idx = null;
                return newState2;
            }
            break;
    
        case SHOW_DIALOG_B:
            const newState3 = { ...state };
            newState3.isDialogActive = action.Active_id;
            return newState3;
            break;
            
            
        case SHOW_DIALOG_C:
            const newState4 = { ...state };
            newState4.isDialogActive = action.Active_id;
            newState4.idx = action.idx;
            return newState4;
            break;
    
        case MULDELITEMS:
            const newState5 = { ...state };
            newState5.isDialogActive = false;
            newState5.isMulSelect =true;
            return newState5;
            break;
            
        case DEL_ITEMS:
            const newMessages = state.messagesList.slice();
            for(let i=state.indexs.length-1; i>=0; i--) {
                if (state.indexs[i]) {
                    newMessages.splice(i, 1);
                }
            }
            const newstate6 = { ...state };
            newstate6.messagesList = newMessages;
            newstate6.isMulSelect = false;
            newstate6.indexs = new Array(state.messagesList.length);
            return newstate6;
            break;
    
        case GET_INDEXS:
            const newstate7 = { ...state };
            newstate7.indexs[action.idx] = action.checked;
            return newstate7;
            break;
    
        // case value:
            
        //     break;
    
        default:
            break;
    }
}