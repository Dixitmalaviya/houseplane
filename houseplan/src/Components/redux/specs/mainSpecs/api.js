import axios from 'axios'
import {
    base_url,
    ADMIN_GET_ALL_MAINSPECS,
    ADMIN_POST_MAINSPECS,
    ADMIN_PATCH_MAINSPECS,
    ADMIN_DELETE_MAINSPECS
} from '../../../../constant'

// Section - Method - PAGE - Type    -------------- for this page API heading Comment

// ADMIN - GET - SPECS & FEATURES - MAINSPECS 
async function getAllMainSpecs() {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + ADMIN_GET_ALL_MAINSPECS, {}, header)
        .then((res) => {
            const status = res.status
            const data = res.data
            return {
                status, data
            }
        }).catch((err) => {

        })
}


// ADMIN - POST - SPECS & FEATURES - MAINSPECS 

async function postMainSpecs(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + ADMIN_POST_MAINSPECS, data, header)
        .then((res) => {
            const status = res.status
            const data = res.data
            return {
                status, data
            }
        }).catch((err) => {
            const status = err.response.status
            return {
                status
            }
        })
}



// ADMIN - PATCH - SPECS & FEATURES - MAINSPECS 

async function patchMainSpecs(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + ADMIN_PATCH_MAINSPECS, data, header)
        .then((res) => {
            const status = res.status
            const update_data = data
            return {
                status, update_data
            }
        }).catch((err) => {

        })
}

// ADMIN - DELETE - SPECS & FEATURES  - MainSpecs 
async function deleteMainSpecs(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    return axios.delete(base_url + ADMIN_DELETE_MAINSPECS, { data }, header)
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

export { getAllMainSpecs, postMainSpecs, patchMainSpecs, deleteMainSpecs }