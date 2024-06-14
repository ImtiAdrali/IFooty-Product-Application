const ProductModal = () => {
    return (
        <div className="product-modal-container">
            <div className="product-modal">
                <div className="col1">
                    Product Names Goes here
                </div>
                <div className="col2" >
                    <div className="product-description">
                        <div>Styling Product</div>
                        <div>
                            <h1>MB by The Gentry Matte Texturising Spray 250ml</h1>
                        </div>
                        <div>
                            <p>Time should be increased in the time which requires to include code in the prompt because we cannot write 3 code + justification in just 1.5 hrs . It should be 2 hrs. Today if I had 15 minutes more then I would have completed that task but my 1.5 hrs got wasted because I was not able to submit that task. Admin expect us to write own code and also in minimal time which is not possible.</p>
                        </div>
                    </div>
                </div>
                <div className="col3" >
                    <div>
                        <img src="/images/3.jpg" width={"100%"}/>
                    </div>
                </div>
                <div className="col4" >
                    <p>Price</p>
                    <p>Stock</p>
                    <p>Shipping type</p>
                </div>
                <div className="col5" >
                    <div></div>
                    <div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductModal;