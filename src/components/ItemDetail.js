import ItemCounter from "./ItemCounter"

const ItemDetail = (params) => {

    let item = params.item

    if (item == undefined) {
        return(<>
            <div className="loading">Loading...</div>
        </>)
    }
    
    return (<>
        <img></img>
            <h2>{item.name}</h2>
            <p>{item.description.full} </p>
            <ul>
                {item.description.list.map(element => {
                    return <li>{element}</li>
                })}
            </ul>
            <div className="container--values">
                <p>Price ${item.price}</p>
                <ItemCounter item={item}></ItemCounter>
            </div>
        <button>Add to your backpack</button>
    </>)
}

export default ItemDetail
