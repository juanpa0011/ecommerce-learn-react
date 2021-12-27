import { useEffect, useState } from "react";

import ItemCounter from "./ItemCounter";


const Featured = ({list, carting}) => {

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

    const sliceItems = () => {
        const randNum = Math.floor(Math.random() * 10);
        if (randNum > 4) {
            const twoFeatured = featured.slice(0,2);
            return twoFeatured;
        } else {
            const twoFeatured = featured.slice(randNum,randNum+2);
            return twoFeatured;
        }
    }
    
    // Render all featured elements as intended
    return <>
        <h2>Featured Items of the Month</h2>
        {featured.slice(0,2).map((element, index) => {
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