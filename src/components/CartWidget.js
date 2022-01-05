import { NavLink } from "react-router-dom";
import { useEnviro } from "./CartContext";

const CartWidget = (params) => {

    function onCartClick() {
        return <NavLink to="/cart"></NavLink>
    }

    const {cartWeight} = useEnviro();

    console.log(cartWeight)

    if (cartWeight>9) {
        return (
        
            <div id='header--cart'>
                <NavLink key={cartWeight} to="/cart">
                    <p>Cart</p>
                </NavLink>
                <div onClick={onCartClick}>
                    <p>+9</p>
                </div>
            </div>
    )
    } else {
        return (
        
            <div id='header--cart'>
                <NavLink key={cartWeight} to="/cart">
                    <p>Cart</p>
                </NavLink>
                <div onClick={onCartClick}>
                    <p>{cartWeight}</p>
                </div>
            </div>
    )
    }
} 

export default CartWidget;