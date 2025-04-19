import React from "react";
import {render,screen, fireEvent} from "@testing-library/react";
import renderModal from "./RenderModal.jsx";
import RenderDeleteModal from "./RenderDeleteModal.jsx";
import RenderModal from "./RenderModal.jsx";

const handleChange = jest.fn()
const handleClick = jest.fn()

describe('RenderModal and RenderDeleteModal test', () => {
    it('test open RenderModal', () => {
        const {container} = render(<RenderModal isModal={true}/>)
        const modalOpen = container.querySelector('.modal-wrapper')
        expect(modalOpen).toBeInTheDocument()
    });

    it('test RenderModal Favorite not added', () => {
        const renderModal = render(<RenderModal isModal={true}
                                                isFavorite={true}
                                                isAddFavorite={false}
                                                isCart={false}
                                                isAddCart={false}
                                                onChange={handleChange}
                                                onAddCart={handleClick}
                                                onRemoveCart={handleClick}
                                                onRemoveFavorite={handleClick}
                                                onAddFavorite={handleClick}
                                                onClose={handleClick}/>)

        expect(renderModal.getByText('ADD FAVORITE')).toBeInTheDocument()
    });

    it('test RenderModal Favorite added', () => {
        const renderModal = render(<RenderModal isModal={true}
                                        isFavorite={true}
                                        isAddFavorite={true}
                                        isCart={false}
                                        isAddCart={false}
                                        onChange={handleChange}
                                        onAddCart={handleClick}
                                        onRemoveCart={handleClick}
                                        onRemoveFavorite={handleClick}
                                        onAddFavorite={handleClick}
                                        onClose={handleClick}/>)

        expect(renderModal.getByText('REMOVE ITEM')).toBeInTheDocument()
    });

    it('test RenderModal Cart not added', () => {
        const renderModal = render(<RenderModal isModal={true}
                                        isFavorite={false}
                                        isAddFavorite={false}
                                        isCart={true}
                                        isAddCart={false}
                                        onChange={handleChange}
                                        onAddCart={handleClick}
                                        onRemoveCart={handleClick}
                                        onRemoveFavorite={handleClick}
                                        onAddFavorite={handleClick}
                                        onClose={handleClick}/>)

        expect(renderModal.getByText('ADD TO CART')).toBeInTheDocument()
    });

    it('test RenderModal Cart added', () => {
        const renderModal = render(<RenderModal isModal={true}
                                                isFavorite={false}
                                                isAddFavorite={false}
                                                isCart={true}
                                                isAddCart={true}
                                                onChange={handleChange}
                                                onAddCart={handleClick}
                                                onRemoveCart={handleClick}
                                                onRemoveFavorite={handleClick}
                                                onAddFavorite={handleClick}
                                                onClose={handleClick}/>)

        expect(renderModal.getByText('REMOVE ITEM')).toBeInTheDocument()
    });

    it('test open DeleteModal', () => {
        const {container} = render(<RenderDeleteModal isModal={true}
                                                      onChange={handleChange}
                                                      onDeleteNumber={handleClick}
                                                      onDeleteAll={handleClick}
                                                      onClose={handleClick}/>)
        const modalOpen = container.querySelector('.modal-wrapper')
        expect(modalOpen).toBeInTheDocument()
    });
});