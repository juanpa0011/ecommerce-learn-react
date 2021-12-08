
const Featured = (params) => {
    
    const list = params.list;
    return <section className="container--featured">
        {list.map((element, index) => {
            return <div>
                <img href={element.img}></img>
                <h2>{element.name}</h2>
                <h3>{element.description.short}</h3>
                <div className="container--values">
                    <p>${element.price}</p>
                    <div className="counter-console">
                        <button>-</button>
                        <button>+</button>
                        <div>HERE</div>
                    </div>
                </div>
                <button>Add to your backpack</button>
            </div>
        })}
    </section>
}



export default Featured;