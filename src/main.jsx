import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext'
import { FilterProvider } from './context/FilterContext'
import { CartProvider } from './context/CartContex.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_REACT_APP_AUTH_DOMAIN}
    clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
  </Auth0Provider>
)
