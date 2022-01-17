import { useEffect, useState } from "react";
import db from '../firebase/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { NavLink } from "react-router-dom";


const Featured = ({list, carting}) => {

    const [featured, setList] = useState([])
    const [loading, setloading] = useState(false)

    useEffect (() => {

        const collectProducts = collection(db, "products");
            
        const seekQuery = query(collectProducts,where("featured","==",true))

        getDocs(seekQuery)
        .then(({docs}) => {
            setList(docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
        .catch((err) => {
            console.log(err)
        })

        
            
    }, []);
    
    // Render all featured elements as intended
    return <>
        
        {featured.slice(0,2).map((element, index) => {
            return <div>
                <img src={element.img}></img>
                <h2>{element.name}</h2>
                <h3>{element.description.short}</h3>
                <button>
                    <NavLink to ={'/product/' + element.id} >Show more</NavLink>
                </button>
            </div>
        })}
    </>
}



export default Featured;