import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectorCartList, selectorTotalPrice} from "../../store/selectors.js";
import Title from "../../components/Title/Title.jsx";
import CheckoutForm from "../Form/CheckoutForm.jsx";
import ListContainer from "../../components/ListContainer/ListContainer.jsx";
import ProductCardInCheckOut from "../ProductCard/ProductCardInCheckOut.jsx";


import './Main.scss'
import {actionStartCart, actionStartFavorite} from "../../store/slices/app.slice.js";
import Text from "../../components/Text/Text.jsx";
import Button from "../../components/Button/Button.jsx";
import {Link} from "react-router-dom";


const MainCheckout = () => {

    const cartList = useSelector(selectorCartList);
    const totalPrise = useSelector(selectorTotalPrice);
    const dispatch = useDispatch();

    const [isHasCart, setIsHasCart] = useState(false)
    const [isBuy, setIsBuy] = useState(false)

    useEffect(() => {
        const favoriteInSession = sessionStorage.getItem('favoriteList');
        const favoriteInArr = JSON.parse(favoriteInSession);

        if (favoriteInArr !== null) {
            favoriteInArr.forEach((item) => {
                dispatch(actionStartFavorite(item));
            })
        }

        const cartInSession = sessionStorage.getItem('cartList');
        const cartInArr = JSON.parse(cartInSession);

        if (cartInArr !== null) {
            cartInArr.forEach((item) => {
                dispatch(actionStartCart(item))
                setIsHasCart(true);
            })
        }
    }, []);

    const handleSubmit = () => {
        setIsBuy(true)
        setIsHasCart(false)
    }

    return (

        <main>
            {!isHasCart && !isBuy && (<Title classNames={'favorites-empty'} children={'Cart is empty'}/>)}
            {isBuy && (
                <>
                    <Title classNames={'favorites-empty'} children={'Thank for buying'}/>
                    <Button to={'/'} className={'nav-item'} children={'Back to shop'}/>
                </>
            )}
            {isHasCart && (
                <>
                    <Title classNames={'main__title'} children={'Check Out'}/>
                    <Title classNames={"checkout-title"} children={'Billing Details'}/>
                    <div className={'checkout'}>
                        <CheckoutForm onSubmit={() => handleSubmit()}/>
                        <div className={'checkout-cart'}>
                            <Title classNames={'checkout-cart__title'} children={'Order Summary'}/>
                            <ListContainer classNames={'checkout-cart__list'}>
                                {cartList.map((card) => (

                                    <ProductCardInCheckOut
                                        key={card.article}
                                        imageUrl={card.photoUrl}
                                        price={card.price}
                                        color={card.color}
                                        name={card.name}
                                        article={card.article}
                                        amount={card.amount}
                                    />
                                ))}
                            </ListContainer>
                            <div className={'checkout-cart__footer'}>
                                <Text classNames={'checkout-cart__total'} children={'Total'}/>
                                <Text classNames={'checkout-cart__total'}>{totalPrise} грн.</Text>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    )


}

export default MainCheckout