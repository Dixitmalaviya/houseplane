import axios from 'axios'
import {
    base_url,
    ADMIN_GET_ALL_SUBSPECS,
    ADMIN_POST_SUBSPECS,
    ADMIN_PATCH_SUBSPECS,
    ADMIN_DELETE_SUBSPECS
} from '../../../../constant'


// Section - Method - PAGE - Type    -------------- for this page API heading Comment

// ADMIN - GET - SPECS & FEATURES - SUBSPECS 
async function getAllSubSpecs() {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + ADMIN_GET_ALL_SUBSPECS, {}, header)
        .then((res) => {
            const status = res.status
            const data = res.data
            return {
                status, data
            }
        }).catch((err) => {

        })
}


// ADMIN - POST - SPECS & FEATURES - SUBSPECS 
async function postSubSpecs(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.post(base_url + ADMIN_POST_SUBSPECS, data, header)
        .then((res) => {
            const status = res.status
            const data = res.data
            return {
                status, data
            }
        }).catch((err) => {
            const status = err.response.status
            const data = "SubSpec is already Available!"
            return {
                status, data
            }
        })
}




// ADMIN - PATCH - SPECS & FEATURES - SUBSPECS 

async function patchSubSpecs(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.patch(base_url + ADMIN_PATCH_SUBSPECS, data, header)
        .then((res) => {
            const status = res.status
            const update_data = data
            return {
                status, update_data
            }
        }).catch((err) => {

        })
}



// ADMIN - DELETE - SPECS & FEATURES  - SubSpecs 
async function deleteSubSpecs(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    return axios.delete(base_url + ADMIN_DELETE_SUBSPECS, { data }, header)
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

export { getAllSubSpecs, postSubSpecs, patchSubSpecs, deleteSubSpecs }