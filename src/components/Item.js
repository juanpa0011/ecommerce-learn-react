
const Item = (params) =>{

    const item = params.item;

    console.log(item);
    
    return <div>
            <div className="container--item">
                <h3>{item.name}</h3>
                <img></img>
                <p>{item.description.short}</p>
                <h4>Price: ${item.price}</h4>
                <div className="folder--item">
                    <button>Find out more</button>
                </div>
            </div>
    </div>

}

export default Item