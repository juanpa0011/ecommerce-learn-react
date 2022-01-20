import Item from "./Item";

const ItemList = (params) => {

    const list = params.list;

    return <>
        <h2>Lurking around the store?</h2>
        <div className="folder--catalog">
            {list.map((item) => {
                return <Item item={item}></Item>
            })}
        </div>
    </>

}

export default ItemList; 