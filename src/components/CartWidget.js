import { NavLink } from "react-router-dom";

const CartWidget = (params) => {

    function onCartClick() {
        return <NavLink to="/cart"></NavLink>
    }

    return (
        
            <div id='header--cart'>
                <NavLink key='0' to="/cart">
                    <p>Cart</p>
                </NavLink>
                <div onClick={onCartClick}>
                    <p>{params.itemNum}</p>
                </div>
            </div>
    )
} 

export default CartWidget;