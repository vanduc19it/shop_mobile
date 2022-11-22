import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
// import { composeWithDevTools } from "remote-redux-devtools";
import { composeWithDevTools } from "redux-devtools-extension";
import { productCreateFeedbackReducer, productDetailReducer, productGetFeedbackReducer, productListReducer, productSearchReducer } from "./Reducers/ProductReducers";
import { checkPassReducer, userDetailReducer, userLoginReducer, userRegisterReducer, userUpdateImageReducer, userUpdateProfileReducer } from "./Reducers/userReducers";
import { cartReducer, getcartReducer } from "./Reducers/CartReducers";
import { orderCreateReducer, orderDetailReducer, orderSingleReducer } from "./Reducers/orderReducers";
import { createShopReducer, shopDetailReducer } from "./Reducers/shopReducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducer = combineReducers({
    productList: productListReducer,
    productSearch: productSearchReducer,
    productDetail: productDetailReducer,
    productCreateFeedback: productCreateFeedbackReducer,
    productGetFeedback: productGetFeedbackReducer,
    cart: getcartReducer,
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


        // const userInfoFromAsyncStorage = AsyncStorage.getItem("userInfo")
        // ? (AsyncStorage.getItem("userInfo"))
        // : null;

        // const shopInfoFromAsyncStorage = AsyncStorage.getItem("shopInfo")
        // ? (AsyncStorage.getItem("shopInfo"))
        // : null;

        // const  cartItemsFromAsyncStorage = AsyncStorage.getItem("cartItems")
        // ? (AsyncStorage.getItem("cartItems"))
        // : []

        // //giao hang info
        // const  shippingInfoFromAsyncStorage = AsyncStorage.getItem("shippingInfo")
        // ? (AsyncStorage.getItem("shippingInfo"))
        // : {}
 
  
// const hello = () => {
//     const [a, setA] = useState([])
//     AsyncStorage.getItem("cartItems").then( data=> {
//         setA(data)
//     })
//     console.log(a)
// }
// const a = []
// AsyncStorage.getItem("cartItems").then(data=> {
//     $a = data;  
    
    
// })
// console.log(a)
// console.log(AsyncStorage.getItem("cartItems"))



const initialState = {
    // userLogin: {
    //     userInfo:userInfoFromAsyncStorage,
        
    // },
    // cart: {
    //     cartItems: cartItemsFromAsyncStorage, 
    //     shippingInfo: shippingInfoFromAsyncStorage
    // },
    // shopDetail: {
    //     shopInfo:shopInfoFromAsyncStorage
    // }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store