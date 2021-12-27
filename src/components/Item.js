import { NavLink } from "react-router-dom";

const Item = (params) =>{

    const item = params.item;

    const itemLink = 'product/' + item.id
    
    return <div>
            <div className="container--item">
                <h3>{item.name}</h3>
                <img src={item.img}></img>
                <p>{item.description.short}</p>
                <h4>Price: ${item.price}</h4>
                <div className="folder--item">
                    <button>  <NavLink to ={itemLink} >Show more</NavLink> </button>
                </div>
            </div>
    </div>

}

export default Item