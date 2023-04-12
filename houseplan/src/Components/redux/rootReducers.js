import { combineReducers } from "redux";
import getMainTypeReducer from "./home_MainType/reducer";
import getSubTypeReducer from "./home_SubType/reducer";
import mainSpecsReducer from "./specs/mainSpecs/reducer";
import subSpecsReducer from "./specs/subSpecs/reducer";
import PriceTitleReducer from "./home_PriceTitle/reducer"
import PriceValueReducer from "./home_PriceValue/reducer"
import PlanDataReducer from "./home_plan/reducer"
import CustomerLogin from "./Login/customerLogin/reducer";


const rootReducer = combineReducers({
    getMainTypeReducer,
    getSubTypeReducer,
    mainSpecsReducer,
    subSpecsReducer,
    PriceTitleReducer,
    PriceValueReducer,
    PlanDataReducer,
    CustomerLogin
})

export default rootReducer