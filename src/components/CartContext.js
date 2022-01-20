import { createContext, useContext } from 'react';
import { useState } from 'react/cjs/react.development';

const enviro = createContext({ cantidadTotal: 1, cart: []}); 

export const {Provider} = enviro; 

export const useEnviro = () => {  
    return useContext(enviro)
}

export const CustomProvider = ({children}) => { 
    const [cartWeight, setCartWeight] = useState(0)
    const [cart, setCart] = useState([])

    const removeItemCart = (id, quantity) => { 
        const cart_copy = cart.filter(element => element.product.item.id != id)
        setCart(cart_copy)
        setCartWeight(cartWeight - quantity)

    }

    const emptyCart = () => { 
        setCart([])
        setCartWeight(0)
    }

    const addToCart = (product) => { 
        const id = product.item.id;
        if (isInCart(id)) {

            const cart_copy = [...cart]
            let match = cart_copy.find((x) => x.product.item.id === id)
            match.product.quantity = match.product.quantity + product.quantity
            setCart(cart_copy)

        } else {
            setCart([...cart, {product}])
        }
        setCartWeight(cartWeight + product.quantity)
    }
    
    const isInCart = (id) => { 
        const search = cart.filter(x => x.product.item.id == id) 
        
        if (search.length > 0) {
            return true
        } else {
            return false
        }
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

export default CustomProvider; // Export this first and foremost as return statement.
