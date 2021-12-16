import { useEffect, useState } from "react";


import ItemList from "./ItemList";
import list from "../database/data"


// IMPORTAR DATA ( ITEMS??) DE UN ARCHIVO DATA ( DATA WAREHOUSE)

// CONST PRODUCTS = DATA. ANCLAR LA INFORMACION A UNA VARIABLE.

function ItemListContainer () {

    // CREAR DOS ESTADOS USE STATES

    // PRODUCTS / SET PRODUCTS = ARRAY ON EMPTY
    // LOADING / SETLOADING = BOOLEAN ON FALSE
    // {{OPTIONAL}} ID - USEPARAMS

    const [elementList, setList] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const promise = getItems()
        promise.then((json) => {
            setList(json);
        })
    }, [])

    const getItems = () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list)
            }, 3000);
        })
        return promise;
    }

    return (<>
        <ItemList list={elementList} loading={loading}></ItemList>
    </>)


}

export default ItemListContainer;

/**
 * 
 */