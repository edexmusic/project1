import "./home.css";
import React from "react";
import Card from "./card/card";

const Home = (state) => {


    return (
        <div className='container'>
            <div className="home-component">
                <div className="sidebar">
                    <ul className="sidebar-list">
                        <li className="sidebar-list-option">
                            <a href="#">Shoes</a>
                        </li>
                        <li className="sidebar-list-option">
                            <a href="#">T-Shirts</a>
                        </li>
                        <li className="sidebar-list-option">
                            <a href="#">Accessories</a>
                        </li>
                        <li className="sidebar-list-option">
                            <a href="#">Shorts</a>
                        </li>
                        <li className="sidebar-list-option">
                            <a href="#">Bags</a>
                        </li>
                    </ul>
                </div>
                <div className="product_container">
                    {state.state.map((product) => <Card key={product.id} {...product} />)}
                </div>


            </div>
        </div>
    )
}

export default Home;
