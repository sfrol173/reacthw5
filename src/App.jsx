import React, {useState, useEffect, useContext} from 'react'
import {Routes, Route} from "react-router-dom";


import Header from "./compositions/Header/Header.jsx";
import Footer from "./compositions/Footer/Footer.jsx";
import MenShopPage from "./pages/MenShopPage.jsx";
import Favorites from "./pages/Favorites.jsx";
import Cart from "./pages/Cart.jsx";
import MainCheckout from "./compositions/Main/MainCheckout.jsx";


function App() {


    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MenShopPage/>}/>
                <Route path={'/favorites'} element={<Favorites/>} />
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/cart/checkout'}  element={<MainCheckout/>}/>
            </Routes>
            <Footer/>
        </>

    )

}

export default App
