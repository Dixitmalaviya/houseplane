import { takeLatest, all } from '@redux-saga/core/effects';
// ADMIN - SPECS & FEATURE - MAINSPECS
import {
    REQUEST_FOR_GET_MAINSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_MAINSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_MAINSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_MAINSPECS_IS_IN_PROGRESS
} from '../specs/mainSpecs/action'

// ADMIN - SPECS & FEATURE - SUBSPECS
import {
    REQUEST_FOR_GET_SUBSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_SUBSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_SUBSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_SUBSPECS_IS_IN_PROGRESS

} from '../specs/subSpecs/action'



// ADMIN - HANDLE - MAINSPECS
import {
    handleGetMainSpecs,
    handlePostMainSpecs,
    handlePatchMainSpecs,
    handleDeleteMainSpecs
} from './specs/mainSpecs'

// ADMIN - HANDLE - SUBPECS
import {
    handleGetSubSpecs,
    handlePostSubSpecs,
    handlePatchSubSpecs,
    handleDeleteSubSpecs
} from './specs/subSpecs'





// ADMIN - SPECS & FEATURES - MAINSPECS
export function* admin_Specs_get_MainSpecsSaga() {
    yield takeLatest(REQUEST_FOR_GET_MAINSPECS_IS_IN_PROGRESS, handleGetMainSpecs)
}
export function* admin_Specs_post_MainSpecsSaga() {
    yield takeLatest(REQUEST_FOR_ADD_MAINSPECS_IS_IN_PROGRESS, handlePostMainSpecs)
}
export function* admin_Specs_patch_MainSpecsSaga() {
    yield takeLatest(REQUEST_FOR_UPDATE_MAINSPECS_IS_IN_PROGRESS, handlePatchMainSpecs)
}
export function* admin_Specs_delete_MainSpecsSaga() {
    yield takeLatest(REQUEST_FOR_DELETE_MAINSPECS_IS_IN_PROGRESS, handleDeleteMainSpecs)
}


// ADMIN - SPECS & FEATURES - SUBSPECS
export function* admin_Specs_get_SubSpecsSaga() {
    yield takeLatest(REQUEST_FOR_GET_SUBSPECS_IS_IN_PROGRESS, handleGetSubSpecs)
}
export function* admin_Specs_post_SubSpecsSaga() {
    yield takeLatest(REQUEST_FOR_ADD_SUBSPECS_IS_IN_PROGRESS, handlePostSubSpecs)
}
export function* admin_Specs_patch_SubSpecsSaga() {
    yield takeLatest(REQUEST_FOR_UPDATE_SUBSPECS_IS_IN_PROGRESS, handlePatchSubSpecs)
}
export function* admin_Specs_delete_SubSpecsSaga() {
    yield takeLatest(REQUEST_FOR_DELETE_SUBSPECS_IS_IN_PROGRESS, handleDeleteSubSpecs)
}