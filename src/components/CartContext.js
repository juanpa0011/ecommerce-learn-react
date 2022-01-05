import { createContext, useContext } from 'react';
import { useState } from 'react/cjs/react.development';

const enviro = createContext({ cantidadTotal: 1, cart: []});

export const {Provider} = enviro;

export const useEnviro = () => {  //Custom Hook
    return useContext(enviro)
}

export const CustomProvider = ({children}) => {
    const [cartWeight, setCartWeight] = useState(10)
    const [cart, setCart] = useState([])

    const removeItemCart = (id) => {

    }
    const emptyCart = () => {
        setCart([])
    }
    const addToCart = (product, amount) => {
        if (isInCart()) {
            
        } else {
            
        }
    }
    const isInCart = (id) => {

    }

    const contextValues = {
        cartWeight,
        cart,
        addToCart,
        removeItemCart,
        emptyCart
    }

    return (
        <Provider value={contextValues} >
            {children}
        </Provider>
    )
}

export default CustomProvider;