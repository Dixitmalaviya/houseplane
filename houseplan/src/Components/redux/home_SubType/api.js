import axios from 'axios'
import {
    base_url,
    ADMIN_GET_all_SubType,
    ADMIN_POST_add_SubType,
    ADMIN_PATCH_update_SubType,
    ADMIN_DELETE_SubType
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

// ADMIN_GET_ALL_SUBTYPE

async function getAllSubType() {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    return axios.get(base_url + ADMIN_GET_all_SubType, {}, header)
        .then((res) => {
            const status = res.status
            const data = res.data
            return {
                status, data
            }
        }).catch((err) => {

        })
}

// ADMIN_POST_HOME_SubType
async function postSubType(data) {
    const header = {
        'Content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + ADMIN_POST_add_SubType, data, header)
        .then((res) => {
            console.log(res, "sdasdsd")
            const status = res.status
            const data = res.data
            return {
                status, data
            }
        }).catch((err) => {
            console.log(err)
            if (err.response.status === 301) {
                return (
                    errHandle("Duplication Data!")
                )
            }
            if (err.response.status === 401) {
                return (
                    errHandle("File too large! Size < 3MB")
                )
            }
        })
}


// // ADMIN_PATCH_HOME_SubType (Update)
async function patchSubType(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + ADMIN_PATCH_update_SubType, data, header)
        .then((res) => {
            const status = res.status
            const update_data = data
            return {
                status, update_data
            }
        }).catch((err) => {

        })
}


// ADMIN_DELETE_HOME_MainType 
async function deleteSubType(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    return axios.delete(base_url + ADMIN_DELETE_SubType, { data }, header)
        .then((res) => {
            const status = res.status
            const delete_data = res.data.message
            return {
                status, delete_data
            }
        }).catch((err) => {

        })
}



export { getAllSubType, postSubType, patchSubType, deleteSubType }
