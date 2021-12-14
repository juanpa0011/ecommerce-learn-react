import { useState } from "react";
import ItemCounter from "./ItemCounter";


const Featured = (params) => {

    const list = params.list; // Secure params on List array
    
    const featuredList = list.filter(function (element) { return element.featured == true}); // Secure only FEATURED elements of Array

    // Render all featured elements as intended
    return <>
        <h2>Featured Items of the Month</h2>
        {featuredList.map((element, index) => {
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