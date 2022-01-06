import { createContext, useContext } from 'react';
import { useState } from 'react/cjs/react.development';

const enviro = createContext({ cantidadTotal: 1, cart: []}); // Example of Context - Not being used.

export const {Provider} = enviro; // Example of Provider - We have a custom Provider.

export const useEnviro = () => {  //Custom Hook
    return useContext(enviro)
}

export const CustomProvider = ({children}) => { // Being used currently as Context.
    const [cartWeight, setCartWeight] = useState(10)
    const [cart, setCart] = useState([])

    const removeItemCart = (id) => { // Remove item from cart - not cart weight. 

    }
    const emptyCart = () => { // Empty cart, all items removed. WARNING: CartWeight should also be affected.
        setCart([])
    }
    const addToCart = (product, amount) => { // Element to add must come from a return statement.
        if (isInCart()) {
            
        } else {
            
        }
    }
    const isInCart = (id) => { // Find item inside cart.

    }

    const contextValues = {
        cartWeight,
        cart,
        addToCart,
        removeItemCart,
        emptyCart
    }

    return ( // We are using a Custom Provider because of the custom hook, but we still need to state Provider.
        <Provider value={contextValues} >
            {children}
        </Provider>
    )
}

export default CustomProvider; // Export this first and foremost as return statement.
