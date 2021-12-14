import { useState } from "react";

const ItemCounter = (params) => {

    const [number, setNumber] = useState(0);

    const sumCounter = () => {
        if (number == params.item.stock) {
            setNumber(params.item.stock)
        } else {
            setNumber(number + 1)
        }
    }

    const reduceCounter = () => {
        if (number == 0) {
            setNumber(0)
        } else {
            setNumber(number - 1)
        }
    }

    if (params.item.stock != 0) {
        return <div className="counter-console">
            <button onClick={reduceCounter}>-</button>
            <button onClick={sumCounter}>+</button>
            <div>{number}</div>
        </div>
    } else {
        return <div className="counter-console">
            <div className='noStock'>SOLD OUT</div>
            <button onClick={reduceCounter}>-</button>
            <button onClick={sumCounter}>+</button>
            <div>{number}</div>
        </div>
    }
}

export default ItemCounter;