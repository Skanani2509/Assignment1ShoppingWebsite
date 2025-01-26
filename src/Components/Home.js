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
                        <h3>{product.name}</h3> 
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        
                        <input 
                            type ="number"
                            min="1"
                            placeholder="Quantity"
                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                        />
                        
                        <button>
                            
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;