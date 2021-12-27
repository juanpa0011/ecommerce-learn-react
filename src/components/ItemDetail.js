import { useState } from "react/cjs/react.development"
import ItemCounter from "./ItemCounter"

const ItemDetail = ({item}) => {

    // CREATE HOOK FOR A VARIABLE ARRAY TO STORE AN ITEM ACCORDING TO WHAT IS GIVEN IN ITEMCOUNTER

    const [itemArray, setItemArray] = useState([])

    const addItem = (id, quantity) => {

        const newItem = {id: item.id, quantity: quantity}

        const copy = [...itemArray, newItem];
        setItemArray(copy);

        console.log(copy);
    }

    if (item == undefined) {
        return(<>
            <div className="loading">Loading...</div>
        </>)
    }
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
}

export default ItemDetail
