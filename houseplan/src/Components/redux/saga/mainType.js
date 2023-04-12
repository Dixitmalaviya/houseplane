import { call, put } from 'redux-saga/effects';
import { getAllMainType, postMainType, patchMainType, deleteMainType } from '../home_MainType/api';
import {
    REQUEST_FOR_GET_MAINTYPE_SUCCESS,
    REQUEST_FOR_GET_MAINTYPE_ERROR,

    REQUEST_FOR_ADD_MAINTYPE_SUCCESS,
    REQUEST_FOR_ADD_MAINTYPE_ERROR,

    REQUEST_FOR_UPDATE_MAINTYPE_SUCCESS,
    REQUEST_FOR_UPDATE_MAINTYPE_ERROR,

    REQUEST_FOR_DELETE_MAINTYPE_SUCCESS,
    REQUEST_FOR_DELETE_MAINTYPE_ERROR,
} from '../home_MainType/action';



export function* handleGetMainType() {
    try {
        const res = yield call(getAllMainType)
        const status = res.status
        const data = res.data.message
        if (status == 200) {
            yield put({ type: REQUEST_FOR_GET_MAINTYPE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_GET_MAINTYPE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_GET_MAINTYPE_ERROR, e })
    }
}


export function* handlePostMainType(action) {
    try {
        const res = yield call(postMainType, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status == 200) {
            yield put({ type: REQUEST_FOR_ADD_MAINTYPE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_ADD_MAINTYPE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_ADD_MAINTYPE_ERROR, e })
    }
}


export function* handlePatchMainType(action) {
    try {
        const res = yield call(patchMainType, action.payload.update_data)
        // console.log(res.update_data)

        const status = res.status
        const data = res.update_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_UPDATE_MAINTYPE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_UPDATE_MAINTYPE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_UPDATE_MAINTYPE_ERROR, e })
    }
}


export function* handleDeleteMainType(action) {
    try {
        // console.log(action.payload.delete_data)
        const res = yield call(deleteMainType, action.payload.delete_data)
        const status = res.status
        // const _id = action.payload.delete_data._id
        // const delete_data = res.delete_data.
        // const data = {
        //     _id,
        //     delete_data
        // }
        const data = action.payload.delete_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_DELETE_MAINTYPE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_DELETE_MAINTYPE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_DELETE_MAINTYPE_ERROR, e })
    }
}