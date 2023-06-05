import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext'
import { FilterProvider } from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductProvider>
)
