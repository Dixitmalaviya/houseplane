import {
    REQ_FOR_LOGIN_PROGRESS_ADMIN,
    REQ_FOR_LOGIN_SUCCESS_ADMIN,
    REQ_FOR_LOGIN_ERROR_ADMIN,
    REQ_FOR_LOGIN_FAILED_ADMIN,
    REQ_FOR_LOGIN_PROGRESS_CUSTOMER,
    REQ_FOR_LOGIN_SUCCESS_CUSTOMER,
    REQ_FOR_LOGIN_ERROR_CUSTOMER,
    REQ_FOR_LOGIN_FAILED_CUSTOMER
} from './action'

const initialState = {



    // Post 
    login_progress: false,
    login_error: false,

    // Status
    login_status_success: false,
    login_auth_failed: false,
    login_user: []

}

const CustomerLogin = (state = initialState, action) => {
    switch (action.type) {


        // POST
        case REQ_FOR_LOGIN_PROGRESS_CUSTOMER: {
            return {
                ...state,
                login_progress: true,
                login_error: false,
                login_auth_failed: false,
                login_status_success: false
            };
        }

        case REQ_FOR_LOGIN_SUCCESS_CUSTOMER: {
            // console.log(action.data)
            return {
                ...state,
                login_progress: false,
                login_error: false,
                // Status
                login_status_success: true,
                login_auth_failed: false,
                login_user: action.data
            };
        }

        case REQ_FOR_LOGIN_ERROR_CUSTOMER: {
            return {
                ...state,
                login_progress: false,
                login_error: true,
                login_auth_failed: false,
                login_status_success: false,
                login_user: null
            };
        }

        case REQ_FOR_LOGIN_FAILED_CUSTOMER: {
            return {
                ...state,
                login_progress: false,
                login_auth_failed: true,
                login_error: false,
                login_status_success: false
            };
        }

        default:
            return state
    }
}

export default CustomerLogin