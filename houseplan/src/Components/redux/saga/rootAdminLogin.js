import { takeLatest } from '@redux-saga/core/effects';
import { REQ_FOR_LOGIN_PROGRESS_ADMIN } from '../Login/adminLogin/action';
import { handleAdminLoginReq } from './login/adminLogin';


export function* admin_login_post_saga() {
    yield takeLatest(REQ_FOR_LOGIN_PROGRESS_ADMIN, handleAdminLoginReq)
}