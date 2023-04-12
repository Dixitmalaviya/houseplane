import {
    REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_GET_MAINTYPE_SUCCESS,
    REQUEST_FOR_GET_MAINTYPE_ERROR,

    REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_MAINTYPE_SUCCESS,
    REQUEST_FOR_ADD_MAINTYPE_ERROR,

    REQUEST_FOR_UPDATE_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_MAINTYPE_SUCCESS,
    REQUEST_FOR_UPDATE_MAINTYPE_ERROR,

    REQUEST_FOR_DELETE_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_MAINTYPE_SUCCESS,
    REQUEST_FOR_DELETE_MAINTYPE_ERROR,
} from '../home_MainType/action'



const initialState = {

    mainTypes: [],

    // Get
    getMainTypeInProgress: false,
    getMainTypeError: false,
    dataIsLoaded: false, // It is used for map fuction for data is loaded or not (Only for map function)

    // Post 
    addMainTypeInProcess: false,
    addMainTypeError: null,

    // Patch (Update)
    updateMainTypeInProcess: false,
    updateMainTypeError: null,

    // Delete
    deleteMainTypeInProcess: false,
    deleteMainTypeError: null,


};

const getMainTypeReducer = (state = initialState, action) => {
    switch (action.type) {

        // Get Section 

        case REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS: {
            return {
                ...state,
                getMainTypeInProgress: true,
                mainTypes: null,
                getMainTypeError: false,
            };
        }
        case REQUEST_FOR_GET_MAINTYPE_SUCCESS: {
            return {
                ...state,
                getMainTypeInProgress: false,
                mainTypes: action.data,
                getMainTypeError: false,
                dataIsLoaded: true,
            };
        }
        case REQUEST_FOR_GET_MAINTYPE_ERROR: {
            return {
                ...state,
                getMainTypeInProgress: false,
                mainTypes: null,
                getMainTypeError: action.data,

            };
        }


        // POST Section


        case REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS: {
            return {
                ...state,
                addMainTypeInProcess: true,
                addMainTypeError: null,
            };
        }
        case REQUEST_FOR_ADD_MAINTYPE_SUCCESS: {
            return {
                ...state,
                addMainTypeInProcess: false,
                addMainTypeError: null,
                mainTypes: state.mainTypes.concat(action.data)
            };
        }
        case REQUEST_FOR_ADD_MAINTYPE_ERROR: {
            return {
                ...state,
                addMainTypeInProcess: false,
                addMainTypeError: action.data,
            };
        }

        // Patch (Update) Section

        case REQUEST_FOR_UPDATE_MAINTYPE_IS_IN_PROGRESS: {
            return {
                ...state,
                updateMainTypeInProcess: true,
                updateMainTypeError: null,
            };
        }
        case REQUEST_FOR_UPDATE_MAINTYPE_SUCCESS: {
            return {
                ...state,
                updateMainTypeInProcess: false,
                updateMainTypeError: null,
                mainTypes: state.mainTypes.map((update) => {
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
        case REQUEST_FOR_UPDATE_MAINTYPE_ERROR: {
            return {
                ...state,
                updateMainTypeInProcess: false,
                updateMainTypeError: action.data,
            };
        }

        // Delete section

        case REQUEST_FOR_DELETE_MAINTYPE_IS_IN_PROGRESS: {
            return {
                ...state,
                deleteMainTypeInProcess: true,
                deleteMainTypeError: null,
            };
        }

        case REQUEST_FOR_DELETE_MAINTYPE_SUCCESS: {
            return {
                ...state,
                deleteMainTypeInProcess: false,
                deleteMainTypeError: null,
                mainTypes: state.mainTypes.filter((delete_data) => delete_data._id !== action.data._id)
            };
        }

        case REQUEST_FOR_DELETE_MAINTYPE_ERROR: {
            return {
                ...state,
                deleteMainTypeInProcess: false,
                deleteMainTypeError: action.data,
            };
        }


        default:
            return state;
    }
};

export default getMainTypeReducer;