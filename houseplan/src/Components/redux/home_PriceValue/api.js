import axios from 'axios'
import {
    base_url,
    ADMIN_GET_ALL_PRICE_VALUE,
    ADMIN_POST_PRICE_VALUE,
    ADMIN_PATCH_PRICE_VALUE,
    ADMIN_DELETE_PRICE_VALUE

} from '../../../constant'


// ADMIN_GET_HOME_PRICE_VALUE
async function getAllPriceValue() {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + ADMIN_GET_ALL_PRICE_VALUE, {}, header)
        .then((res) => {
            const status = res.status
            const data = res.data
            // console.log(res, "This is Get APi")
            return {
                status, data
            }
        }).catch((err) => {

        })
}

// ADMIN_POST_HOME_PRICE_VALUE
async function postPriceValue(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + ADMIN_POST_PRICE_VALUE, data, header)
        .then((res) => {
            const status = res.status
            const data = res.data

            // console.log(res, "This is post APi")
            return {
                status, data
            }
        }).catch((err) => {

        })
}

// ADMIN_PATCH_HOME_PRICE_VALUE (Update)
async function patchPriceValue(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + ADMIN_PATCH_PRICE_VALUE, data, header)
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


// ADMIN - DELETE - PRICE - VALUE
async function deletePriceValue(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    return axios.delete(base_url + ADMIN_DELETE_PRICE_VALUE, { data }, header)
        .then((res) => {
            const status = res.status
            const delete_data = res.data.message
            return {
                status, delete_data
            }
        })
        .catch((err) => {
            const status = err.response.status
            const available_message = "Subspecs are available for this MainSpecs"
            // console.log(available_message)
            return {
                status, available_message
            }
        })
}

export { getAllPriceValue, postPriceValue, patchPriceValue, deletePriceValue }
