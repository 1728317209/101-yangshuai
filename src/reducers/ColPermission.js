import { init_colPermission_state } from './INIT_STATE';
import * as ActionTypes from '../Const/ActionTypes';
export default function ColPermission(state=init_colPermission_state, action) {
    switch (action.type) {
        case ActionTypes.HANDLE_SET_ISSHOWVIEW: {
            return {
                ...state,
                isShowView: action.status
            }
        }
        case ActionTypes.HANDLE_SELECT_EMPLOYEE: {
            return {
                ...state,
                selectedEmployee: [...action.ids]
            }
        }
        case ActionTypes.HANDLE_SEARCH_SELECTED_EMPLOYEE: {
            if(state.selectedEmployee.indexOf(action.id) === (-1)) {
                alert('NOT FOUND!')
                return {
                    ...state
                }
            }else {
                return {
                    ...state,
                    selectedEmployee: [action.id]
                }
            }
        }
        case ActionTypes.HANDLE_ON_TREE_CLICK: {
            if(action.id) {
                return {
                    ...state,
                    currentEmployee: state.DepartmentEntities.departments[action.id].employee
                }
            }else {
                return {
                    ...state,
                    currentEmployee: []
                }
            }
        }
        case ActionTypes.HANDLE_SEARCH_EMPLOYEE: {
            if(state.currentEmployee.indexOf(action.id) === (-1)) {
                alert('NOT FOUND!')
                return {
                    ...state,
                    // currentEmployee: []
                }
            }else {
                return {
                    ...state,
                    currentEmployee: [action.id]
                }
            }
        }
        case ActionTypes.HANDLE_DEL_EMPLOYEE: {
            console.log(123456, action.ids)
            const { selectedEmployee } = state;
            for(let i=0; i<action.ids.length; i++) {
                const index = selectedEmployee.indexOf(action.ids[i]);
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