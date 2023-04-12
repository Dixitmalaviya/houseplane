import { takeLatest, all } from '@redux-saga/core/effects';
import {
    // ADMIN - TAG (Spec) - MAINSPEC
    admin_Specs_get_MainSpecsSaga,
    admin_Specs_post_MainSpecsSaga,
    admin_Specs_patch_MainSpecsSaga,
    admin_Specs_delete_MainSpecsSaga,

    // ADMIN - Spec - SUBSPEC
    admin_Specs_get_SubSpecsSaga,
    admin_Specs_post_SubSpecsSaga,
    admin_Specs_patch_SubSpecsSaga,
    admin_Specs_delete_SubSpecsSaga
} from './rootSpecs'


// ADMIN - HOME - MAINTYPE
import {
    REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_MAINTYPE_IS_IN_PROGRESS
} from '../home_MainType/action'


// ADMIN - HOME - SUBTYPE
import {
    REQUEST_FOR_GET_SUBTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_SUBTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_PATCH_SUBTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_SUBTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_SUBTYPE_IS_IN_PROGRESS
} from '../home_SubType/action'


//ADMIN - HANDLE - PRICE
import {
    REQUEST_FOR_ADD_PRICE_TITLE_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_PRICE_TITLE_IS_IN_PROGRESS,
    REQUEST_FOR_GET_PRICE_TITLE_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_PRICE_TITLE_IS_IN_PROGRESS
} from '../home_PriceTitle/action';


// ADMIN - HANDLE - MAINTYPE
import {
    handleGetMainType,
    handlePostMainType,
    handlePatchMainType,
    handleDeleteMainType
} from './mainType';


// ADMIN - HANDLE - SUBTYPE
import {
    handleDeleteSubType,
    handleGetSubType,
    handlePatchSubType,
    handlePostSubType
} from './subType';

import {
    handleDeletePriceTitle,
    handleGetPriceTitle,
    handlePatchPriceTitle,
    handlePostPriceTitle
} from './prices/price_title'
import {
    handleDeletePriceValue,
    handleGetPriceValue,
    handlePatchPriceValue,
    handlePostPriceValue
} from './prices/Price_value';
import {
    REQUEST_FOR_ADD_PRICE_VALUE_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_PRICE_VALUE_IS_IN_PROGRESS,
    REQUEST_FOR_GET_PRICE_VALUE_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_PRICE_VALUE_IS_IN_PROGRESS
} from '../home_PriceValue/action';
import {
    admin_delete_planSaga,
    admin_get_planSaga,
    admin_post_planSaga
} from './rootPlan';
import { admin_login_post_saga } from './rootAdminLogin';
import { REQ_FOR_LOGIN_PROGRESS_CUSTOMER } from '../Login/customerLogin/action';
import { handleCustomerProfileReq } from './login/customerLogin';



export function* rootSaga() {
    yield all([

        // ADMIN - HOME - MAINTYPE
        admin_Home_get_MaintypeSaga(),
        admin_Home_post_MaintypeSaga(),
        admin_Home_patch_MaintypeSaga(),
        admin_Home_delete_MaintypeSaga(),

        // ADMIN - HOME - SUBTYPE
        admin_Home_get_SubtypeSaga(),
        admin_home_post_SubtypeSaga(),
        admin_home_patch_SubtypeSaga(),
        admin_home_delete_SubtypeSaga(),

        // ADMIN - TAG (Spec) - MAINSPEC
        admin_Specs_get_MainSpecsSaga(),
        admin_Specs_post_MainSpecsSaga(),
        admin_Specs_patch_MainSpecsSaga(),
        admin_Specs_delete_MainSpecsSaga(),

        // ADMIN - Spec - SUBSPEC
        admin_Specs_get_SubSpecsSaga(),
        admin_Specs_post_SubSpecsSaga(),
        admin_Specs_patch_SubSpecsSaga(),
        admin_Specs_delete_SubSpecsSaga(),

        //ADMIN - HOME _PRICE_ TITLE
        admin_Home_get_PricetitleSaga(),
        admin_home_post_PricetitleSaga(),
        admin_home_patch_PricetitleSaga(),
        admin_home_delete_PricetitleSaga(),

        //ADMIN - HOME _PRICE_ VALUE
        admin_Home_get_PricevalueSaga(),
        admin_home_post_PricevalueSaga(),
        admin_home_patch_PricevalueSaga(),
        admin_home_delete_PricevalueSaga(),


        //ADMIN PLAN 
        admin_get_planSaga(),
        admin_post_planSaga(),
        admin_delete_planSaga(),


        //login
        admin_login_post_saga(),

        // USER
        customer_profile_get_saga(),


    ])
}



