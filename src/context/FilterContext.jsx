import { createContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
export const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_item: 'lowest',
    filters: {
        text: '',
        category: 'All',
        company: 'All',
        colors: 'All',
        max_price: 0,
        price: 0,
        min_price: 0,
    }
}

export const FilterProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // useEffect(() => {
    //     const storedState = localStorage.getItem("filterState");
    //     if (storedState) {
    //         dispatch({ type: "LOAD_FILTER_STATE", payload: JSON.parse(storedState) });
    //     }
    // }, []);

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.sorting_item, state.filters])
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])



    const setGridView = () => {
        return dispatch({ type: "SET_GRID_LAYOUT" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_LIST_LAYOUT" })
    }

    const updateSort = (e) => {
        let value = e.target.value
        dispatch({ type: "UPDATE_SORT", payload: value })
    }
    const updateFiltersValue = (e) => {
        let name = e.target.name
        let value = e.target.value

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
    }
    const clearFilters = () => {
        return dispatch({ type: "CLEAR_FILTERS" })
    }
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort, updateFiltersValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    )
}
