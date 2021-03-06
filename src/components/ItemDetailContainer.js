import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import db from '../firebase/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setloading] = useState(false)
    const productID = useParams();

    useEffect (() => {

        const collectProducts = collection(db, "products");

        getDocs(collectProducts)
            .then(({docs}) => {
                const arrayDocs = (docs.map((doc) => ({id: doc.id, ...doc.data()})))
                setItem(arrayDocs.filter((x) => x.id == productID.id))
            })
            
            
    }, []);

    return (
        <section className="ItemListed">
            <ItemDetail item={item[0]}></ItemDetail>
        </section>
    )
}

export default ItemDetailContainer