// ADMIN - HOME - MAINTYPE
function* admin_Home_get_MaintypeSaga() {
    yield takeLatest(REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS, handleGetMainType)
}
function* admin_Home_post_MaintypeSaga() {
    yield takeLatest(REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS, handlePostMainType)
}
function* admin_Home_patch_MaintypeSaga() {
    yield takeLatest(REQUEST_FOR_UPDATE_MAINTYPE_IS_IN_PROGRESS, handlePatchMainType)
}
function* admin_Home_delete_MaintypeSaga() {
    yield takeLatest(REQUEST_FOR_DELETE_MAINTYPE_IS_IN_PROGRESS, handleDeleteMainType)
}



// ADMIN - HOME - SUBTYPE
function* admin_Home_get_SubtypeSaga() {
    yield takeLatest(REQUEST_FOR_GET_SUBTYPE_IS_IN_PROGRESS, handleGetSubType)
}

function* admin_home_post_SubtypeSaga() {
    yield takeLatest(REQUEST_FOR_ADD_SUBTYPE_IS_IN_PROGRESS, handlePostSubType)
}

function* admin_home_patch_SubtypeSaga() {
    yield takeLatest(REQUEST_FOR_UPDATE_SUBTYPE_IS_IN_PROGRESS, handlePatchSubType)
}

function* admin_home_delete_SubtypeSaga() {
    yield takeLatest(REQUEST_FOR_DELETE_SUBTYPE_IS_IN_PROGRESS, handleDeleteSubType)
}

//ADMIN - HOME - PRICE - TITLE

function* admin_Home_get_PricetitleSaga() {
    yield takeLatest(REQUEST_FOR_GET_PRICE_TITLE_IS_IN_PROGRESS, handleGetPriceTitle)
}

function* admin_home_post_PricetitleSaga() {
    yield takeLatest(REQUEST_FOR_ADD_PRICE_TITLE_IS_IN_PROGRESS, handlePostPriceTitle)
}

function* admin_home_patch_PricetitleSaga() {
    yield takeLatest(REQUEST_FOR_UPDATE_PRICE_TITLE_IS_IN_PROGRESS, handlePatchPriceTitle)
}

function* admin_home_delete_PricetitleSaga() {
    yield takeLatest(REQUEST_FOR_DELETE_PRICE_TITLE_IS_IN_PROGRESS, handleDeletePriceTitle)
}


//ADMIN - HOME - PRICE - VALUE

function* admin_Home_get_PricevalueSaga() {
    yield takeLatest(REQUEST_FOR_GET_PRICE_VALUE_IS_IN_PROGRESS, handleGetPriceValue)
}

function* admin_home_post_PricevalueSaga() {
    yield takeLatest(REQUEST_FOR_ADD_PRICE_VALUE_IS_IN_PROGRESS, handlePostPriceValue)
}

function* admin_home_patch_PricevalueSaga() {
    yield takeLatest(REQUEST_FOR_UPDATE_PRICE_VALUE_IS_IN_PROGRESS, handlePatchPriceValue)
}

function* admin_home_delete_PricevalueSaga() {
    yield takeLatest(REQUEST_FOR_DELETE_PRICE_VALUE_IS_IN_PROGRESS, handleDeletePriceValue)
}



// USER

export function* customer_profile_get_saga() {
    yield takeLatest(REQ_FOR_LOGIN_PROGRESS_CUSTOMER, handleCustomerProfileReq)
}
