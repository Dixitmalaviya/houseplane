import { call, put } from 'redux-saga/effects';
import {
    REQUEST_FOR_GET_SUBSPECS_SUCCESS,
    REQUEST_FOR_GET_SUBSPECS_ERROR,

    REQUEST_FOR_ADD_SUBSPECS_SUCCESS,
    REQUEST_FOR_ADD_SUBSPECS_ERROR,
    REQUEST_FOR_ADD_SUBSPECS_DUPLICATE, // for duplicate data

    REQUEST_FOR_UPDATE_SUBSPECS_SUCCESS,
    REQUEST_FOR_UPDATE_SUBSPECS_ERROR,

    REQUEST_FOR_DELETE_SUBSPECS_SUCCESS,
    REQUEST_FOR_DELETE_SUBSPECS_ERROR,
    REQUEST_FOR_DELETE_SUBSPECS_AVAILABLE

} from '../../specs/subSpecs/action'

import {
    getAllSubSpecs,
    postSubSpecs,
    patchSubSpecs,
    deleteSubSpecs
} from '../../specs/subSpecs/api'




export function* handleGetSubSpecs() {
    try {
        const res = yield call(getAllSubSpecs)
        const status = res.status
        const data = res.data.message
        if (status == 200) {
            yield put({ type: REQUEST_FOR_GET_SUBSPECS_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_GET_SUBSPECS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_GET_SUBSPECS_ERROR, e })
    }
}



export function* handlePostSubSpecs(action) {
    try {
        // console.log(action)
        const res = yield call(postSubSpecs, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status == 200) {
            yield put({ type: REQUEST_FOR_ADD_SUBSPECS_SUCCESS, data })
        } else if (status == 301) {
            const data = "SubSpec is already Available!"
            yield put({ type: REQUEST_FOR_ADD_SUBSPECS_DUPLICATE, data })
        }
        else {
            yield put({ type: REQUEST_FOR_ADD_SUBSPECS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_ADD_SUBSPECS_ERROR, e })
    }
}

export function* handlePatchSubSpecs(action) {
    try {
        const res = yield call(patchSubSpecs, action.payload.update_data)
        const status = res.status
        const data = res.update_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_UPDATE_SUBSPECS_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_UPDATE_SUBSPECS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_UPDATE_SUBSPECS_ERROR, e })
    }
}

export function* handleDeleteSubSpecs(action) {
    try {
        const res = yield call(deleteSubSpecs, action.payload.delete_data)
        const status = res.status
        const data = action.payload.delete_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_DELETE_SUBSPECS_SUCCESS, data })
        }
        else if (status == 301) {
            const available_message = res.available_message
            // yield put({ type: REQUEST_FOR_DELETE_SUBSPECS_AVAILABLE, available_message })
        }
        else {
            yield put({ type: REQUEST_FOR_DELETE_SUBSPECS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_DELETE_SUBSPECS_ERROR, e })
    }
}