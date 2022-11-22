import { CART_ADD_PRODUCTS, CART_CLEAR_PRODUCTS, CART_REMOVE_PRODUCTS, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_INFO, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS } from "../Constants/CartConstants"
import {useState} from 'react'
// export const cartReducer = (state = { cartItems:[], shippingInfo:{} }, action) => {
//     switch (action.type) {
//         case CART_ADD_PRODUCTS: 
//             const item = action.payload
            

//             const existItem = state.cartItems.find((x) => x.product === item.product)
            
//             if (existItem) {
//                 return {
//                 ...state,
//                 cartItems: state.cartItems.map((x)=>
//                 x.product === existItem.product ? item : x
//                 ),
//             };
//             } else {
//                 return {
//                     ...state, 
//                     cartItems: [...state.cartItems, item]}
//             }   
//         case CART_REMOVE_PRODUCTS: 
//                 return {
//                     ...state, 
//                     cartItems: state.cartItems.filter((x) => x.product !== action.payload),
//                 }
//         case CART_SAVE_SHIPPING_INFO: 
//                 return {
//                     ...state, 
//                     shippingInfo: action.payload,
//                 }
//         case CART_SAVE_PAYMENT_METHOD: 
//                 return {
//                     ...state, 
//                     paymentMethod: action.payload,
//                 }
//         case CART_CLEAR_PRODUCTS:
//             return {
//                 ...state, 
//                 cartItems: [],
//             }

//         default:
//             return state;
//     }
// }
//get cart by iduser
export const getcartReducer = (state = { cartItems:[]}, action) => {
    switch (action.type) {
        case GET_CART_REQUEST: 
            return {loading: true, cartItems:[]}
        case GET_CART_SUCCESS: 
            return {loading: false, cartItems: action.payload}
        case GET_CART_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}
// add to cart
export const addCartReducer = (state = { addToCart:[]}, action) => {
    switch (action.type) {
        case GET_CART_REQUEST: 
            return {loading: true, addToCart:[]}
        case GET_CART_SUCCESS: 
            return {loading: false, addToCart: action.payload}
        case GET_CART_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}