import { call, put } from 'redux-saga/effects';
import {
    REQUEST_FOR_GET_MAINSPECS_SUCCESS,
    REQUEST_FOR_GET_MAINSPECS_ERROR,

    REQUEST_FOR_ADD_MAINSPECS_SUCCESS,
    REQUEST_FOR_ADD_MAINSPECS_ERROR,
    REQUEST_FOR_ADD_MAINSPECS_DUPLICATE, // for duplicate data

    REQUEST_FOR_UPDATE_MAINSPECS_SUCCESS,
    REQUEST_FOR_UPDATE_MAINSPECS_ERROR,

    REQUEST_FOR_DELETE_MAINSPECS_SUCCESS,
    REQUEST_FOR_DELETE_MAINSPECS_ERROR,
    REQUEST_FOR_DELETE_MAINSPECS_AVAILABLE

} from '../../specs/mainSpecs/action'

import {
    getAllMainSpecs,
    postMainSpecs,
    patchMainSpecs,
    deleteMainSpecs
} from '../../specs/mainSpecs/api'



export function* handleGetMainSpecs() {
    try {
        const res = yield call(getAllMainSpecs)
        const status = res.status
        const data = res.data.message
        if (status == 200) {
            yield put({ type: REQUEST_FOR_GET_MAINSPECS_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_GET_MAINSPECS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_GET_MAINSPECS_ERROR, e })
    }
}



export function* handlePostMainSpecs(action) {
    try {
        const res = yield call(postMainSpecs, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status == 200) {
            yield put({ type: REQUEST_FOR_ADD_MAINSPECS_SUCCESS, data })
        }
        else if (status == 301) {
            // yield put({ type: REQUEST_FOR_ADD_MAINSPECS_SUCCESS, data })
            // console.log("Duplicate")
        }
        //handle Duplicate Err ......Remaining
        else {
            yield put({ type: REQUEST_FOR_ADD_MAINSPECS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_ADD_MAINSPECS_ERROR, e })
    }
}




export function* handlePatchMainSpecs(action) {
    try {
        const res = yield call(patchMainSpecs, action.payload.update_data)
        const status = res.status
        const data = res.update_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_UPDATE_MAINSPECS_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_UPDATE_MAINSPECS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_UPDATE_MAINSPECS_ERROR, e })
    }
}


export function* handleDeleteMainSpecs(action) {
    try {
        const res = yield call(deleteMainSpecs, action.payload.delete_data)
        const status = res.status
        const data = action.payload.delete_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_DELETE_MAINSPECS_SUCCESS, data })
        }
        else if (status == 301) {
            const available_message = res.available_message
            // yield put({ type: REQUEST_FOR_DELETE_MAINSPECS_AVAILABLE, available_message })
        }
        else {
            yield put({ type: REQUEST_FOR_DELETE_MAINSPECS_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_DELETE_MAINSPECS_ERROR, e })
    }
}
