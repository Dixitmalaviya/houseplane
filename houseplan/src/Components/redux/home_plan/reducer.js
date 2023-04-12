import {
    REQUEST_FOR_GET_PLAN_IS_IN_PROGRESS,
    REQUEST_FOR_GET_PLAN_SUCCESS,
    REQUEST_FOR_GET_PLAN_ERROR,

    REQUEST_FOR_ADD_PLAN_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_PLAN_SUCCESS,
    REQUEST_FOR_ADD_PLAN_ERROR,


    REQUEST_FOR_UPDATE_PLAN_IS_IN_PROGRESS,
    REQUEST_FOR_UPDATE_PLAN_SUCCESS,
    REQUEST_FOR_UPDATE_PLAN_ERROR,


    REQUEST_FOR_DELETE_PLAN_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_PLAN_SUCCESS,
    REQUEST_FOR_DELETE_PLAN_ERROR,

} from '../home_plan/action'

const initialState = {

    planData: [],

    // Get
    getPlanDataInProgress: false,
    getPlanDataError: false,
    dataIsLoaded: false, // It is used for map fuction for data is loaded or not (Only for map function)

    // Post 
    addPlanDataInProcess: false,
    addPlanDataError: null,

    // Patch
    updatePlanDataProcess: false,
    updatePlanDataError: null,

    // Delete
    deletePlanDataInProcess: false,
    deletePlanDataError: null,

};

const PlanDataReducer = (state = initialState, action) => {
    switch (action.type) {

        // Get Section 

        case REQUEST_FOR_GET_PLAN_IS_IN_PROGRESS: {
            return {
                ...state,
                getPlanDataInProgress: true,
                planData: null,
                getPlanDataError: false,
            };
        }
        case REQUEST_FOR_GET_PLAN_SUCCESS: {
            return {
                ...state,
                getPlanDataInProgress: false,
                planData: action.data,
                getPlanDataError: false,
                dataIsLoaded: true,
            };
        }
        case REQUEST_FOR_GET_PLAN_ERROR: {
            return {
                ...state,
                getPlanDataInProgress: false,
                planData: null,
                getPlanDataError: action.data,

            };
        }


        // POST Section

        case REQUEST_FOR_ADD_PLAN_IS_IN_PROGRESS: {
            return {
                ...state,
                addPlanDataInProcess: true,
                addPlanDataError: null,
            };
        }
        case REQUEST_FOR_ADD_PLAN_SUCCESS: {
            return {
                ...state,
                addPlanDataInProcess: false,
                addPlanDataError: null,
                planData: state.planData.concat(action.data)
            };
        }
        case REQUEST_FOR_ADD_PLAN_ERROR: {
            return {
                ...state,
                addPlanDataInProcess: false,
                addPlanDataError: action.data,
            };
        }




        // PATCH (update) Section

        case REQUEST_FOR_UPDATE_PLAN_IS_IN_PROGRESS: {
            return {
                ...state,
                updatePlanDataProcess: true,
                updatePlanDataError: null
            };
        }
        case REQUEST_FOR_UPDATE_PLAN_SUCCESS: {
            return {
                ...state,
                updatePlanDataProcess: false,
                updatePlanDataError: null,
                planData: state.planData.map((update) => {
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
        case REQUEST_FOR_UPDATE_PLAN_ERROR: {
            return {
                ...state,
                updatePlanDataProcess: false,
                updatePlanDataError: action.data,
            };
        }


        // Delete section

        case REQUEST_FOR_DELETE_PLAN_IS_IN_PROGRESS: {
            return {
                ...state,
                deletePlanDataInProcess: true,
                deletePlanDataError: null,

            };
        }

        case REQUEST_FOR_DELETE_PLAN_SUCCESS: {
            return {
                ...state,
                deletePlanDataInProcess: false,
                deletePlanDataError: null,
                planData: state.planData.filter((delete_data) => delete_data._id !== action.data._id)
            };
        }

        case REQUEST_FOR_DELETE_PLAN_ERROR: {
            return {
                ...state,
                deletePlanDataInProcess: false,
                deletePlanDataError: action.data,

            };
        }

        default:
            return state;
    }
};

export default PlanDataReducer;