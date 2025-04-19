import React, {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {selectorFavoriteList, selectorCartList} from "../../store/selectors.js";
import {useSelector, useDispatch} from "react-redux";
import {Context} from "../../Context/context.jsx";


import Image from "../../Components/Image/Image.jsx";
import Button from "../../Components/Button/Button.jsx";
import Text from "../../Components/Text/Text.jsx";
import ListItem from "../../Components/ListItem/ListItem.jsx";


const ProductCard = ({
                         imageUrl,
                         name,
                         category,
                         price,
                         article, isBlock = true,
                         isFavoritePage = false,
                         isCartPage = false,
                         onClickFavorite,
                         onClickCart,
                         isCart,
                         amount
                     }) => {


    const [isAddFavorite, setIsAddFavorite] = useState(false);
    const [isAddCart, setIsAddCart] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const favoriteList = useSelector(selectorFavoriteList);
    const cartList = useSelector(selectorCartList);

    const context = useContext(Context);

    const dispatch = useDispatch();

    useEffect(() => {
        if (favoriteList.length > 0 && favoriteList.some((card) => card.article === article)) {

            setIsAddFavorite(true)
        } else {
            setIsAddFavorite(false)
        }

        if (cartList.length > 0 && cartList.some((card) => card.article === article)) {

            setIsAddCart(true)
        } else {
            setIsAddCart(false)
        }
    })

    return (

        <>
            <ListItem classNames={context.isBlock && ('product-card')
                || isFavoritePage && ('product-card')
                || ('product-card inList__item')} id={article}>
                <Image src={imageUrl}
                       classNames={context.isBlock && ('product-card__img')
                           || isFavoritePage && ('product-card__img')
                           || ('product-card__img inList__image')}
                       alt={'product-photo'}/>
                <div className={context.isBlock && ('product-card__info')
                    || isFavoritePage && ('product-card__info')
                    || ('product-card__info inList__info')}>
                    <div className={'product-card__section'}>
                        <Text classNames={context.isBlock && ('product-card__description')
                            || isFavoritePage && ('product-card__description')
                            || ('product-card__description inList__description')}
                              children={name}/>
                        <Text classNames={'product-card__category'}
                              children={category}/>
                    </div>
                    <Text classNames={context.isBlock && ('product-card__price')
                        || isFavoritePage && ('product-card__price')
                        || ('product-card__price inList__prise')} children={price + ' грн'}/>
                </div>
                {isCart && (<Text classNames={'in-cart'} children={'In cart: ' + amount + ' шт.'}/>)}
                <div className={'card-buttons'}>
                    {!isAddFavorite && (<Button classNames={'card-button card-favorite'}
                                                type={'button'}
                                                onClick={onClickFavorite}
                    />) || (<Button classNames={'card-button in-favorite'}
                                    type={'button'}
                                    onClick={onClickFavorite}
                    />)}
                    {!isAddCart && (<Button classNames={'card-button card-cart'}
                                            type={'button'}
                                            onClick={onClickCart}
                    />) || (<Button classNames={'card-button in-cart'}
                                    type={'button'}
                                    onClick={onClickCart}
                    />)}
                </div>
            </ListItem>
        </>

    )

}

ProductCard.protoTypes = {
    imageURL: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    key: PropTypes.string
}

export default ProductCard
