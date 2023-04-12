import axios from 'axios'
import {
    base_url,
    ADMIN_GET_ALL_PRICE_TITLE,
    ADMIN_PATCH_ALL_PRICE_TITLE,
    ADMIN_POST_PRICE_TITLE,
    ADMIN_PATCH_PRICE_TITLE,
    ADMIN_DELETE_PRICE_TITLE

} from '../../../constant'


// ADMIN_GET_HOME_PRICE_TITLE
async function getAllPriceTitle() {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + ADMIN_GET_ALL_PRICE_TITLE, {}, header)
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

// ADMIN_POST_HOME_PRICE_TITLE
async function postPriceTitle(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + ADMIN_POST_PRICE_TITLE, data, header)
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

// ADMIN_PATCH_HOME_PRICE_TITLE (Update)
async function patchPriceTitle(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + ADMIN_PATCH_PRICE_TITLE, data, header)
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


// ADMIN - DELETE - PRICE - TITLE
async function deletePriceTitle(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    return axios.delete(base_url + ADMIN_DELETE_PRICE_TITLE, { data }, header)
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

export { getAllPriceTitle, postPriceTitle, patchPriceTitle, deletePriceTitle }
