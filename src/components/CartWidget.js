import { NavLink } from "react-router-dom";

const CartWidget = (params) => {
    return (
        
            <div id='header--cart'>
                <NavLink key='0' to="/cart">
                    <p>Cart</p>
                </NavLink>
                <div>
                    <p>{params.itemNum}</p>
                </div>
            </div>
    )
}

export default CartWidget;