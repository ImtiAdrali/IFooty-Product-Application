import { useState } from "react";
import ProductModal from "./productmodal";

const Products = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [product, setProduct] = useState(false)

    const hanldePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + 6) % 6);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % 6);
    }

    const showProduct = () => {
        setProduct(!product);
    }


    const products = [
        {
            id: 1,
            name: "product 1",
            url: "/images/318.jpg"
        },
        {
            id: 2,
            name: "product 2",
            url: "/images/2.jpg"
        },
        {
            id: 3,
            name: "product 3",
            url: "/images/3.jpg"
        },
        {
            id: 4,
            name: "product 4",
            url: "/images/318.jpg"
        },
        {
            id: 5,
            name: "product 5",
            url: "/images/2.jpg"
        },
        {
            id: 6,
            name: "product 6",
            url: "/images/3.jpg"
        }
    ]




    return (
        <section className="product-section">
            <div className="arrow left-arrow">
                <button onClick={hanldePrevClick}><i className="fas fa-angle-left"></i></button>
            </div>
            <div className="products">
                {
                    products.slice(currentIndex, currentIndex + 4).map((product) => {
                        return (
                            <div className="product" onClick={showProduct}>
                                <div className="product-details">
                                    <div className="product-image">
                                        <img src={product.url} />
                                    </div>
                                    <div className="product-info">
                                        <p className="p-name">{product.name}</p>
                                        <span className="p-price">$499.99</span>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="arrow right-arrow">
                <button onClick={handleNextClick}><i className="fas fa-angle-right"></i></button>
            </div>

            {product && <ProductModal /> }
        </section>
    )
};

export default Products;