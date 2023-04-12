import {
    REQUEST_FOR_GET_SUBSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_GET_SUBSPECS_SUCCESS,
    REQUEST_FOR_GET_SUBSPECS_ERROR,

    REQUEST_FOR_ADD_SUBSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_SUBSPECS_SUCCESS,
    REQUEST_FOR_ADD_SUBSPECS_ERROR,
    REQUEST_FOR_ADD_SUBSPECS_DUPLICATE,

    REQUEST_FOR_UPDATE_SUBSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_SUBSPECS_SUCCESS,
    REQUEST_FOR_UPDATE_SUBSPECS_ERROR,

    REQUEST_FOR_DELETE_SUBSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_SUBSPECS_SUCCESS,
    REQUEST_FOR_DELETE_SUBSPECS_ERROR,
    REQUEST_FOR_DELETE_SUBSPECS_AVAILABLE


} from './action'

const initialState = {
    subSpecs: [],

    // Get
    getSubSpecsInProgress: false,
    getSubSpecsError: false,
    dataIsLoaded: false, // It is used for map fuction for data is loaded or not (Only for map function)

    // Post 
    addSubSpecsProcess: false,
    addSubSpecsError: null,
    addSubSpecsDuplicate: false,

    // Patch
    updateSubSpecsProcess: false,
    updateSubSpecsError: null,

    // Delete
    deleteSubSpecsInProcess: false,
    deleteSubSpecsError: null,

    // deleteSubSpecsAvailable: false,
    // deleteSubSpecsAvailableMessage: null

}

const subSpecsReducer = (state = initialState, action) => {
    switch (action.type) {

        // GET SECTION

        case REQUEST_FOR_GET_SUBSPECS_IS_IN_PROGRESS: {
            return {
                ...state,
                getSubSpecsInProgress: true,
                subSpecs: null,
                getSubSpecsError: false,
            };
        }
        case REQUEST_FOR_GET_SUBSPECS_SUCCESS: {
            return {
                ...state,
                getSubSpecsInProgress: false,
                subSpecs: action.data,
                getSubSpecsError: false,
                dataIsLoaded: true,
            };
        }
        case REQUEST_FOR_GET_SUBSPECS_ERROR: {
            return {
                ...state,
                getSubSpecsInProgress: false,
                subSpecs: null,
                getSubSpecsError: action.data,

            };
        }

        // POST Section


        case REQUEST_FOR_ADD_SUBSPECS_IS_IN_PROGRESS: {
            return {
                ...state,
                addSubSpecsProcess: true,
                addSubSpecsError: null,
            };
        }
        case REQUEST_FOR_ADD_SUBSPECS_SUCCESS: {
            return {
                ...state,
                addSubSpecsProcess: false,
                addSubSpecsError: null,
                subSpecs: state.subSpecs.concat(action.data)
            };
        }
        case REQUEST_FOR_ADD_SUBSPECS_ERROR: {
            return {
                ...state,
                addSubSpecsProcess: false,
                addSubSpecsError: action.data,
            };
        }
        case REQUEST_FOR_ADD_SUBSPECS_DUPLICATE: {
            return {
                ...state,
                addSubSpecsProcess: false,
                addSubSpecsError: action.data,
                addSubSpecsDuplicate: true,
            };
        }


        // PATCH (update) Section

        case REQUEST_FOR_UPDATE_SUBSPECS_IS_IN_PROGRESS: {
            return {
                ...state,
                updateSubSpecsProcess: true,
                updateSubSpecsError: null
            };
        }
        case REQUEST_FOR_UPDATE_SUBSPECS_SUCCESS: {
            return {
                ...state,
                updateSubSpecsProcess: false,
                updateSubSpecsError: null,
                subSpecs: state.subSpecs.map((update) => {
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
        case REQUEST_FOR_UPDATE_SUBSPECS_ERROR: {
            return {
                ...state,
                updateSubSpecsProcess: false,
                updateSubSpecsError: action.data,
            };
        }


        // Delete section

        case REQUEST_FOR_DELETE_SUBSPECS_IS_IN_PROGRESS: {
            return {
                ...state,
                deleteSubSpecsInProcess: true,
                deleteSubSpecsError: null,
                // deleteMainSpecsAvailableMessage: null,
            };
        }

        case REQUEST_FOR_DELETE_SUBSPECS_SUCCESS: {
            return {
                ...state,
                deleteSubSpecsInProcess: false,
                deleteSubSpecsError: null,
                // deleteSubSpecsAvailableMessage: null,
                subSpecs: state.subSpecs.filter((delete_data) => delete_data._id !== action.data._id)
            };
        }

        case REQUEST_FOR_DELETE_SUBSPECS_ERROR: {
            return {
                ...state,
                deleteSubSpecsInProcess: false,
                deleteSubSpecsError: action.data,
                // deleteSubSpecsAvailableMessage: null
            };
        }

        default:
            return state
    }
}
export default subSpecsReducer