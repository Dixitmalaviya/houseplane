import {
    REQUEST_FOR_GET_PRICE_VALUE_IS_IN_PROGRESS,
    REQUEST_FOR_GET_PRICE_VALUE_SUCCESS,
    REQUEST_FOR_GET_PRICE_VALUE_ERROR,

    REQUEST_FOR_ADD_PRICE_VALUE_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_PRICE_VALUE_SUCCESS,
    REQUEST_FOR_ADD_PRICE_VALUE_ERROR,


    REQUEST_FOR_UPDATE_PRICE_VALUE_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_PRICE_VALUE_SUCCESS,
    REQUEST_FOR_UPDATE_PRICE_VALUE_ERROR,


    REQUEST_FOR_DELETE_PRICE_VALUE_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_PRICE_VALUE_SUCCESS,
    REQUEST_FOR_DELETE_PRICE_VALUE_ERROR,

} from '../home_PriceValue/action'

const initialState = {

    priceValue: [],

    // Get
    getPriceValueInProgress: false,
    getPriceValueError: false,
    dataIsLoaded: false, // It is used for map fuction for data is loaded or not (Only for map function)

    // Post 
    addPriceValueInProcess: false,
    addPriceValueError: null,

    // Patch
    updatePriceValuerocess: false,
    updatePriceValueError: null,

    // Delete
    deletePriceValueInProcess: false,
    deletePriceValueError: null,

};

const PriceValueReducer = (state = initialState, action) => {
    switch (action.type) {

        // Get Section 

        case REQUEST_FOR_GET_PRICE_VALUE_IS_IN_PROGRESS: {
            return {
                ...state,
                getPriceValueInProgress: true,
                priceValue: null,
                getPriceValueError: false,
            };
        }
        case REQUEST_FOR_GET_PRICE_VALUE_SUCCESS: {
            return {
                ...state,
                getPriceValueInProgress: false,
                priceValue: action.data,
                getPriceValueError: false,
                dataIsLoaded: true,
            };
        }
        case REQUEST_FOR_GET_PRICE_VALUE_ERROR: {
            return {
                ...state,
                getPriceValueInProgress: false,
                priceValue: null,
                getPriceValueError: action.data,

            };
        }


        // POST Section

        case REQUEST_FOR_ADD_PRICE_VALUE_IS_IN_PROGRESS: {
            return {
                ...state,
                addPriceValueInProcess: true,
                addPriceValueError: null,
            };
        }
        case REQUEST_FOR_ADD_PRICE_VALUE_SUCCESS: {
            return {
                ...state,
                addPriceValueInProcess: false,
                addPriceValueError: null,
                priceValue: state.priceValue.concat(action.data)
            };
        }
        case REQUEST_FOR_ADD_PRICE_VALUE_ERROR: {
            return {
                ...state,
                addPriceValueInProcess: false,
                addPriceValueError: action.data,
            };
        }




        // PATCH (update) Section

        case REQUEST_FOR_UPDATE_PRICE_VALUE_IS_IN_PROGRESS: {
            return {
                ...state,
                updatePriceValueProcess: true,
                updatePriceValueError: null
            };
        }
        case REQUEST_FOR_UPDATE_PRICE_VALUE_SUCCESS: {
            return {
                ...state,
                updatePriceValueProcess: false,
                updatePriceValueError: null,
                priceValue: state.priceValue.map((update) => {
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
        case REQUEST_FOR_UPDATE_PRICE_VALUE_ERROR: {
            return {
                ...state,
                updatePriceValueProcess: false,
                updatePriceValueError: action.data,
            };
        }


        // Delete section

        case REQUEST_FOR_DELETE_PRICE_VALUE_IS_IN_PROGRESS: {
            return {
                ...state,
                deletePriceValueInProcess: true,
                deletePriceValueError: null,
                // deleteMainSpecsAvailableMessage: null,
            };
        }

        case REQUEST_FOR_DELETE_PRICE_VALUE_SUCCESS: {
            return {
                ...state,
                deletePriceValueInProcess: false,
                deletePriceValueError: null,
                priceValue: state.priceValue.filter((delete_data) => delete_data._id !== action.data._id)
            };
        }

        case REQUEST_FOR_DELETE_PRICE_VALUE_ERROR: {
            return {
                ...state,
                deletePriceValueInProcess: false,
                deletePriceValueError: action.data,

            };
        }

        default:
            return state;
    }
};

export default PriceValueReducer;
