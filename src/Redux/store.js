import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
// import { composeWithDevTools } from "remote-redux-devtools";
import { composeWithDevTools } from "redux-devtools-extension";
import { productCreateFeedbackReducer, productDetailReducer, productGetFeedbackReducer, productListReducer, productSearchReducer } from "./Reducers/ProductReducers";
import { checkPassReducer, userDetailReducer, userLoginReducer, userRegisterReducer, userUpdateImageReducer, userUpdateProfileReducer } from "./Reducers/userReducers";
import { cartReducer } from "./Reducers/CartReducers";
import { orderCreateReducer, orderDetailReducer, orderSingleReducer } from "./Reducers/orderReducers";
import { createShopReducer, shopDetailReducer } from "./Reducers/shopReducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
const reducer = combineReducers({
    productList: productListReducer,
    productSearch: productSearchReducer,
    productDetail: productDetailReducer,
    productCreateFeedback: productCreateFeedbackReducer,
    productGetFeedback: productGetFeedbackReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailReducer,
    userUpdateImage: userUpdateImageReducer,
    userUpdateProfile: userUpdateProfileReducer,
    checkPass: checkPassReducer,
    orderCreate: orderCreateReducer,
    orderDetail: orderDetailReducer,
    orderSingle: orderSingleReducer,
    createShop: createShopReducer,
    shopDetail: shopDetailReducer,
})

const getData = async () => {
    try {
        const userInfoFromLocalStorage = await AsyncStorage.getItem("userInfo")
        ? JSON.parse(AsyncStorage.getItem("userInfo"))
        : null;

        const shopInfoFromLocalStorage = AsyncStorage.getItem("shopInfo")
        ? JSON.parse(AsyncStorage.getItem("shopInfo"))
        : null;

        const  cartItemsFromAsyncStorage = AsyncStorage.getItem("cartItems")
        ? JSON.parse(AsyncStorage.getItem("cartItems"))
        : []

        //giao hang info
        const  shippingInfoFromAsyncStorage = AsyncStorage.getItem("shippingInfo")
        ? JSON.parse(AsyncStorage.getItem("shippingInfo"))
        : {}
    } catch(e) {
      // error reading value
    }
  }


const initialState = {
    userLogin: {
        userInfo:getData.userInfoFromLocalStorage,
        
    },
    cart: {
        cartItems: getData.cartItemsFromLocalStorage,
        shippingInfo: getData.shippingInfoFromLocalStorage
    },
    shopDetail: {
        shopInfo:getData.shopInfoFromLocalStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store