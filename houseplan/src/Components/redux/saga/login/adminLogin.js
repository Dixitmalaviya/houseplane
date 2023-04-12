import { call, put } from 'redux-saga/effects';
import { REQ_FOR_LOGIN_ERROR_ADMIN, REQ_FOR_LOGIN_FAILED_ADMIN, REQ_FOR_LOGIN_SUCCESS_ADMIN } from '../../Login/adminLogin/action';
import { admin_post_login } from '../../Login/adminLogin/api';


// Login Activity Detils (Admin)
export function* handleAdminLoginReq(action) {
    try {
        const res = yield call(admin_post_login, action.payload.data)
        //console.log(res)
        const status = res.status
        const data = res.data.result
        if (status === 200) {
            yield put({ type: REQ_FOR_LOGIN_SUCCESS_ADMIN, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_LOGIN_FAILED_ADMIN, data })
        }
        else {
            yield put({ type: REQ_FOR_LOGIN_ERROR_ADMIN, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_LOGIN_ERROR_ADMIN, e })
    }
}