// import { Admin_get_MainType_Action, Admin_post_MainType_Action, Admin_edit_MainType_Action } from "../type"

// const initialState = {
//     ApiData: [],
//     dataIsLoaded: false,
//     // isResponse: false
// }

// const Reducer = (state = initialState, action) => {
//     switch (action.type) {

//         // Get Admin MAinType Details
//         case Admin_get_MainType_Action:
//             return {
//                 ...state,
//                 ApiData: action.payload,
//                 dataIsLoaded: action.dataIsLoaded
//             }

//         // Add MainType
//         case Admin_post_MainType_Action:
//             return {
//                 ...state,
//                 ApiData: state.ApiData.concat(action.payload)
//             }

//         // Update MainType
//         case Admin_edit_MainType_Action:
//             return {
//                 ...state,
//                 ApiData: state.ApiData.map((update) => {
//                     if (update._id === action.payload._id) {
//                         return {
//                             ...update,
//                             ...action.payload
//                         };
//                     }
//                     else {
//                         return update
//                     }
//                 })
//             }

//         // Retrun default State
//         default:
//             return state
//     }
// }

// export default Reducer