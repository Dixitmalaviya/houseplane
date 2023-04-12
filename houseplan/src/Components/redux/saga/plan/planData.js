import { call, put } from 'redux-saga/effects';
import {
    REQUEST_FOR_GET_PLAN_SUCCESS,
    REQUEST_FOR_GET_PLAN_ERROR,

    REQUEST_FOR_ADD_PLAN_SUCCESS,
    REQUEST_FOR_ADD_PLAN_ERROR,


    REQUEST_FOR_UPDATE_PLAN_SUCCESS,
    REQUEST_FOR_UPDATE_PLAN_ERROR,

    REQUEST_FOR_DELETE_PLAN_SUCCESS,
    REQUEST_FOR_DELETE_PLAN_ERROR,


} from '../../home_plan/action'

import {
    deletePlan,
    getAllPlan,
    postPlan
} from '../../home_plan/api'

export function* handleGetPlanData() {
    try {
        const res = yield call(getAllPlan)
        const status = res.status
        const data = res.data.message
        if (status == 200) {
            yield put({ type: REQUEST_FOR_GET_PLAN_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_GET_PLAN_ERROR, data })
        }
    } catch (e) { yield put({ type: REQUEST_FOR_GET_PLAN_ERROR, e }) }
}

export function* handlePostPlanData(action) {
    try {

        const res = yield call(postPlan, action.payload)
        console.log(res, "this is data from saga")
        const status = res.status
        const data = res.data.result
        // console.log(status, data, "This is data from plandata side")
        if (status == 200) {
            yield put({ type: REQUEST_FOR_ADD_PLAN_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_ADD_PLAN_ERROR, data })
        }

    } catch (e) {
        yield put({ type: REQUEST_FOR_ADD_PLAN_ERROR, e })
    }
}


export function* handleDeletePlan(action) {
    try {
        // console.log(action, "this is delete action")
        const res = yield call(deletePlan, action.payload.delete_data)
        const status = res.status

        const data = action.payload.delete_data
        if (status == 200) {
            yield put({ type: REQUEST_FOR_DELETE_PLAN_SUCCESS, data })
        }
        else {
            yield put({ type: REQUEST_FOR_DELETE_PLAN_ERROR, data })
        }
    } catch (e) {
        yield put({ type: REQUEST_FOR_DELETE_PLAN_ERROR, e })
    }
}