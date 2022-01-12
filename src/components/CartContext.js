import { createContext, useContext } from 'react';
import { useState } from 'react/cjs/react.development';

const enviro = createContext({ cantidadTotal: 1, cart: []}); // Example of Context - Not being used.

export const {Provider} = enviro; // Example of Provider - We have a custom Provider.

export const useEnviro = () => {  //Custom Hook
    return useContext(enviro)
}

export const CustomProvider = ({children}) => { // Being used currently as Context.
    const [cartWeight, setCartWeight] = useState(0)
    const [cart, setCart] = useState([])

    const removeItemCart = (id, quantity) => { // Remove item from cart - not cart weight. 
        const cart_copy = cart.filter(element => element.product.item.id != id)
        console.log(cart_copy)
        console.log(id)
        setCart(cart_copy)
        setCartWeight(cartWeight - quantity)

    }

    const emptyCart = () => { // Empty cart, all items removed. WARNING: CartWeight should also be affected.
        setCart([])
        setCartWeight(0)
    }

    const addToCart = (product) => { // Element to add must come from a return statement.
        const id = product.item.id;
        //const exist = cart.find((element) => element.product.id == product.id);
        console.log(cart)
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
    
    const isInCart = (id) => { // Find item inside cart.
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

    return ( // We are using a Custom Provider because of the custom hook, but we still need to state Provider.
        <Provider value={contextValues} >
            {children}
        </Provider>
    )
}

export default CustomProvider; // Export this first and foremost as return statement.
