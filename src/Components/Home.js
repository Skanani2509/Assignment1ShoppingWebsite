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
        </div>
    );
};

export default Home;