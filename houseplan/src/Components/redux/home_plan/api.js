import axios from 'axios'
import {
    base_url,
    ADMIN_GET_ALL_PLAN,
    ADMIN_POST_PLAN,
    ADMIN_PATCH_PLAN,
    ADMIN_DELETE_PLAN

} from '../../../constant'

// ADMIN_GET_ALL_PLAN
async function getAllPlan() {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return axios.get(base_url + ADMIN_GET_ALL_PLAN, {}, header)
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


// ADMIN_POST_HOME_Plan
async function postPlan(data) {
    const header = {
        'Content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }

    return axios.post(base_url + ADMIN_POST_PLAN, data, header)
        .then((res) => {
            console.log(res, "this is response")
            const status = res.status
            const data = res.data
            console.log(data, "this is data from api side")
            return {
                status, data
            }
        })
}


// ADMIN - DELETE - PLAN
async function deletePlan(data) {
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    // console.log(data, "THis is data from api side")

    return axios.delete(base_url + ADMIN_DELETE_PLAN, { data }, header)
        .then((res) => {
            const status = res.status
            const delete_data = res.data.message
            console.log(delete_data, "This is res code ")
            return {
                status, delete_data
            }
        })

}
export { getAllPlan, postPlan, deletePlan }