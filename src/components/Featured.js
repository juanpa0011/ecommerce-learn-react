import { useEffect, useState } from "react";

import ItemCounter from "./ItemCounter";
import list from "../database/data"


const Featured = () => {

    const [featured, setList] = useState([])
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
                resolve(
                    list.filter(function (element) { return element.featured == true})
                )
            }, 3000);
        })
        return promise;
    }
    
    // Render all featured elements as intended
    return <>
        <h2>Featured Items of the Month</h2>
        {featured.map((element, index) => {
            return <div>
                
                <img href={element.img}></img>
                <h2>{element.name}</h2>
                <h3>{element.description.short}</h3>
                <div className="container--values">
                    <p>${element.price}</p>
                    <ItemCounter item={element}></ItemCounter>
                </div>
                <button>Add to your backpack</button>
            </div>
        })}
    </>
}



export default Featured;