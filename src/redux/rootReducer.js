import { combineReducers } from "redux";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
    bookingReducer:bookingReducer,
});

export default rootReducer;
