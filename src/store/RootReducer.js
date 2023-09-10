import {combineReducers} from "redux";
import userReducer from "./user/UserReducer";
import adminReducer from "./admin/AdminReducer";
import paginationReducer from "./pagination/PaginationReducer";

export const rootReducer = combineReducers({
    adminData: adminReducer,
    userData: userReducer,
    paginationData: paginationReducer,
});