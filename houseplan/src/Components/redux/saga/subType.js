import { call, put } from 'redux-saga/effects'
import { deleteSubType, getAllSubType, patchSubType, postSubType } from '../home_SubType/api'
import {
    REQUEST_FOR_GET_SUBTYPE_SUCCESS,
    REQUEST_FOR_GET_SUBTYPE_ERROR,
    REQUEST_FOR_ADD_SUBTYPE_SUCCESS,
    REQUEST_FOR_ADD_SUBTYPE_ERROR,
    REQUEST_FOR_UPDATE_SUBTYPE_ERROR,
    REQUEST_FOR_UPDATE_SUBTYPE_SUCCESS,
    REQUEST_FOR_DELETE_SUBTYPE_ERROR,
    REQUEST_FOR_DELETE_SUBTYPE_SUCCESS
} from "../home_SubType/action";


export function* handleGetSubType() {
    try {
        const res = yield call(getAllSubType)
        const status = res.status
        const data = res.data.message
        // console.log(status, "ssssssss")
        if (status == 200) {
            yield put({ type: REQUEST_FOR_GET_SUBTYPE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_GET_SUBTYPE_ERROR, data })
        }
    } catch (e) { yield put({ type: REQUEST_FOR_GET_SUBTYPE_ERROR, e }) }
}



export function* handlePostSubType(action) {
    try {
        // console.log(action, "this is action")
        const res = yield call(postSubType, action.payload)
        const status = res.status
        const data = res.data.result

        if (status == 200) {
            yield put({ type: REQUEST_FOR_ADD_SUBTYPE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_ADD_SUBTYPE_ERROR, data })
        }

    } catch (e) {
        yield put({ type: REQUEST_FOR_ADD_SUBTYPE_ERROR, e })
    }
}



export function* handlePatchSubType(action) {
    try {
        // console.log(action)
        const res = yield call(patchSubType, action.payload.update_data)
        // console.log(res.update_data, "ssss")

        const status = res.status
        const data = res.update_data

        if (status == 200) {
            yield put({ type: REQUEST_FOR_UPDATE_SUBTYPE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_UPDATE_SUBTYPE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_UPDATE_SUBTYPE_ERROR, e })
    }
}



export function* handleDeleteSubType(action) {
    try {

        const res = yield call(deleteSubType, action.payload.delete_data)
        const status = res.status
        const data = action.payload.delete_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_DELETE_SUBTYPE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_DELETE_SUBTYPE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_DELETE_SUBTYPE_ERROR, e })
    }
}