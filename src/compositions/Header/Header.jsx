import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";


import Logo from "../../Components/Logo/Logo.jsx";
import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import ListItem from "../../Components/ListItem/ListItem.jsx";
import {Link} from "react-router-dom";
import HeaderBox from "./HeaderBox.jsx";
import Input from "../../Components/Input/Input.jsx";


import './Header.scss'
import {selectorCartNum, selectorFavoriteNum} from "../../store/selectors.js";




const Header = ({onFavoriteClick, onCartClick, inCart, inFavorite}) => {

    const favoriteNum = useSelector(selectorFavoriteNum)
    const cartNum = useSelector(selectorCartNum)
    const dispatch = useDispatch()
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
                        <span className={'favorite-num'}>{favoriteNum}</span>
                    </Link>
                    <Link to={'/cart'}  className='header-button cart' >
                        <span className={'cart-num'}>{cartNum}</span>

                    </Link>
                </div>
            </HeaderBox>
        </>
    )
}

export default Header