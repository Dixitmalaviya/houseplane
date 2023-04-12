// import { getApiDetails, postApiDetails, patchApiDetails } from '../api'
// import { Admin_get_MainType_Action, Admin_post_MainType_Action, Admin_edit_MainType_Action } from '../type'

// // For GEt ADMIN MainType
// const Admin_get_Maintype = () => {
//     return function (dispatch) {
//         return getApiDetails().then((result) => {
//             // console.log(result.data.message)
//             dispatch({
//                 type: Admin_get_MainType_Action,
//                 payload: result.data.message,
//                 dataIsLoaded: true
//             })
//         })
//     }
// }
// // For Add ADMIN MAinType
// const Admin_post_Maintype = (request) => {
//     return function (dispatch) {
//         return postApiDetails(request).then((result) => {
//             // console.log(result.data)
//             dispatch({
//                 type: Admin_post_MainType_Action,
//                 payload: result.data.result,
//             })
//         })
//     }
// }

// // For Update ADMIN mainType
// const Admin_patch_Maintype = (request) => {
//     return function (dispatch) {
//         return patchApiDetails(request).then((result) => {
//             // console.log(request)
//             dispatch({
//                 type: Admin_edit_MainType_Action,
//                 payload: request,
//             })
//         })
//     }
// }

// export { Admin_get_Maintype, Admin_post_Maintype, Admin_patch_Maintype }











// return {
//     type: 'GET_DETAIL',
//     payload: result.data
// }




// return function (dispatch) {
//     return axios.get(base_url + '/mainType/getAllMainTypes', {
//         headers: {
//             'Content-type': 'application/json',
//             'Access-Control-Allow-Origin': '*'
//         }
//     }).then((result) => {
//         dispatch({
//             type: 'GET_DETAIL',
//             payload: result.data
//         })

//     })
// }
