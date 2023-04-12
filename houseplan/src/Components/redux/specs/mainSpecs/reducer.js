import {
    REQUEST_FOR_GET_MAINSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_GET_MAINSPECS_SUCCESS,
    REQUEST_FOR_GET_MAINSPECS_ERROR,

    REQUEST_FOR_ADD_MAINSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_MAINSPECS_SUCCESS,
    REQUEST_FOR_ADD_MAINSPECS_ERROR,
    REQUEST_FOR_ADD_MAINSPECS_DUPLICATE,

    REQUEST_FOR_UPDATE_MAINSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_MAINSPECS_SUCCESS,
    REQUEST_FOR_UPDATE_MAINSPECS_ERROR,

    REQUEST_FOR_DELETE_MAINSPECS_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_MAINSPECS_SUCCESS,
    REQUEST_FOR_DELETE_MAINSPECS_ERROR,
    REQUEST_FOR_DELETE_MAINSPECS_AVAILABLE


} from './action'


const initialState = {
    mainSpecs: [],

    // Get
    getMainSpecsInProgress: false,
    getMainSpecsError: false,
    dataIsLoaded: false, // It is used for map fuction for data is loaded or not (Only for map function)

    // Post 
    addMainSpecsProcess: false,
    addMainSpecsError: null,
    addMainSpecsDuplicate: false,

    // Patch
    updateMainSpecsProcess: false,
    updateMainSpecsError: null,

    // Delete
    deleteMainSpecsInProcess: false,
    deleteMainSpecsError: null,

    // deleteMainSpecsAvailable: false,
    // deleteMainSpecsAvailableMessage: null

}
const mainSpecsReducer = (state = initialState, action) => {
    switch (action.type) {

        // GET SECTION

        case REQUEST_FOR_GET_MAINSPECS_IS_IN_PROGRESS: {
            return {
                ...state,
                getMainSpecsInProgress: true,
                mainSpecs: null,
                getMainSpecsError: false,
            };
        }
        case REQUEST_FOR_GET_MAINSPECS_SUCCESS: {
            return {
                ...state,
                getMainSpecsInProgress: false,
                mainSpecs: action.data,
                getMainSpecsError: false,
                dataIsLoaded: true,
            };
        }
        case REQUEST_FOR_GET_MAINSPECS_ERROR: {
            return {
                ...state,
                getMainSpecsInProgress: false,
                mainSpecs: null,
                getMainSpecsError: action.data,

            };
        }



        // POST Section

        case REQUEST_FOR_ADD_MAINSPECS_IS_IN_PROGRESS: {
            return {
                ...state,
                addMainSpecsProcess: true,
                addMainSpecsError: null
            };
        }
        case REQUEST_FOR_ADD_MAINSPECS_SUCCESS: {
            return {
                ...state,
                addMainSpecsProcess: false,
                addMainSpecsError: null,
                mainSpecs: state.mainSpecs.concat(action.data)
            };
        }
        case REQUEST_FOR_ADD_MAINSPECS_ERROR: {
            return {
                ...state,
                addMainSpecsProcess: false,
                addMainSpecsError: action.data,
            };
        }
        case REQUEST_FOR_ADD_MAINSPECS_DUPLICATE: {
            return {
                ...state,
                addMainSpecsProcess: false,
                addMainSpecsError: action.data,
                addMainSpecsDuplicate: true,
            };
        }


        // PATCH (update) Section

        case REQUEST_FOR_UPDATE_MAINSPECS_IS_IN_PROGRESS: {
            return {
                ...state,
                updateMainSpecsProcess: true,
                updateMainSpecsError: null
            };
        }
        case REQUEST_FOR_UPDATE_MAINSPECS_SUCCESS: {
            return {
                ...state,
                updateMainSpecsProcess: false,
                updateMainSpecsError: null,
                mainSpecs: state.mainSpecs.map((update) => {
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
        case REQUEST_FOR_UPDATE_MAINSPECS_ERROR: {
            return {
                ...state,
                updateMainSpecsProcess: false,
                updateMainSpecsError: action.data,
            };
        }

        // Delete section

        case REQUEST_FOR_DELETE_MAINSPECS_IS_IN_PROGRESS: {
            return {
                ...state,
                deleteMainSpecsInProcess: true,
                deleteMainSpecsError: null,
                // deleteMainSpecsAvailableMessage: null,
            };
        }

        case REQUEST_FOR_DELETE_MAINSPECS_SUCCESS: {
            return {
                ...state,
                deleteMainSpecsInProcess: false,
                deleteMainSpecsError: null,
                // deleteMainSpecsAvailableMessage: null,
                mainSpecs: state.mainSpecs.filter((delete_data) => delete_data._id !== action.data._id)
            };
        }

        case REQUEST_FOR_DELETE_MAINSPECS_ERROR: {
            return {
                ...state,
                deleteMainSpecsInProcess: false,
                deleteMainSpecsError: action.data,
                // deleteMainSpecsAvailableMessage: null
            };
        }
        // case REQUEST_FOR_DELETE_MAINSPECS_AVAILABLE: {
        //     console.log(action.available_message)
        //     return {
        //         ...state,
        //         deleteMainSpecsAvailable: true,
        //         deleteMainSpecsAvailableMessage: action.available_message,
        //     };
        // }

        default:
            return state

    }

}

export default mainSpecsReducer