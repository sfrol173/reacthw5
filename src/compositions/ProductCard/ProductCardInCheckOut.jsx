import React from "react";
import PropTypes from "prop-types";


import Image from "../../Components/Image/Image.jsx";
import Text from "../../Components/Text/Text.jsx";
import ListItem from "../../Components/ListItem/ListItem.jsx";






const ProductCardInCheckOut = ({
                         imageUrl,
                         name,
                         color,
                         price,
                         article,
                         amount
                     }) => {

    return (

        <>
            <ListItem classNames={'checkout-card'} id={article}>
                <Image src={imageUrl}
                       classNames={'checkout-card__img'}
                       alt={'product-photo'}/>
                <div className={'product-card__info'}>
                    <div className={'product-card__section'}>
                        <Text classNames={'checkout-card__text'}>{name} <span className={'checkout-card__marker'}>x {amount}</span></Text>
                        <Text classNames={'checkout-card__text'}>Color: <span className={'checkout-card__marker'}>{color}</span> </Text>
                    </div>
                    <Text classNames={'checkout-card__total-price'} children={price * amount + ' грн'}/>
                </div>
            </ListItem>
        </>

    )

}
ProductCardInCheckOut.protoTypes = {
    imageURL: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string
}

export default ProductCardInCheckOut
