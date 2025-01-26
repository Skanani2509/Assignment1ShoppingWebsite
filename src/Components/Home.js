import React, {useState} from "react";
import {products} from "../data/products";

const Home = ({ addToCart }) => {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, qty) => {
        setQuantities({ ...quantities, [id]: qty});
    };

    return(
        <div>
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} style={{ width: "150px" }}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;