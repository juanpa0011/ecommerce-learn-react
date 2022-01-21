import { useEnviro } from "./CartContext";
import { NavLink } from 'react-router-dom';

import db from '../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CartList = () => {

    const {cart, removeItemCart, emptyCart} = useEnviro();
    const [cartReady , setCartReady] = useState(true)
    const [purchaseReady , setPurchaseReady] = useState("none")

    const endCheckOut = () => {
        if (cartReady) {
            setCartReady(false)
            const collectionCheckOut = collection(db, "sales")
            addDoc(collectionCheckOut, {
            buyer: {
                name: "Juan Perez",
                email: "falsomail@españoleingles.com",
                phone: "(+69)1576789813"
            },
            items: cart,
            date: serverTimestamp(),
            total: setSum()
        })
        .then((res) => {
            setPurchaseReady(res.id)
        })
        .catch((err) => {
            console.log(err)
        })
        }
    }

    const confirmCheckOut = () => {
        setPurchaseReady("none")
        emptyCart();
        setCartReady(true)
    }

    const setSum = () => {
        let aux = 0

        cart.map(element => {
            aux = aux + (element.product.quantity * element.product.item.price)
        })

        return aux
    }
    if (cart.length == 0) {
        return (
            <>
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
            </>
            )
    } else {
        return (
            <>
                {purchaseReady !== "none" ? <aside>
                    <p>All done! Please, use this code to follow your purchase</p>
                    <h5>{purchaseReady}</h5>
                    <button onClick={() => confirmCheckOut()}>CONFIRM</button>
                </aside> : null}
                <div className="container--cart">
                <div className="table--header">
                    <h4>Info</h4>
                    <h4>Products</h4>
                    <h4>Price</h4>
                    <h4>Actions</h4>
                </div>
                <div className="table--item">
                    {cartReady ? cart.map(element => {
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
                    }) : <div className="loading">Loading...</div>
                }
                </div>
                <div className="table--footer">
                    {cartReady ? <button onClick={()=>emptyCart()}>CLEAR THE BACKPACK</button> :
                    <button disabled>CLEAR THE BACKPACK</button> }
                    <div></div>
                    <h4>Sum: ${setSum()}</h4>
                    {cartReady ? <button className="end--cart-sale" onClick={()=>endCheckOut()}>CONFIRM BUY</button> :
                    <button disabled className="end--cart-sale">WAIT</button> }
                </div>
            </div>

            </>
            )
    }
}

export default CartList