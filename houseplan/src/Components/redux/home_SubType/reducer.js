import {
    //GET
    REQUEST_FOR_GET_SUBTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_GET_SUBTYPE_SUCCESS,
    REQUEST_FOR_GET_SUBTYPE_ERROR,


    // POST
    REQUEST_FOR_ADD_SUBTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_SUBTYPE_SUCCESS,
    REQUEST_FOR_ADD_SUBTYPE_ERROR,
    REQUEST_FOR_UPDATE_SUBTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_SUBTYPE_SUCCESS,
    REQUEST_FOR_UPDATE_SUBTYPE_ERROR,
    REQUEST_FOR_DELETE_SUBTYPE_ERROR,
    REQUEST_FOR_DELETE_SUBTYPE_SUCCESS,
    REQUEST_FOR_DELETE_SUBTYPE_IS_IN_PROGRESS
} from "./action";

const initialState = {
    subTypes: [],

    // GET
    getSubTypeInProgress: false,
    getSubTypeError: false,
    dataIsLoaded: false, // It is used for map fuction for data is loaded or not (Only for map function)

    // POST
    addSubTypeInProcess: false,
    addSubTypeError: null,


    //patch

    updateSubTypeInProcess: false,
    updateSubTypeError: null,

    //delete
    deleteMainTypeInProcess: false,
    deleteMainTypeError: null,

};

const getSubTypeReducer = (state = initialState, action) => {

    switch (action.type) {

        //GET
        case REQUEST_FOR_GET_SUBTYPE_IS_IN_PROGRESS: {
            return {
                ...state,
                getSubTypeInProgress: true,
                getSubTypeError: false,
                dataIsLoaded: false, // It is used for map fuction for data is loaded or not (Only for map function)
            }
        }
        case REQUEST_FOR_GET_SUBTYPE_SUCCESS: {
            return {
                ...state,
                getSubTypeInProgress: false,
                subTypes: action.data,
                getSubTypeError: false,
                dataIsLoaded: true, // It is used for map fuction for data is loaded or not (Only for map function)
            }
        }
        case REQUEST_FOR_GET_SUBTYPE_ERROR: {
            return {
                ...state,
                getSubTypeInProgress: false,
                getSubTypeError: action.data,
            }
        }



        // POST (Add Subtype)

        case REQUEST_FOR_ADD_SUBTYPE_IS_IN_PROGRESS:
            return {
                ...state,
                addSubTypeInProcess: true,
                addSubTypeError: null
            }

        case REQUEST_FOR_ADD_SUBTYPE_SUCCESS:
            return {
                ...state,
                addSubTypeInProcess: false,
                addSubTypeError: null,
                subTypes: state.subTypes.concat(action.data)
            }

        case REQUEST_FOR_ADD_SUBTYPE_ERROR:
            return {
                ...state,
                addSubTypeInProcess: false,
                addSubTypeError: action.data
            }



        // Patch (Update) Section

        case REQUEST_FOR_UPDATE_SUBTYPE_IS_IN_PROGRESS: {
            return {
                ...state,
                updateSubTypeInProcess: true,
                updateSubTypeError: null,
            };
        }
        case REQUEST_FOR_UPDATE_SUBTYPE_SUCCESS: {
            return {
                ...state,
                updateSubTypeInProcess: false,
                updateSubTypeError: null,
                subTypes: state.subTypes.map((update) => {
                    if (update._id === action.data._id) {
                        return {
                            ...update,
                            ...action.data
                        };
                    }
                    else {
                        return update
                    }
                })
            };
        }
        case REQUEST_FOR_UPDATE_SUBTYPE_ERROR: {
            return {
                ...state,
                updateSubTypeInProcess: false,
                updateSubTypeError: action.data,
            };
        }


        // Delete section

        case REQUEST_FOR_DELETE_SUBTYPE_IS_IN_PROGRESS: {
            return {
                ...state,
                deleteMainTypeInProcess: true,
                deleteMainTypeError: null,
            };
        }

        case REQUEST_FOR_DELETE_SUBTYPE_SUCCESS: {
            return {
                ...state,
                deleteMainTypeInProcess: false,
                deleteMainTypeError: null,
                subTypes: state.subTypes.filter((delete_data) => delete_data._id !== action.data._id)
            };
        }

        case REQUEST_FOR_DELETE_SUBTYPE_ERROR: {
            return {
                ...state,
                deleteMainTypeInProcess: false,
                deleteMainTypeError: action.data,
            };
        }


        default:
            return state;
    }
}


export default getSubTypeReducer