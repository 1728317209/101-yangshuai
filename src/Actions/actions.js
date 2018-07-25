import { ADD_ITEM, DEL_ITEM, TOP_ITEM, SHOW_DIALOG_B, SHOW_DIALOG_C, GET_INDEXS, MULDELITEMS, DEL_ITEMS } from '../Const/actionTypes';

export function addItem(obj) {
    return ({
        type: ADD_ITEM,
        obj//obj是{title, description, time}
    })
}

export function delItem() {
    return ({
        type: DEL_ITEM,
    })
}

export function topItem() {
    return ({
        type: TOP_ITEM,
    })
}

export function delItems() {
    return ({
        type: DEL_ITEMS
    })
}

export function mulSelectItems() {
    return ({
        type: MULDELITEMS
    })
}

export function ShowDialog(Active_id) {
    return ({
        type: SHOW_DIALOG_B,
        Active_id
    })
}

export function ShowDialog_C(Active_id, idx) {
    return ({
        type: SHOW_DIALOG_C,
        Active_id,
        idx
    })
}

export function getIndex(idx, checked) {
    return ({
        type: GET_INDEXS,
        idx,
        checked
    })
}
