import axios from 'axios'
import {
    base_url,
    ADMIN_GET_all_MainType,
    ADMIN_POST_add_MainType,
    ADMIN_PATCH_update_MainType,
    ADMIN_DELETE_MainType
} from '../../../constant'

// ErrHAndling Using Toast Messsage
import { toast } from "react-toastify";
const errHandle = (msg) => {
    toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    });
}

// Section - Method - PAGE - Type    -------------- for this page API heading Comment

// ADMIN_GET_HOME_MainType
async function getAllMainType() {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + ADMIN_GET_all_MainType, {}, header)
        .then((res) => {
            const status = res.status
            const data = res.data
            return {
                status, data
            }
        }).catch((err) => {

        })
}

// ADMIN_POST_HOME_MainType
async function postMainType(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + ADMIN_POST_add_MainType, data, header)
        .then((res) => {
            const status = res.status
            const data = res.data
            return {
                status, data
            }
        }).catch((err) => {
            if (err.response.status === 301) {
                return (
                    errHandle("Duplication Data!")
                )
            }

        })
}

// ADMIN_PATCH_HOME_MainType (Update)
async function patchMainType(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + ADMIN_PATCH_update_MainType, data, header)
        .then((res) => {
            const status = res.status
            const update_data = data
            // console.log(status, update_data)
            return {
                status, update_data

            }
        }).catch((err) => {

        })
}

// ADMIN_DELETE_HOME_MainType 
async function deleteMainType(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    return axios.delete(base_url + ADMIN_DELETE_MainType, { data }, header)
        .then((res) => {
            const status = res.status
            const delete_data = res.data.message
            return {
                status, delete_data
            }
        }).catch((err) => {
            if (err.response.status === 301) {
                return (
                    errHandle("SubType Avaible!")
                )
            }
        })
}
export { getAllMainType, postMainType, patchMainType, deleteMainType }