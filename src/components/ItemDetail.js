import { useState } from "react/cjs/react.development"
import ItemCounter from "./ItemCounter"
import { NavLink } from "react-router-dom"
import { useEnviro } from "./CartContext";

const ItemDetail = ({item}) => {
    const [itemArray, setItemArray] = useState([])
    const {addToCart} = useEnviro();

    const addItem = (item, quantity) => {

        const newItem = {item: item, quantity: quantity}
        const copy = [...itemArray, newItem];

        addToCart(newItem); 
        setItemArray(copy); 
    }

    if (item == undefined) {
        return(<>
            <div className="loading">Loading...</div>
        </>)
    }

    if (itemArray.length == 0) {
        return (<>
            <img src={item.img}></img>
                <h2>{item.name}</h2>
                <p>{item.description.full} </p>
                <ul>
                    {item.description.list.map(element => {
                        return <li>{element}</li>
                    })}
                </ul>
                <ItemCounter addItem={addItem} item={item}></ItemCounter>
        </>)
    } else {
        return (<>
            <img src={item.img}></img>
                <h2>{item.name}</h2>
                <p>{item.description.full} </p>
                <ul>
                    {item.description.list.map(element => {
                        return <li>{element}</li>
                    })}
                </ul>
                <button> 
                    <NavLink to ={'/cart'} > Lets check your backpack </NavLink> 
                </button>
        </>)
    }
}

export default ItemDetail
