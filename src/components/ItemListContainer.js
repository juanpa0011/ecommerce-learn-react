import { useEffect, useState } from "react";

import db from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from "./ItemList";

function ItemListContainer () {
    const [elementList, setList] = useState([])
    const [loading, setloading] = useState(false)

    useEffect (() => {

        const collectProducts = collection(db, "products");

        getDocs(collectProducts)
            .then(({docs}) => {
                setList(docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            
    }, []);

    return (<>
        <ItemList list={elementList} loading={loading}></ItemList>
    </>)


}

export default ItemListContainer;
