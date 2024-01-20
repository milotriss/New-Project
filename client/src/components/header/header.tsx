import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { GiPaperBagOpen } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import Login from "../login/login";

const Header = (): JSX.Element => {
  const [onLogin,setOnLogin] = useState<boolean>(false);  
  const offLogin = ():void => {
    setOnLogin(false)
  }
  return (
    <header className="header">
      {onLogin ? <Login offLogin={offLogin}/> : null}
      <h1>
        <span>Huong </span>Bakery
      </h1>
      <ul className="navigate">
        <Link to={"/"}>Home</Link>
        <a href="#catalog">Catalog</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#event">Event</a>
        <a href="#workshop">Work Shop</a>
      </ul>
      <div className="headerLogin">
        <button onClick={() => setOnLogin(true)} className="btnLogin">Login</button>
      </div>
      {/* <div className="headerLogout">
        <div className="headerCart">
          <GiPaperBagOpen className="iconCart" />
          <div className="textCart">
            <p>2</p>
            <span className="headerSeparate"></span>
            <p>Price</p>
          </div>
        </div>
        <div className="headerProfile">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/avatar%2Fz4992343079898_79cb9f460c2b80c7f17fd0bf15124bf0.jpg?alt=media&token=f3a64301-be8f-421e-84cb-5966a8a6fe92"
            alt=""
          />
          <p>Hi, Lam Nhat Tien</p>
          <TiArrowSortedDown className="iconSup"/>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
