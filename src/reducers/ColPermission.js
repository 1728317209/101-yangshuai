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
            const { DepartmentEntities: { AllEmployee } } = state;
            let selectedEmployee = [];
            for(let x in AllEmployee) {
                if(AllEmployee[x].isSelected) {
                    selectedEmployee.push(x);
                    AllEmployee[x].isSelected = false;
                }
            }
            return {
                ...state,
                selectedEmployee: [...selectedEmployee],
                DepartmentEntities: {
                    ...state.DepartmentEntities,
                    AllEmployee: AllEmployee
                }
            }
        }
        case ActionTypes.HANDLE_SEARCH_SELECTED_EMPLOYEE: {
            console.log(state.selectedEmployee, action.id)
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
            console.log(state.currentEmployee, action.id)
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
            const { 
                selectedEmployee, 
                DepartmentEntities: { AllEmployee } 
            } = state;
            const selectedBtn = [];
            for(let x in AllEmployee) {
                if(AllEmployee[x].isToDel) {
                    selectedBtn.push(x);
                    AllEmployee[x].isToDel = false;
                }
            }
            for(let i=0; i<selectedBtn.length; i++) {
                const index = selectedEmployee.indexOf(selectedBtn[i]);
                selectedEmployee.splice(index,1)
            }
            return {
                ...state,
                selectedEmployee: [...selectedEmployee],
                DepartmentEntities: { 
                    ...state.DepartmentEntities,
                    AllEmployee: AllEmployee
                } 
            }
        }
        case ActionTypes.HANDLE_CLICK_RIGTH_EMP_BTN: {
            return {
                ...state,
                DepartmentEntities: {
                    ...state.DepartmentEntities,
                    AllEmployee: {
                        ...state.DepartmentEntities.AllEmployee,
                        [action.id]: {
                            ...state.DepartmentEntities.AllEmployee[action.id],
                            isSelected: !state.DepartmentEntities.AllEmployee[action.id].isSelected
                        }
                    }
                }
            }
        }
        case ActionTypes.HANDLE_CLICK_LEFT_EMP_BTN: {
            return {
                ...state,
                DepartmentEntities: {
                    ...state.DepartmentEntities,
                    AllEmployee: {
                        ...state.DepartmentEntities.AllEmployee,
                        [action.id]: {
                            ...state.DepartmentEntities.AllEmployee[action.id],
                            isToDel: !state.DepartmentEntities.AllEmployee[action.id].isToDel
                        }
                    }
                }
            }
        }
        default:
            return state;
    }
}