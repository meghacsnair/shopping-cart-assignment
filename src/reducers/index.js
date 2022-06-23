import { combineReducers } from "redux";
//import { cartReducer } from "../../../../../shopping-cart-assignment-develop/shopping-cart-assignment-develop/src/reducers/addtocartReducer";
import CarouselReducer from "./CarouselReducer";
import CartReducer from "./CartReducer";
import CategoryReducer from "./CategoryReducer";
import ProductReducer from "./ProductReducer";
// import categoryReducer from "./categoryReducer";
// import { productsReducer } from "./productsReducer";
// import { cartReducer } from "../reducers/addtocartReducer";
// import { userauthReducer } from "./userauthReducer";

export const rootReducer = combineReducers({ carousel:CarouselReducer,category:CategoryReducer,products:ProductReducer,cartItems:CartReducer })

