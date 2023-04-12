import { call, put } from 'redux-saga/effects';
import { getAllPriceValue, postPriceValue, patchPriceValue, deletePriceValue } from '../../home_PriceValue/api';
import {
    REQUEST_FOR_GET_PRICE_VALUE_SUCCESS,
    REQUEST_FOR_GET_PRICE_VALUE_ERROR,

    REQUEST_FOR_ADD_PRICE_VALUE_SUCCESS,
    REQUEST_FOR_ADD_PRICE_VALUE_ERROR,

    REQUEST_FOR_UPDATE_PRICE_VALUE_SUCCESS,
    REQUEST_FOR_UPDATE_PRICE_VALUE_ERROR,

    REQUEST_FOR_DELETE_PRICE_VALUE_SUCCESS,
    REQUEST_FOR_DELETE_PRICE_VALUE_ERROR,


} from '../../home_PriceValue/action';


export function* handleGetPriceValue() {
    try {
        const res = yield call(getAllPriceValue)
        const status = res.status
        const data = res.data.message
        if (status == 200) {
            yield put({ type: REQUEST_FOR_GET_PRICE_VALUE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_GET_PRICE_VALUE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_GET_PRICE_VALUE_ERROR, e })
    }
}



export function* handlePostPriceValue(action) {
    try {
        const res = yield call(postPriceValue, action.payload.data)
        const status = res.status
        const data = res.data.result
        if (status == 200) {
            yield put({ type: REQUEST_FOR_ADD_PRICE_VALUE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_ADD_PRICE_VALUE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_ADD_PRICE_VALUE_ERROR, e })
    }
}


export function* handlePatchPriceValue(action) {
    try {
        const res = yield call(patchPriceValue, action.payload.update_data)
        // console.log(res.update_data)

        const status = res.status
        const data = res.update_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_UPDATE_PRICE_VALUE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_UPDATE_PRICE_VALUE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_UPDATE_PRICE_VALUE_ERROR, e })
    }
}


export function* handleDeletePriceValue(action) {
    try {

        const res = yield call(deletePriceValue, action.payload.delete_data)
        const status = res.status

        const data = action.payload.delete_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_DELETE_PRICE_VALUE_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_DELETE_PRICE_VALUE_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_DELETE_PRICE_VALUE_ERROR, e })
    }
}