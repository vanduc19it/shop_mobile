import axios from "axios";
import { CART_ADD_PRODUCTS, CART_REMOVE_PRODUCTS, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_INFO } from "../Constants/CartConstants";
import {baseURL} from '../../Url'
import AsyncStorage from "@react-native-async-storage/async-storage";

//add product to cart
export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`${baseURL}detail-product?idProduct=${id}`); 
    console.log(data)
    dispatch({
        type: CART_ADD_PRODUCTS,
        payload: {
            product: data._id,
            name: data.nameProduct,
            image: data.imageProduct,
            price: data.price,
            Totalquantity: data.quantity,
            quantity, 
        }    
    });
        
      await AsyncStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

}

//remove product to cart
export const removeFromCart = (id) => async (dispatch, getState) => {
    
    dispatch({
        type: CART_REMOVE_PRODUCTS,
        payload: id, 
    });
        
      await AsyncStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
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