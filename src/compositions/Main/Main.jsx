import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../Context/context.jsx";

import Aside from "../Aside/Aside.jsx";
import Title from "../../Components/Title/Title.jsx";
import RenderProductsList from "../RenderProductList/RenderProductList.jsx";
import Button from "../../components/Button/Button.jsx";

import './Main.scss'


const Main = () => {

    const context = useContext(Context);

    return (

        <main>
            <Title classNames={'main__title'} children={'Men Shop'}/>
            <div className={'main__sections'}>
                <Aside/>
                <div>
                        <div className={'list-button'}>
                            <Button type={'button'}
                                    classNames={ context.isBlock && ('list-button__block block-active')
                                        || ('list-button__block')}
                                    onClick={context.handleBlockSwitcher}/>
                            <Button type={'button'}
                                    classNames={!context.isBlock && ('list-button__list list-active') ||
                                        ('list-button__list')}
                                    onClick={context.handleListSwitcher}/>
                        </div>
                        <RenderProductsList/>
                </div>
            </div>
        </main>
    )
}

export default Main