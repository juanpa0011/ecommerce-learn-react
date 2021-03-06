import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import db from '../firebase/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const CategoryShow = ({list}) => {

    const categoryType = useParams()

    const [items, setList] = useState([])
    const [loading, setloading] = useState(false)

    useEffect (() => {

        const collectProducts = collection(db, "products");

        if (categoryType) {
            
            const seekQuery = query(collectProducts,where("category","==",categoryType.type))
            console.log(seekQuery)
            getDocs(seekQuery)
            .then(({docs}) => {
                setList(docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch((err) => {
                console.log(err)
            })

        } else {
            getDocs(collectProducts)
            .then(({docs}) => {
                setList(docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch((err) => {
                console.log(err)
            })
        }
            
    }, [categoryType]);

    let title = ""

    if (categoryType.type == "digitaldice") {
        title = "Digital dice"
    } else if (categoryType.type == "bundles") {
        title = "Bundles"
    } else {
        title = "Sourcebooks"
    }

    return (
        <section className="container--category-style">
            <div className="container--central-grid">
                {items.map((element, index) => {
                    return <div>
                    <img src={element.img}></img>
                    <div>
                        <h2>{element.name}</h2>
                        <p>{element.description.short}</p>
                    </div>
                    <div className="container--values">
                        <p>Price: ${element.price}</p>
                        <div className="folder--item">
                        <NavLink to ={'/product/' + element.id} >
                            <button>  Show more </button>
                        </NavLink>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </section>
    )
}

export default CategoryShow;
