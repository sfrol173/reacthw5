import React, {useEffect, useState} from "react";
import {selectorFavoriteList} from "../../store/selectors.js";
import {useDispatch, useSelector} from "react-redux";
import {actionFavoriteList} from "../../store/slices/app.slice.js";

import Aside from "../Aside/Aside.jsx";
import Title from "../../Components/Title/Title.jsx";
import RenderProductsList from "../RenderProductList/RenderProductList.jsx";

import './Main.scss'


const Main = () => {

    return (

        <main>
            <Title classNames={'main__title'} children={'Men Shop'}/>
            <div className={'main__sections'}>
                <Aside/>
                <RenderProductsList/>
            </div>
        </main>
    )
}

export default Main