import React, {useEffect} from "react";


import Logo from "../../Components/Logo/Logo.jsx";
import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import ListItem from "../../Components/ListItem/ListItem.jsx";
import {Link} from "react-router-dom";
import HeaderBox from "./HeaderBox.jsx";
import Input from "../../Components/Input/Input.jsx";


import './Header.scss'




const Header = ({onFavoriteClick, onCartClick, inCart, inFavorite}) => {


    return (
        <>
            <HeaderBox>
                <Logo />
                <ListContainer classNames={'nav'}>
                    <ListItem>
                        <Link to={'/'} className={'nav-item'} children={'Shop'}/>
                    </ListItem>
                    <ListItem>
                        <Link to={'/'} className={'nav-item in-active'} children={'Men'}/>
                    </ListItem>
                    <ListItem>
                        <Link to={'/'} className={'nav-item'} children={'Women'}/>
                    </ListItem>
                    <ListItem>
                        <Link to={'/'} className={'nav-item'} children={'Combos'}/>
                    </ListItem>
                    <ListItem>
                        <Link to={'/'} className={'nav-item'} children={'Joggers'}/>
                    </ListItem>
                </ListContainer>
                <Input name={'search'} id={'search'} placeholder={'Search'}/>
                <div className={'header-buttons'}>
                    <Link to={'/favorites'} className='header-button favorite' >
                        <span className={'favorite-num'}>0</span>
                    </Link>
                    <Link to={'/cart'}  className='header-button cart' >
                        <span className={'cart-num'}>0</span>

                    </Link>
                </div>
            </HeaderBox>
        </>
    )
}

export default Header