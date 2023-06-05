const reducer = (state, action) => {

    switch (action.type) {
        case 'PRODUCT_DATA_LOADING':
            return {
                ...state, isLoading: true
            }
        case 'SINGLE_PRODUCT_DATA_LOADING':
            return {
                ...state, isSingleLoading: true
            }

        case 'PRODUCT_DATA_ERROR':
            return {
                ...state, isLoading: false, isError: true
            }
        case 'SINGLE_PRODUCT_DATA_ERROR':
            return {
                ...state, isSingleLoading: false, isError: true
            }

        case 'PRODUCT_DATA': {
            const featureData = action.payload.filter((element) => {
                return element.featured === true
            })
            return {
                ...state, isLoading: false, products: action.payload, featureProducts: featureData
            }
        }
        case 'SINGLE_PRODUCT_DATA':
            return {
                ...state, isSingleLoading: false, singleProduct: action.payload
            }

        default:
            break;
    }
    return state
}
export default reducer