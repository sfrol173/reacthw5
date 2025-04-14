import React from "react";

import ModalWrapper from "../../components/Modal/ModalWrapper.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import Title from "../../components/Title/Title.jsx";
import Text from "../../components/Text/Text.jsx";
import Button from "../../components/Button/Button.jsx";
import ModalClose from "../../components/Modal/ModalClose.jsx";
import Input from "../../components/Input/Input.jsx";

const RenderDeleteModal = ({isModal, onClose, amount, onDeleteNumber, onDeleteAll, onChange}) => {

    return (
        <ModalWrapper isOpen={isModal} onClick={onClose}>
            <Modal className={'delete-modal'}>
                <ModalClose onClick={onClose}/>
                <Title classNames={'delete-title'} children={'Видалення з корзини'}/>
                <Text classNames={'delete-text'} children={'В корзині ' + amount + ' товарів'}>
                </Text>
                <Text classNames={'delete-text'} children={'Скільки бажаєте видалити?'}/>

                <Input type={'number'} id={'delete-number'} name={'delete-cart'} min={1} max={amount} onChange={onChange}/>
                <Button type={'button'} classNames={'delete-remove number__button'} onClick={onDeleteNumber} children={'Remove'}/>
                <Button type={'button'} classNames={'delete-remove all'} onClick={onDeleteAll} children={'Remove All'}/>
            </Modal>
        </ModalWrapper>
    )
}

export default RenderDeleteModal