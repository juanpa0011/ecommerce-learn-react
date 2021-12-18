import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import list from "../database/data"
import ItemCounter from "./ItemCounter";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setloading] = useState(false)
    const productID = useParams();

    useEffect(() => {
        const promise = getItems()
        promise.then((json) => {
            setItem(json);
        })
    }, [])

    const getItems = () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    list.filter(function (element) { return element.id == productID.id})
                )
            }, 2000);
        })
        return promise;
    }

    return (
        <section className="ItemListed">
            <ItemDetail item={item[0]}></ItemDetail>
        </section>
    )
}

export default ItemDetailContainer