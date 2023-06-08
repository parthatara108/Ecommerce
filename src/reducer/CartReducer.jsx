
const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            let { id, amount, color, product } = action.payload

            let existingProduct = state.cart.find((elem) => elem.id === id + color)

            if (existingProduct) {
                let updatedProduct = state.cart.map((elem) => {
                    if (elem.id === id + color) {
                        let newAmount = elem.amount + amount
                        if (newAmount >= elem.max) {
                            newAmount = elem.max
                        }
                        return {
                            ...elem,
                            amount: newAmount
                        }
                    }
                    else {
                        return elem
                    }
                })
                return {
                    ...state,
                    cart: updatedProduct
                }
            }
            else {
                let cartProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.images[0].url,
                    price: product.price,
                    max: product.stock
                }
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                }
            }
        }
        case "REMOVE_ITEM": {
            let updatedCart = state.cart.filter((elem) => elem.id !== action.payload)
            return {
                ...state,
                cart: updatedCart
            }
        }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }
        case "SET_INCREASE": {
            let updatedProduct = state.cart.map((elem) => {
                if (elem.id === action.payload) {
                    let incrementedAmount = elem.amount + 1
                    if (incrementedAmount >= elem.max) {
                        incrementedAmount = elem.max
                    }
                    return {
                        ...elem,
                        amount: incrementedAmount
                    }
                }
                else {
                    return elem
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }
        }
        case "SET_DECREASE": {
            let updatedProduct = state.cart.map((elem) => {
                if (elem.id === action.payload) {
                    let decrementedAmount = elem.amount - 1
                    if (decrementedAmount <= 1) {
                        decrementedAmount = 1
                    }
                    return {
                        ...elem,
                        amount: decrementedAmount
                    }
                }
                else {
                    return elem
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }
        }
        case "CART_TOTAL_ITEM": {
            let updatedCartValue = state.cart.reduce((initialValue, elem) => {
                let { amount } = elem
                initialValue = initialValue + amount
                return initialValue
            }, 0)
            return {
                ...state,
                total_items: updatedCartValue
            }
        }
        case "CART_TOTAL_PRICE": {
            let updatedCartPrice = state.cart.reduce((initialValue, elem) => {
                let { price, amount } = elem
                initialValue = initialValue + price * amount
                return initialValue
            }, 0)
            return {
                ...state,
                total_amount: updatedCartPrice
            }
        }
        default:
            break;
    }
    return state
}

export default CartReducer