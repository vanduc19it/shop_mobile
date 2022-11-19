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
        const userInfoFromAsyncStorage = await AsyncStorage.getItem("userInfo")
        ? JSON.parse(AsyncStorage.getItem("userInfo"))
        : null;

        const shopInfoFromAsyncStorage = await AsyncStorage.getItem("shopInfo")
        ? JSON.parse(AsyncStorage.getItem("shopInfo"))
        : null;

        const  cartItemsFromAsyncStorage = await AsyncStorage.getItem("cartItems")
        ? JSON.parse(AsyncStorage.getItem("cartItems"))
        : []

        // console.log(cartItemsFromAsyncStorage)

        //giao hang info
        const  shippingInfoFromAsyncStorage = await AsyncStorage.getItem("shippingInfo")
        ? JSON.parse(AsyncStorage.getItem("shippingInfo"))
        : {}
    } catch(e) {
      // error reading value
      console.log(e);
    }
  }
  


const initialState = {
    userLogin: {
        userInfo:getData.userInfoFromAsyncStorage,
        
    },
    cart: {
        cartItems: getData.cartItemsFromAsyncStorage, 
        shippingInfo: getData.shippingInfoFromAsyncStorage
    },
    shopDetail: {
        shopInfo:getData.shopInfoFromAsyncStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store