import { createContext, useReducer } from "react";
import reducer from '../reducer/CartReducer'
import { useEffect } from "react";

const CartContext = createContext()

const getCartData = () => {
    let localCartData = localStorage.getItem('cartData')
    if (localCartData == []) {
        return []
    }
    else {
        return JSON.parse(localCartData)
    }
}
const initialState = {
    cart: getCartData(),
    total_items: "",
    total_amount: "",
    shipping_fee: 2000
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id })
    }
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREASE", payload: id })
    }
    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" })
        dispatch({ type: "CART_TOTAL_PRICE" })
        localStorage.setItem("cartData", JSON.stringify(state.cart))
    }, [state.cart])
    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>{children}</CartContext.Provider>
}

export { CartProvider, CartContext }