import { useState } from "react";

const ItemCounter = ({addItem,item}) => {

    const [number, setNumber] = useState(1);

    const sumCounter = () => {
        if (number == item.stock) {
            setNumber(item.stock)
        } else {
            setNumber(number + 1)
        }
    }

    const reduceCounter = () => {
        if (number == 1) {
            setNumber(1)
        } else {
            setNumber(number - 1)
        }
    }


    if (item.stock != 0) {
        return (<>
        <div className="container--values">
            <p>Price ${item.price}</p>
            <div className="counter-console">
                <button onClick={reduceCounter}>-</button>
                <button onClick={sumCounter}>+</button>
                <div>{number}</div>
            </div>
        </div>
        <button onClick={(e) => addItem(item.id,number)}>Add to your backpack</button>
        </>
        )
    } else {
        return (<>
        <div className="container--values">
                <p>Price ${item.price}</p>
            <div className="counter-console">
                <div className='noStock'>SOLD OUT</div>
                <button onClick={reduceCounter}>-</button>
                <button onClick={sumCounter}>+</button>
            <div>{number}</div>
            </div>
        </div>
        <button disabled>Add to your backpack</button>
        </>)
    }
}

export default ItemCounter;