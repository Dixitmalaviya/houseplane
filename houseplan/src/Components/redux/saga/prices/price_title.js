import { call, put } from 'redux-saga/effects';
import { getAllPriceTitle, postPriceTitle, patchPriceTitle, deletePriceTitle } from '../../home_PriceTitle/api';
import {
    REQUEST_FOR_GET_PRICE_TITLE_SUCCESS,
    REQUEST_FOR_GET_PRICE_TITLE_ERROR,

    REQUEST_FOR_ADD_PRICE_TITLE_SUCCESS,
    REQUEST_FOR_ADD_PRICE_TITLE_ERROR,

    REQUEST_FOR_UPDATE_PRICE_TITLE_SUCCESS,
    REQUEST_FOR_UPDATE_PRICE_TITLE_ERROR,

    REQUEST_FOR_DELETE_PRICE_TITLE_SUCCESS,
    REQUEST_FOR_DELETE_PRICE_TITLE_ERROR,


} from '../../home_PriceTitle/action';


export function* handleGetPriceTitle() {
    try {
        const res = yield call(getAllPriceTitle)
        const status = res.status
        const data = res.data.message
        if (status == 200) {
            yield put({ type: REQUEST_FOR_GET_PRICE_TITLE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_GET_PRICE_TITLE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_GET_PRICE_TITLE_ERROR, e })
    }
}



export function* handlePostPriceTitle(action) {
    try {
        const res = yield call(postPriceTitle, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status == 200) {
            yield put({ type: REQUEST_FOR_ADD_PRICE_TITLE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_ADD_PRICE_TITLE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_ADD_PRICE_TITLE_ERROR, e })
    }
}


export function* handlePatchPriceTitle(action) {
    try {
        const res = yield call(patchPriceTitle, action.payload.update_data)
        // console.log(res.update_data)

        const status = res.status
        const data = res.update_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_UPDATE_PRICE_TITLE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_UPDATE_PRICE_TITLE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_UPDATE_PRICE_TITLE_ERROR, e })
    }
}


export function* handleDeletePriceTitle(action) {
    try {

        const res = yield call(deletePriceTitle, action.payload.delete_data)
        const status = res.status

        const data = action.payload.delete_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_DELETE_PRICE_TITLE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_DELETE_PRICE_TITLE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_DELETE_PRICE_TITLE_ERROR, e })
    }
}