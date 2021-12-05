const CartWidget = (params) => {
    return (
        <>
            <div id='header--cart'>
                <p>Cart</p>
                <div>
                    <p>{params.itemNum}</p>
                </div>
            </div>
        </>
    )
}

export default CartWidget;