import { ADD_ITEM, DEL_ITEM, TOP_ITEM, MULDELITEMS, DEL_ITEMS, GET_INDEX, GET_INDEXS } from '../Const/actionTypes';

import { init_state } from './INIT';
import icon from '../resource/icon_Good_B-2.png';

export default function itemMessages_1(state=init_state, action) {
    switch (action.type) {
        case ADD_ITEM:{
            let newMessages = state.messages.slice();
            // newMessages.indexOf(newMessages.filter(item => item.isTop === true).filter())
            for(let i=0; i<newMessages.length; i++) {
                if(!newMessages[i].isTop){
                    newMessages.splice(i, 0, {
                        icon: icon,
                        title: action.obj.title,
                        descript: action.obj.descript,
                        time: action.obj.time,
                        isTop: false
                    });
                    break;
                }else {
                    if(i === newMessages.length-1) {
                        newMessages.splice(newMessages.length, 0, {
                            icon: icon,
                            title: action.obj.title,
                            descript: action.obj.descript,
                            time: action.obj.time,
                            isTop: false
                        });
                        break;
                    }
                }
            }
            let newState = { ...state };
            newState.messages = newMessages;
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
            newstate.indexs = [];
            return newstate;
        }
        case GET_INDEX:{
            let newState = { ...state };
            newState.idx = action.idx;
            return newState;
        }
        case GET_INDEXS:{
            let newState = { ...state };
            newState.indexs[action.idx] = action.checked;
            return newState;
        }

        default:
            return state;
    }
}