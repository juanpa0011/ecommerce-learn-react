import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CategoryShow = ({list}) => {

    const categoryType = useParams()

    const [items, setList] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const promise = getItems()
        promise.then((json) => {
            setList(json);
        })
    }, [categoryType])

    const getItems = () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve(
                    list.filter(function (element) { 
                        return element.category == categoryType.type
                    })
                )
            }, 3000);
        })
        return promise;
    }

    let title = ""

    if (categoryType.type == "digitaldice") {
        title = "Digital dice"
    } else if (categoryType.type == "bundles") {
        title = "Bundles"
    } else if (categoryType.type == "featured") {
        title = "Featured"
    } else {
        title = "Sourcebooks"
    }
    return (
        <section className="container--category-style">
            <h2>Welcome to {title}</h2>
            <div className="container--central-grid">
                {/* mapping data from database (use promise as intended soon.) */}
                {items.map((element, index) => {
                    return <div>
                
                    <img href={element.img}></img>
                    <div>
                        <h2>{element.name}</h2>
                        <p>{element.description.short}</p>
                    </div>
                    <div className="container--values">
                        <p>${element.price}</p>
                    </div>
                </div>
                })}
            </div>
        </section>
    )
}

export default CategoryShow;

// Bundles -- Grid of Row primaries. Each Bundle divided in three sections. Img (left) Description (center) decorations (right)

// SourceBooks --

// Digital Dice --
