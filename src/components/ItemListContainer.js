import { useEffect, useState } from "react";

import db from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


import ItemList from "./ItemList";


// IMPORTAR DATA ( ITEMS??) DE UN ARCHIVO DATA ( DATA WAREHOUSE)

// CONST PRODUCTS = DATA. ANCLAR LA INFORMACION A UNA VARIABLE.

function ItemListContainer ({list}) {

    // CREAR DOS ESTADOS USE STATES

    // PRODUCTS / SET PRODUCTS = ARRAY ON EMPTY
    // LOADING / SETLOADING = BOOLEAN ON FALSE
    // {{OPTIONAL}} ID - USEPARAMS


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

/**
 * 
 */