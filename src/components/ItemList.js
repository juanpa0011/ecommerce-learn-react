// Catalog - Show all items from Item Container, map them in here.

import Item from "./Item";

const ItemList = (params) => {

    const list = params.list;

    const stockedListItems = list.filter(function (element) { return element.stock > 0}); // Secure only FEATURED elements of Array

    console.log(stockedListItems)
    return <>
        <h2>Lurking around the store?</h2>
        <button></button>
        <button></button>
        <div className="folder--catalog">
            {stockedListItems.map((item, index) => {
                return <Item item={item}></Item>
            })}
        </div>
    </>

}

export default ItemList; 