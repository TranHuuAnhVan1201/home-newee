import { combineReducers } from 'redux';
import IDName from "./custommer/products/Id";
import Products from "./custommer/products/Product";
import GetCarts from "./custommer/products/GetCarts";
import GetProduct from "./custommer/products/GetProduct";
import isDisplayForm from "./custommer/isDisplayForm/isDisplayForm";
import LoadProduct from "./custommer/products/LoadProduct";
import Shop from "./custommer/products/Shop";
import Register from "./custommer/products/Register";


const appReducer = combineReducers({
    IDName,
    Products,
    GetCarts,
    GetProduct,
    isDisplayForm,
    LoadProduct,
    Shop,
    Register

   
});
export default appReducer;