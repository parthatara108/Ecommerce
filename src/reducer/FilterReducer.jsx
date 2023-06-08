const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS": {
            let maxPrice = 0;

            if (Array.isArray(action.payload)) {
                maxPrice = action.payload.length > 0 ? Math.max(...action.payload.map((elem) => elem.price)) : 0;
            }
            return {
                ...state,
                filter_products: action.payload,
                all_products: action.payload ? action.payload : state.all_products,
                filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
            }
        }
        // case "LOAD_FILTER_STATE":
        //     return {
        //         ...state,
        //         filter_products: action.payload,
        //         all_products: action.payload,
        //         grid_view: action.payload.grid_view,
        //         sorting_item: action.payload.sorting_item,
        //     }
        case "SET_GRID_LAYOUT":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_LAYOUT":
            return {
                ...state,
                grid_view: false
            }

        case "UPDATE_SORT":
            return { ...state, sorting_item: action.payload }

        case "SORTING_PRODUCTS": {
            // let sortValue
            let { sorting_item, filter_products } = state
            let tempSortProduct = [...filter_products]
            if (sorting_item === 'lowest') {
                tempSortProduct = tempSortProduct.sort((a, b) => {
                    return a.price - b.price
                })
            }
            if (sorting_item === 'highest') {
                tempSortProduct = tempSortProduct.sort((a, b) => {
                    return b.price - a.price
                })
            }
            if (sorting_item === 'a-z') {
                tempSortProduct = tempSortProduct.sort((a, b) =>
                    a.name.localeCompare(b.name)
                )
            }
            if (sorting_item === 'z-a') {
                tempSortProduct = tempSortProduct.sort((a, b) =>
                    b.name.localeCompare(a.name)
                )
            }
            return {
                ...state,
                filter_products: tempSortProduct
            }
        }
        case 'UPDATE_FILTERS_VALUE': {
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters, [name]: value
                }
            }
        }
        case 'FILTER_PRODUCTS': {
            let { all_products } = state
            let tempFilterProduct = [...all_products]
            const { text, category, company, colors, price } = state.filters

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((elem) => {
                    return elem.name.toLowerCase().includes(text)
                })
            }
            if (category !== 'All') {
                tempFilterProduct = tempFilterProduct.filter((elem) => {
                    return elem.category === category
                })
            }
            if (company !== 'All') {
                tempFilterProduct = tempFilterProduct.filter((elem) => {
                    return elem.company === company
                })
            }
            if (colors !== 'All') {
                tempFilterProduct = tempFilterProduct.filter((elem) => {
                    return elem.colors.includes(colors)
                })
            }
            if (price) {
                tempFilterProduct = tempFilterProduct.filter((elem) => {
                    return elem.price <= price
                })
            }

            return {
                ...state,
                filter_products: tempFilterProduct
            }
        }
        case "CLEAR_FILTERS": {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: 'All',
                    company: 'All',
                    colors: 'All',
                    price: state.filters.max_price,
                }
            }
        }
        default:
            return state
    }
}

export default FilterReducer