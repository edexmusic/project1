import "./home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='container'>
            <div className="home-component">
                <div className="sidebar">
                    <ul className="sidebar-list">
                        <li className="sidebar-list-option">
                            <a href="">shoes</a>
                        </li>
                        <li className="sidebar-list-option">
                            <a href="">shirts</a>
                        </li>
                        <li className="sidebar-list-option">
                            <a href="">hats</a>
                        </li>
                        <li className="sidebar-list-option">
                            <a href="">watches</a>
                        </li>
                        <li className="sidebar-list-option">
                            <a href="">glasses</a>
                        </li>
                    </ul>
                </div>
                <div className="card-holder container">
                    <div className="cards">
                        <div className="card">
                            <p>category: clothes</p>
                            <h3>Zara shirt - L size</h3>
                            <h4>40$</h4>
                        </div>
                        <div className="card">
                            <p>category: shoes</p>
                            <h3>Adidas shoes - 44 size</h3>
                            <h4>190$</h4>
                        </div>
                        <div className="card">
                            <p>category: shoes</p>
                            <h3>Nike shoes - 44 size</h3>
                            <h4>140$</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
