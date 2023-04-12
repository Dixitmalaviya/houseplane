
import axios from "axios";
import { CUSTOMER_LOGIN_DETAILS, base_url } from "../../../../constant";


export async function customer_post_login(data) {
    //console.log(data)
    const header = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
    return axios.get(base_url + CUSTOMER_LOGIN_DETAILS, header)
        .then((res) => {
            // console.log(res)
            const data = res.data.result
            const status = res.status
            if (status == 200) {
                // window.location = "/"
                return {
                    data, status
                }
            }
        }).catch((err) => {
            //console.log(err)
            if (err.response.status === 301) {
                const data = "Auth Failed!"
                const status = err.response.status
                return {
                    data, status
                }
            }
        })
}