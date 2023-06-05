import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
import GridView from "./GridView"
import ListView from "./ListView"

const ProductList = () => {
    const { filter_products: products, grid_view } = useContext(FilterContext)
    if (grid_view === true) {
        return <GridView products={products} />
    }
    if (grid_view === false) {
        return <ListView products={products} />
    }
}

export default ProductList