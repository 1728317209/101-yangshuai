import { ADD_ITEM, DEL_ITEM, TOP_ITEM, SHOW_DIALOG_B, SHOW_DIALOG_C, MULDELITEMS, GET_INDEXS, DEL_ITEMS } from '../Const/actionTypes';
import { init_state } from './INIT';
import icon from '../resource/icon_Good_B-2.png';

export default function itemmessages(state=init_state, action) {
    switch (action.type) {
        case SHOW_DIALOG_B:{
            let newState = { ...state };
            newState.isDialogActive = action.Active_id;
            return newState;
        }
        case SHOW_DIALOG_C:{
            let newState = { ...state };
            newState.isDialogActive = action.Active_id;
            newState.idx = action.idx;
            return newState;
        }
        case ADD_ITEM:{
            let newMessages = state.messages.slice();
            // newMessages.unshift({
            //     icon: icon,
            //     title: action.obj.title,
            //     descript: action.obj.descript,
            //     time: action.obj.time
            // });
            // let newState = { ...state };
            // newState.messages = newMessages;
            // newState.isDialogActive = 0;
            // return newState;
            for(let i=newMessages.length-1; i>=0; i--) {
                if(newMessages[i].isTop){
                    newMessages.splice(i+1, 0, {
                        icon: icon,
                        title: action.obj.title,
                        descript: action.obj.descript,
                        time: action.obj.time,
                        isTop: false
                    });
                    break;
                }
            }
            let newState = { ...state };
            newState.messages = newMessages;
            newState.isDialogActive = 0;
            return newState;
        }
        case DEL_ITEM:{
            let newMessages = state.messages.slice();
            newMessages.splice(state.idx, 1);
            let newState = { ...state };
            newState.messages = newMessages;
            newState.isDialogActive = 0;
            newMessages.idx = null;
            return newState;
        }
        case TOP_ITEM:{
            let newMessages = state.messages.slice();
            const obj = newMessages.splice(state.idx, 1);
            newMessages.unshift(obj[0]);
            newMessages[0].isTop = true;
            let newState = { ...state };
            newState.messages = newMessages;
            newState.isDialogActive = 0;
            newState.idx = null;
            return newState;
        }
        case MULDELITEMS:{
            let newState = { ...state };
            newState.isDialogActive = false;
            newState.isMulSelect =true;
            return newState;
        }
        case DEL_ITEMS:{
            let newMessages = state.messages.slice();
            for(let i=state.indexs.length-1; i>=0; i--) {
                if (state.indexs[i]) {
                    newMessages.splice(i, 1);
                }
            }
            let newstate = { ...state };
            newstate.messages = newMessages;
            newstate.isMulSelect = false;
            newstate.indexs = new Array();
            return newstate;
            break;
        }
        case GET_INDEXS:{
            let newState = { ...state };
            newState.indexs[action.idx] = action.checked;
            return newState;
        }
        // case value:
            
        //     break;
        default:
            return state;
    }
}



// import { combineReducers } from 'redux';
// import HandleItem from './reducers_HandleItem';
// import ShowDialog from './reducers_ShowDialog';

// export default combineReducers({
//     HandleItem,
//     ShowDialog
// });