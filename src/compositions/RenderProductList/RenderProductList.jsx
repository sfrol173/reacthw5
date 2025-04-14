import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchMenGoods} from "../../store/slices/men.slice.js";
import {actionFavoriteList,
    actionStartFavorite, actionCartList,
    actionStartCart,
    actionDeleteInCart,
    actionDeleteAllInCart} from "../../store/slices/app.slice.js";
import {selectorMenCards, selectorFavoriteList, selectorCartList} from "../../store/selectors.js";



import ProductCard from "../ProductCard/ProductCard.jsx";
import ListContainer from "../../Components/ListContainer/ListContainer.jsx";
import RenderModal from "../RenderModal/RenderModal.jsx";
import RenderDeleteModal from "../RenderModal/RenderDeleteModal.jsx";


const RenderProductsList = () => {

    const menCards = useSelector(selectorMenCards);
    const favoriteList = useSelector(selectorFavoriteList);
    const cartList = useSelector(selectorCartList)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchMenGoods());

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
                dispatch(actionStartCart(item))
            })
        }


    }, [])


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
        console.log(card)

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
        <ListContainer classNames={'products-container'}>
            {menCards.map((card) => (
                <ProductCard
                    key={card.article}
                    imageUrl={card.photoUrl}
                    price={card.price}
                    category={card.category}
                    name={card.name}
                    article={card.article}
                    onClickFavorite={() => handleClickFavorite(card)}
                    onClickCart={() => handleClickCart(card)}/>
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

    )
}

export default RenderProductsList