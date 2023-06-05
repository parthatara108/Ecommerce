import { createContext, useContext, useReducer, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
export const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_item: 'lowest',
}

export const FilterProvider = ({ children }) => {
    const { products } = useContext(ProductContext)

    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_LAYOUT" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_LIST_LAYOUT" })
    }

    // const sorting = () => {
    //     return dispatch({ type: "GET_SORT_DATA" })
    // }
    const updateSort = (e) => {
        const value = e.target.value
        dispatch({ type: "UPDATE_SORT", payload: value })
    }

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.sorting_item, products])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort }}>
            {children}
        </FilterContext.Provider>
    )
}
