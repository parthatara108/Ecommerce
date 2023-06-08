import { createContext, useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
import reducer from '../reducer/ProductReducer';

const ProductContext = createContext();
const url = 'https://course-api.com/react-store-products'

const initialStata = {
    isLoading: false,
    isError: false,
    prodcuts: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
}

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStata)

    const getProducts = async (api) => {
        dispatch({ type: 'PRODUCT_DATA_LOADING' })
        try {
            const res = await axios.get(api)
            const products = res.data
            dispatch({ type: 'PRODUCT_DATA', payload: products })
        } catch (error) {
            dispatch({ type: 'PRODUCT_DATA_ERROR' })
        }
    }
    const getSingleProduct = async (api) => {
        dispatch({ type: 'SINGLE_PRODUCT_DATA_LOADING' })
        try {
            const res = await axios.get(api)
            const singleProduct = await res.data
            dispatch({ type: 'SINGLE_PRODUCT_DATA', payload: singleProduct })

        } catch (error) {
            dispatch({ type: 'SINGLE_PRODUCT_DATA_ERROR' })
        }
    }
    useEffect(() => {
        getProducts(url)
    }, [])

    return (
        <ProductContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </ProductContext.Provider>
    )
}
export { ProductContext, ProductProvider }
export const useProductContext = () => {
    return useContext(ProductContext)
}
