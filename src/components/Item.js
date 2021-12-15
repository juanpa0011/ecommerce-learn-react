
const Item = (params) =>{

    const item = params.item;
    
    return <div>
            <div className="container--item">
                <h3>{item.name}</h3>
                <img></img>
                <p>{item.description.short}</p>
                <h4>Price: ${item.price}</h4>
                <div className="folder--item">
                    <button>Show more</button>
                </div>
            </div>
    </div>

}

export default Item