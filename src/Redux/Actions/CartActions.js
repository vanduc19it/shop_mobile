import axios from "axios";
import { CART_ADD_PRODUCTS_REQUEST,CART_ADD_PRODUCTS_SUCCESS,CART_ADD_PRODUCTS_FAIL, CART_REMOVE_PRODUCTS, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_INFO, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS, CART_REMOVE_PRODUCTS_REQUEST, CART_REMOVE_PRODUCTS_SUCCESS, CART_REMOVE_PRODUCTS_FAIL } from "../Constants/CartConstants";

import {baseURL} from '../../Url'
import AsyncStorage from "@react-native-async-storage/async-storage";

//get cart from database theo iduser
export const getCart = (idUser) => async (dispatch) => {
    
    try {
        dispatch({type: GET_CART_REQUEST});
        const {data} = await axios.get( `${baseURL}cart/get-cart-by-idUser/${idUser}` );
        dispatch({type:GET_CART_SUCCESS, payload:data})
        
        
    } catch (error) {
        dispatch({ 
            type: GET_CART_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        });
    }
};

//add product to cart
export const addToCart = (idUser, product, quantity) => async (dispatch) => {
    console.log(product)
    try {
        dispatch({type: CART_ADD_PRODUCTS_REQUEST});
        const {data} = await axios.post( `${baseURL}cart/add-new-product`, {
            idUser: idUser, 
            idProduct: product._id,
            nameProduct: product.nameProduct,
            imgProduct: product.imageProduct,
            quantity: quantity, 
            unit_price: product.price
        });
        dispatch({type:CART_ADD_PRODUCTS_SUCCESS, payload:data})
        
        
    } catch (error) {
        dispatch({ 
            type: CART_ADD_PRODUCTS_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        });
    }
};


//remove product to cart
export const removeFromCart = (idUser, idProduct) => async (dispatch) => {
    
    try {
        dispatch({type: CART_REMOVE_PRODUCTS_REQUEST});
        const {data} = await axios.post( `${baseURL}cart/remove-product-cart`, {
            idUser: idUser, 
            idProduct: idProduct,
            
        });
        dispatch({type:CART_REMOVE_PRODUCTS_SUCCESS, payload:data})    
        
    } catch (error) {
        dispatch({ 
            type: CART_REMOVE_PRODUCTS_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        });
    }
        
    //   AsyncStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

//luu thong tin giao hang
export const saveShippingInfo = (data) => async (dispatch) => {
    
    dispatch({
        type: CART_SAVE_SHIPPING_INFO,
        payload: data, 
    });
        
      await AsyncStorage.setItem("shippingInfo", JSON.stringify(data));
}

//luu phuong thuc thanh toan
export const savePaymentMethod = (data) => async (dispatch) => {
    
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data, 
    });
        
      await AsyncStorage.setItem("paymentMethod", JSON.stringify(data));
}