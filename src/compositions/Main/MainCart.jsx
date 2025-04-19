import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectorCartList, selectorFavoriteList, selectorTotalPrice} from "../../store/selectors.js";
import {
    actionCartList, actionDeleteAllInCart, actionDeleteInCart,
    actionFavoriteList,
    actionStartCart,
    actionStartFavorite
} from "../../store/slices/app.slice.js";

import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import Title from "../../Components/Title/Title.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import Text from "../../Components/Text/Text.jsx";
import Button from "../../Components/Button/Button.jsx";
import RenderDeleteModal from "../RenderModal/RenderDeleteModal.jsx";
import RenderModal from "../RenderModal/RenderModal.jsx";
import {Link} from "react-router-dom";

import './Main.scss'


const MainCart = () => {

    const [isHasCart, setIsHasCart] = useState(false);
    const [cart, setCart] = useState({});
    const [isCartPage, setIsFavoritePage] = useState(true);

    const favoriteList = useSelector(selectorFavoriteList);
    const cartList = useSelector(selectorCartList);
    const totalPrice = useSelector(selectorTotalPrice)
    const dispatch = useDispatch();


    useEffect(() => {
        const favoriteInSession = sessionStorage.getItem('favoriteList');
        const favoriteInArr = JSON.parse(favoriteInSession);

        if (favoriteInArr !== null) {
            favoriteInArr.forEach((item) =>
            {
                dispatch(actionStartFavorite(item));

            })
        }

        const cartInSession = sessionStorage.getItem('cartList');
        const cartInArr = JSON.parse(cartInSession);

        if (cartInArr !== null) {

            cartInArr.forEach((item) => {
                let priseCount = +item.amount * +item.price;
                dispatch(actionStartCart(item));
                setIsHasCart(true)
            })
        }
    }, []);

    const [currentCard, setCurrentCard] = useState({});

    const [isModal, setIsModal] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isAddFavorite, setIsAddFavorite] = useState(false);
    const [isAddCart, setIsAddCart] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [amount, setAmount] = useState(0);
    const [amountDelete, setAmountDelete] = useState(0);

    const handleCloseModal = () => {
        setIsModal(false);
        setIsCart(false);
        setIsFavorite(false);
    }

    const handleCloseDeleteModal = () => {
        setIsDelete(false)
    }

    const isInAnyList = (list, switcher, card) => {

        if (list.some((item) => item.article === card.article)) {
            switcher(true);
        } else {
            switcher(false);
        }
    }

    const handleClickCart = (card) => {

        setCurrentCard(card);

        setIsModal(true);
        setIsCart(true);
    }

    const handleClickFavorite = (card) => {
        setCurrentCard(card);

        isInAnyList(favoriteList, setIsAddFavorite, card)

        setIsModal(true);
        setIsFavorite(true);
    }

    const handleAddFavorite = (card) => {

        dispatch(actionFavoriteList(card))

        handleCloseModal()

    }


    const handleAddCart = () => {

        if (amount < 1 || amount > 10) {
            alert('Не може бути меньше 1 і більше 10')
        } else {

            let cardWithAmount = {...currentCard};
            cardWithAmount.amount = amount


            dispatch(actionCartList(cardWithAmount))

            handleCloseModal()
        }
    }

    const handleChange = (event) => {

        setAmount(event.target.value)
    }

    const handleChangeDelete = (event) => {
        setAmountDelete(event.target.value)
    }

    const handleRemoveCart = () => {
        cartList.forEach((item) => {

            if (item.article === currentCard.article) {
                setAmount(+item.amount);
                setIsDelete(true);
            }
        })
    }


    const handleDeleteCart = () => {

        if (amountDelete < 1 || amountDelete > amount) {
            alert('Не може бути меньше 1 і більше ' + amount)
        } else {

            let cardWithAmount = {...currentCard};
            cardWithAmount.amount = amountDelete

            dispatch(actionDeleteInCart(cardWithAmount))

            setIsDelete(false)

        }
    }

    const handleDeleteAllCart = () => {
        dispatch(actionDeleteAllInCart(currentCard))

        setIsDelete(false);
    }

    return (

        <main className={isHasCart ? 'cart-main' : ''}>
            {!isHasCart && (<Title classNames={'favorites-empty'} children={'Cart is empty'}/>)}
            {isHasCart && (
                <ListContainer classNames={'products-container cart-container'}>
                    {cartList.map((card) => (

                        <ProductCard
                            key={card.article}
                            imageUrl={card.photoUrl}
                            price={card.price}
                            category={card.category}
                            name={card.name}
                            article={card.article}
                            isFavoritePage={true}
                            isCartPage={isCartPage}
                            isCart={true}
                            amount={card.amount}
                            onClickFavorite={() => handleClickFavorite(card)}
                            onClickCart={() => handleClickCart(card)}
                        />
                    ))}
                    <RenderModal onClose={handleCloseModal}
                                 isModal={isModal}
                                 isFavorite={isFavorite}
                                 isCart={isCart}
                                 isAddFavorite={isAddFavorite}
                                 imageURL={currentCard.photoUrl}
                                 name={currentCard.name}
                                 category={currentCard.category}
                                 onAddFavorite={() => handleAddFavorite(currentCard)}
                                 onRemoveFavorite={() => handleAddFavorite(currentCard)}
                                 onAddCart={handleAddCart}
                                 isAddCart={isAddCart}
                                 onRemoveCart={handleRemoveCart}
                                 onChange={() => handleChange(event)}
                    />
                    <RenderDeleteModal isModal={isDelete}
                                       amount={amount}
                                       onClose={handleCloseDeleteModal}
                                       onDeleteAll={handleDeleteAllCart}
                                       onDeleteNumber={handleDeleteCart}
                                       onChange={() => handleChangeDelete(event)}
                    />
                </ListContainer>
            )}
            {isHasCart && (
                <div className={'total'}>
                    <Text classNames={'total__summary'} children={'Summary'}/>

                    <Text classNames={'total__total'}>
                        Total
                        <span className={'total__total__prise'}>{totalPrice + ' грн'}</span>
                    </Text>
                    <Button classNames={'cart-buy__button'} to={'checkout'} children={'Buy'}/>
                </div>
            )}
        </main>
    )
}

export default MainCart