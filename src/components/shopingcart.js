const ShoppingCart = () => {
    return (
        <section className="shoping-cart">
            <div className="cart-items">
                <div className="cart-title">
                    <div>Shopping Cart</div>
                    <div className="number-items">3 items</div>
                </div>
                <div className="cart-item-list">
                    <div className="cart-item"></div>
                    <div className="cart-item"></div>
                    <div className="cart-item"></div>
                    <div className="cart-item"></div>
                    <div className="cart-item"></div>
                    <div className="cart-item"></div>
                    <div className="cart-item"></div>
                </div>
            </div>
            <div className="cart-summary">
                <div className="cart-summary-title">
                    <h2>Summary</h2>
                </div>
                <div className="cart-item-prices">
                    <div className="item-price" >
                        <p>Items 3</p>
                        <p>$ 132.99</p>
                    </div>
                    <div className="shipping s">
                        <label>SHIPPING</label>
                        <select>
                            <option>Standard Delivery: €5.00</option>
                            {/* Add more shipping options if necessary */}
                        </select>
                    </div>
                    <div className="code s" >
                        <label>GIVE CODE</label>
                        <div className="input-with-arrow">
                            <input type="text" placeholder="Enter your code" />
                            <button className="arrow-button">→</button>
                        </div>
                    </div>
                    <div className="cart-total-price" >
                        <div className="cart-total">
                            <span>TOTAL PRICE</span>
                            <span>€137.00</span>
                        </div>
                        <div className="cart-checkout">
                            <button className="checkout-button">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ShoppingCart;