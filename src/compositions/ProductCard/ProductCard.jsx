import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {selectorFavoriteList, selectorCartList} from "../../store/selectors.js";
import {useSelector, useDispatch} from "react-redux";


import Image from "../../Components/Image/Image.jsx";
import Button from "../../Components/Button/Button.jsx";
import Text from "../../Components/Text/Text.jsx";
import ListItem from "../../Components/ListItem/ListItem.jsx";






const ProductCard = ({
                         imageUrl,
                         name,
                         category,
                         price,
                         article,
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

    const dispatch = useDispatch();

    useEffect(() => {
        if (favoriteList.length > 0 && favoriteList.some((card) => card.article === article)){

            setIsAddFavorite(true)
        }else {
            setIsAddFavorite(false)
        }

        if (cartList.length > 0 && cartList.some((card) => card.article === article)){

            setIsAddCart(true)
        }else {
            setIsAddCart(false)
        }
    })

    return (

        <>
            <ListItem classNames={'product-card'} id={article}>
                <Image src={imageUrl}
                       classNames={'product-card__img'}
                       alt={'product-photo'}/>
                <div className={'product-card__info'}>
                    <div className={'product-card__section'}>
                        <Text classNames={'product-card__description'}
                              children={name}/>
                        <Text classNames={'product-card__category'}
                              children={category}/>
                    </div>
                    <Text classNames={'product-card__price'} children={price + ' грн'}/>
                </div>
                {isCart && (<Text classNames={'in-cart'} children={'In cart: ' + amount + ' шт.' }/>)}
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
