import React from "react";
import './style.css';
import search from '../assets/images/search-icon.png'
 
const Header = ()=> {
    return (
        <header className="e-commerce-website" >
            <div className="navmenu">
                <div className="logo">ELROL SHOPPING</div>
                <nav className="navcontainer" >
                    <ul className="navbar">
                        <li className="text-wrapper-1  text-wrapper"><a href=""/>HOME</li>
                        <li className="text-wrapper-2  text-wrapper"><a href=""/>SHOP</li>
                        <li className="text-wrapper-3  text-wrapper"><a href=""/>ABOUT</li>
                        <li className="text-wrapper-4  text-wrapper"><a href=""/>CONTACT</li>
                        {/* <img className="search-icon" alt="Vector" src={search} /> */}
                        {/* <img className="img" alt="Vector" src={image} /> */}
                        {/* <img className="vector-2" alt="Vector" src={vector2} /> */}
                    </ul>
                </nav>
            </div>
            {/* <div className="shop-button">
             <button className="shop-now">SHOP NOW</button>
            </div> */}
        </header>
    )

}
export default Header