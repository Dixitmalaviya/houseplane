import { takeLatest, all } from '@redux-saga/core/effects';
// ADMIN - PLAN
import {
    REQUEST_FOR_GET_PLAN_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_PLAN_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_PLAN_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_PLAN_IS_IN_PROGRESS
} from '../home_plan/action'



// ADMIN  PLAN
import {
    handleDeletePlan,
    handleGetPlanData,
    handlePostPlanData,

} from './plan/planData'



// ADMIN - PLAN
export function* admin_get_planSaga() {
    yield takeLatest(REQUEST_FOR_GET_PLAN_IS_IN_PROGRESS, handleGetPlanData)
}
export function* admin_post_planSaga() {
    yield takeLatest(REQUEST_FOR_ADD_PLAN_IS_IN_PROGRESS, handlePostPlanData)
}
export function* admin_delete_planSaga() {
    yield takeLatest(REQUEST_FOR_DELETE_PLAN_IS_IN_PROGRESS, handleDeletePlan)
}

