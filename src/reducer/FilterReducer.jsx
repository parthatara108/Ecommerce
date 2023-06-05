const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [action.payload],
                all_products: [action.payload]
            }
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
        case "GET_SORTED_DATA": {
            let userSortedValue = document.getElementById("sort")
            let sortValue = userSortedValue.options[userSortedValue.selectedIndex].value
            console.log(sortValue);
            return {
                ...state,
                sorting_item: sortValue
            }
        }
        case "SORTING_PRODUCTS": {
            let tempSortProduct = []
            if (state.sorting_item === 'lowest') {
                tempSortProduct = state.filter_products.sort((a, b) => {
                    return a.price - b.price
                })
            }
            if (state.sorting_item === 'highest') {
                tempSortProduct = state.filter_products.sort((a, b) => {
                    return b.price - a.price
                })
            }
            if (state.sorting_item === 'a-z') {
                tempSortProduct = state.filter_products.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if (state.sorting_item === 'z-a') {
                tempSortProduct = state.filter_products.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            return {
                ...state,
                filter_products: tempSortProduct
            }
        }
        case "UPDATE_SORT":
            return { ...state, sorting_item: action.payload }
        default:
            return state
    }
}

export default FilterReducer