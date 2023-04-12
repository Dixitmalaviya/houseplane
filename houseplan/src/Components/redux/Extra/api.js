
// export async function AxiosReq(url, method, headers, params) {

//     return params ? axios({
//         url: url,
//         method: method,
//         headers: headers,
//         data: params
//     })
//         : axios({
//             url: url,
//             method: method,
//             headers: headers,
//             data: {}
//         })

// }

// // ADMIN - GET - MainType Data
// const getApiDetails = () => {
//     const headers = {
//         'Content-type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     }
//     return AxiosReq(base_url + '/mainType/getAllMainTypes', 'GET', headers, {})
// }

// // ADMIN - POST - MainType Data
// const postApiDetails = (data) => {
//     const headers = {
//         'Content-type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     }
//     return AxiosReq(base_url + '/mainType/addMianTypes', 'POST', headers, data)
// }

// // ADMIN - EDIT - MainType Data
// const patchApiDetails = (data) => {
//     const headers = {
//         'Content-type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     }
//     return AxiosReq(base_url + '/mainType/updateMainTypes', 'PATCH', headers, data)
// }

// export { getApiDetails, postApiDetails, patchApiDetails }