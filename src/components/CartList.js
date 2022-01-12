import { useEnviro } from "./CartContext";
import list from "../database/data"
import { NavLink } from 'react-router-dom';

const CartList = () => {

    const {cart, removeItemCart, emptyCart} = useEnviro();

    const setSum = () => {
        let aux = 0

        cart.map(element => {
            aux = aux + (element.product.quantity * element.product.item.price)
        })

        return aux
    }

    if (cart.length == 0) {
        return (
            <div className="container--cart">
                <div className="table--header">
                    <div></div>
                    <h4>Products</h4>
                    <h4>Price</h4>
                    <h4>Actions</h4>
                </div>
                <div className="table--item">
                    <div className="empty-cart">
                        There are no items in your backpack!
                    </div>
                </div>
                <div className="table--footer">
                    <div></div>
                    <div></div>
                    <h4>Sum: $0.00</h4>
                </div>
            </div>
            )
    } else {
        return (
            <div className="container--cart">
                <div className="table--header">
                    <h4>Info</h4>
                    <h4>Products</h4>
                    <h4>Price</h4>
                    <h4>Actions</h4>
                </div>
                <div className="table--item">
                    {cart.map(element => {
                        return (<>
                        <NavLink to ={'/product/' + element.product.item.id} > 
                            <button>SHOW ITEM</button> 
                        </NavLink>
                        <div className="item--holder">
                            <img src={element.product.item.img}></img>
                            <h4>{element.product.item.name}</h4>
                            <p>{element.product.item.description.short}</p>
                        </div>
                        <div className="item--pricing">
                            <p>{element.product.quantity} x ${element.product.item.price} = ${ (element.product.quantity * element.product.item.price) }</p>
                        </div>
                        <button onClick={()=>removeItemCart(element.product.item.id, element.product.quantity)}>REMOVE</button>
                        </>)
                    })}
                </div>
                <div className="table--footer">
                    <button onClick={()=>emptyCart()}>CLEAR THE BACKPACK</button>
                    <div></div>
                    <h4>Sum: ${setSum()}</h4>
                    <button>CONFIRM BUY</button>
                </div>
            </div>
            )
    }
}

export default CartList