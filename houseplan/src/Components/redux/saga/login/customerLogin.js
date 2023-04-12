import { call, put } from 'redux-saga/effects';
import { REQ_FOR_LOGIN_ERROR_CUSTOMER, REQ_FOR_LOGIN_FAILED_CUSTOMER, REQ_FOR_LOGIN_SUCCESS_CUSTOMER } from '../../Login/customerLogin/action';
import { customer_post_login } from '../../Login/customerLogin/api';


// Login Activity Detils (Admin)
export function* handleCustomerProfileReq(action) {
    try {
        const res = yield call(customer_post_login, action)
        // console.log(res)
        const status = res.status
        const data = res.data
        if (status === 200) {
            yield put({ type: REQ_FOR_LOGIN_SUCCESS_CUSTOMER, data })
        }
        else if (status === 301) {
            yield put({ type: REQ_FOR_LOGIN_FAILED_CUSTOMER, data })
        }
        else {
            yield put({ type: REQ_FOR_LOGIN_ERROR_CUSTOMER, data })
        }
    } catch (e) {
        yield put({ type: REQ_FOR_LOGIN_ERROR_CUSTOMER, e })
    }
}