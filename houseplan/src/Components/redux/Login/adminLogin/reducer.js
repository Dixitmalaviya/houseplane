import {
    REQ_FOR_LOGIN_PROGRESS_ADMIN,
    REQ_FOR_LOGIN_SUCCESS_ADMIN,
    REQ_FOR_LOGIN_ERROR_ADMIN,
    REQ_FOR_LOGIN_FAILED_ADMIN
} from './action'

const initialState = {



    // Post 
    login_progress: false,
    login_error: false,

    // Status
    login_status_success: false,
    login_auth_failed: false

}

const AdminLogin = (state = initialState, action) => {
    switch (action.type) {

        // POST

        case REQ_FOR_LOGIN_PROGRESS_ADMIN: {
            return {
                ...state,
                login_progress: true,
                login_error: false,
                login_auth_failed: false,
                login_status_success: false
            };
        }

        case REQ_FOR_LOGIN_SUCCESS_ADMIN: {
            return {
                ...state,
                login_progress: false,
                login_error: false,
                // Status
                login_status_success: true,
                login_auth_failed: false
            };
        }

        case REQ_FOR_LOGIN_ERROR_ADMIN: {
            return {
                ...state,
                login_progress: false,
                login_error: true,
                login_auth_failed: false,
                login_status_success: false
            };
        }

        case REQ_FOR_LOGIN_FAILED_ADMIN: {
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

export default AdminLogin