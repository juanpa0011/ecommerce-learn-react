const CartList = () => {

    
    const mockList = [];

    if (mockList.length == 0) {
        return (
            <div className="container--cart">
                <div className="table--header">
                    <div></div>
                    <h4>Products</h4>
                    <h4>Price</h4>
                    <h4>Actions</h4>
                </div>
                <div className="table--item">
                    <div className="empty-cart">
                        There are no items in your backpack!
                    </div>
                </div>
                <div className="table--footer">
                    <div></div>
                    <div></div>
                    <h4>Sum: $0.00</h4>
                </div>
            </div>
            )
    } else {
        return (
            <div className="container--cart">
                <div className="table--header">
                    <div></div>
                    <h4>Products</h4>
                    <h4>Price</h4>
                    <h4>Actions</h4>
                </div>
                <div className="table--item"></div>
                <div className="table--footer">
                    <div></div>
                    <div></div>
                    <h4>Sum: $0.00</h4>
                </div>
            </div>
            )
    }

    return (
    <div className="container--cart">
        <div className="table--header">
            <div></div>
            <h4>Products</h4>
            <h4>Price</h4>
            <h4>Actions</h4>
        </div>
        <div className="table--item"></div>
        <div className="table--footer">
            <div></div>
            <div></div>
            <h4>Sum: $0.00</h4>
        </div>
    </div>
    )
}

export default CartList