import {
    REQUEST_FOR_GET_PRICE_TITLE_IS_IN_PROGRESS,
    REQUEST_FOR_GET_PRICE_TITLE_SUCCESS,
    REQUEST_FOR_GET_PRICE_TITLE_ERROR,

    REQUEST_FOR_ADD_PRICE_TITLE_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_PRICE_TITLE_SUCCESS,
    REQUEST_FOR_ADD_PRICE_TITLE_ERROR,


    REQUEST_FOR_UPDATE_PRICE_TITLE_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_PRICE_TITLE_SUCCESS,
    REQUEST_FOR_UPDATE_PRICE_TITLE_ERROR,


    REQUEST_FOR_DELETE_PRICE_TITLE_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_PRICE_TITLE_SUCCESS,
    REQUEST_FOR_DELETE_PRICE_TITLE_ERROR,

} from '../home_PriceTitle/action'

const initialState = {

    priceTitle: [],

    // Get
    getPriceTitleInProgress: false,
    getPriceTitleError: false,
    dataIsLoaded: false, // It is used for map fuction for data is loaded or not (Only for map function)

    // Post 
    addPriceTitleInProcess: false,
    addPriceTitleError: null,

    // Patch
    updatePriceTitleProcess: false,
    updatePriceTitleError: null,

    // Delete
    deletePriceTitleInProcess: false,
    deletePriceTitleError: null,

};

const PriceTitleReducer = (state = initialState, action) => {
    switch (action.type) {

        // Get Section 

        case REQUEST_FOR_GET_PRICE_TITLE_IS_IN_PROGRESS: {
            return {
                ...state,
                getPriceTitleInProgress: true,
                priceTitle: null,
                getPriceTitleError: false,
            };
        }
        case REQUEST_FOR_GET_PRICE_TITLE_SUCCESS: {
            return {
                ...state,
                getPriceTitleInProgress: false,
                priceTitle: action.data,
                getPriceTitleError: false,
                dataIsLoaded: true,
            };
        }
        case REQUEST_FOR_GET_PRICE_TITLE_ERROR: {
            return {
                ...state,
                getPriceTitleInProgress: false,
                priceTitle: null,
                getPriceTitleError: action.data,

            };
        }


        // POST Section

        case REQUEST_FOR_ADD_PRICE_TITLE_IS_IN_PROGRESS: {
            return {
                ...state,
                addPriceTitleInProcess: true,
                addPriceTitleError: null,
            };
        }
        case REQUEST_FOR_ADD_PRICE_TITLE_SUCCESS: {
            return {
                ...state,
                addPriceTitleInProcess: false,
                addPriceTitleError: null,
                priceTitle: state.priceTitle.concat(action.data)
            };
        }
        case REQUEST_FOR_ADD_PRICE_TITLE_ERROR: {
            return {
                ...state,
                addPriceTitleInProcess: false,
                addPriceTitleError: action.data,
            };
        }




        // PATCH (update) Section

        case REQUEST_FOR_UPDATE_PRICE_TITLE_IS_IN_PROGRESS: {
            return {
                ...state,
                updatePriceTitleProcess: true,
                updatePriceTitleError: null
            };
        }
        case REQUEST_FOR_UPDATE_PRICE_TITLE_SUCCESS: {
            return {
                ...state,
                updatePriceTitleProcess: false,
                updatePriceTitleError: null,
                priceTitle: state.priceTitle.map((update) => {
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
        case REQUEST_FOR_UPDATE_PRICE_TITLE_ERROR: {
            return {
                ...state,
                updatePriceTitleProcess: false,
                updatePriceTitleError: action.data,
            };
        }


        // Delete section

        case REQUEST_FOR_DELETE_PRICE_TITLE_IS_IN_PROGRESS: {
            return {
                ...state,
                deletePriceTitleInProcess: true,
                deletePriceTitleError: null,
                // deleteMainSpecsAvailableMessage: null,
            };
        }

        case REQUEST_FOR_DELETE_PRICE_TITLE_SUCCESS: {
            return {
                ...state,
                deletePriceTitleInProcess: false,
                deletePriceTitleError: null,
                priceTitle: state.priceTitle.filter((delete_data) => delete_data._id !== action.data._id)
            };
        }

        case REQUEST_FOR_DELETE_PRICE_TITLE_ERROR: {
            return {
                ...state,
                deletePriceTitleInProcess: false,
                deletePriceTitleError: action.data,

            };
        }

        default:
            return state;
    }
};

export default PriceTitleReducer;
