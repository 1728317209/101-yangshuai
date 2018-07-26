import { ADD_ITEM, DEL_ITEM, TOP_ITEM, MULDELITEMS } from '../Const/actionTypes';
import { init_state } from './INIT';
import icon from '../resource/icon_Good_B-2.png';

export default function itemMessages_1(state=init_state, action) {
    switch (action.type) {
        case ADD_ITEM:{
            let newMessages = state.messages.slice();
            newMessages.unshift({
                icon: icon,
                title: action.obj.title,
                descript: action.obj.descript,
                time: action.obj.time
            });
            let newState = { ...state };
            newState.messages = newMessages;
            newState.isDialogActive = 0;
            return newState;
            break;
        }
        case DEL_ITEM:{
            let newMessages = state.messages.slice();
            newMessages.splice(state.idx, 1);
            let newState = { ...state };
            newState.messages = newMessages;
            newState.isDialogActive = 0;
            newMessages.idx = null;
            return newState;
            break;
        }
        case TOP_ITEM:{
            let newMessages = state.messages.slice();
            const obj = newMessages.splice(state.idx, 1);
            newMessages.unshift(obj[0]);
            let newState = { ...state };
            newState.messages = newMessages;
            newState.isDialogActive = 0;
            newState.idx = null;
            return newState;
            break;
        }
        case MULDELITEMS:{
            let newState = { ...state };
            newState.isDialogActive = false;
            newState.isMulSelect =true;
            return newState;
            break;
        }
        // case DEL_ITEMS:{
        //     let newMessages = state.messages.slice();
        //     for(let i=indexs.length-1; i>=0; i--) {
        //         if (indexs[i]) {
        //             newMessages.splice(i, 1);
        //         }
        //     }
        //     let newstate = { ...state };
        //     newstate.messages = newMessages;
        //     newstate.isMulSelect = false;
        //     // indexs = new Array(state.messages.length);
        //     return newstate;
        //     break;
        // }
        // case GET_INDEXS:{
        //     indexs[action.idx] = action.checked;
        //     return indexs;
        //     break;
        // }
        // case value:
            
        //     break;

        default:
            return state;
    }
}