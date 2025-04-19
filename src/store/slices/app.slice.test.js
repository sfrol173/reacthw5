import appReducer, {
    actionDeleteAfterBuying,
    actionDeleteInCart,
    actionStartCart,
    actionStartFavorite,
    actionUserInfo,
    actionDeleteAllInCart,
    actionCartList,
    actionFavoriteList
} from './app.slice.js'
import {render} from "@testing-library/react";

describe('Testing Reducer App slices', () => {
    it('Test init state', () => {
        expect(appReducer(undefined, {type: undefined})).toEqual({
            favoriteList: [],
            cartList: [],
            totalPrice: 0,
            userInfo:{},
            favoriteNum: 0,
            cartNum: 0
        })
    });
    it('testing actionFavoriteList case ADD', () => {
        const initialState = {
            favoriteList: [],
            favoriteNum: 0
        }

        expect(appReducer(initialState, actionFavoriteList({article: 123456789, name: 'King'}))).toStrictEqual({
            favoriteList: [{article: 123456789, name: 'King'}], favoriteNum: 1
        })
    });

    it('testing actionFavoriteList case Dell ', () => {
        const initialState = {
            favoriteList: [{article: 987654321, name: 'Lion'}, {article: 123456789, name: 'King'}],
            favoriteNum: 2
        }

        expect(appReducer(initialState, actionFavoriteList({article: 123456789, name: 'King'}))).toStrictEqual({
            favoriteList: [{article: 987654321, name: 'Lion'}], favoriteNum: 1
        })
    });

    it('testing actionStartFavorite case empty state', () => {
        const initialState = {
            favoriteList: [],
            favoriteNum: 0
        }

        expect(appReducer(initialState, actionStartFavorite ({article: 123456789, name: 'King'}))).toStrictEqual({
            favoriteList: [{article: 123456789, name: 'King'}], favoriteNum: 1
        })
    });

    it('testing actionStartFavorite case ADD', () => {
        const initialState = {
            favoriteList: [{article: 987654321, name: 'Lion'}],
            favoriteNum: 1
        }

        expect(appReducer(initialState, actionStartFavorite ({article: 123456789, name: 'King'}))).toStrictEqual({
            favoriteList: [{article: 987654321, name: 'Lion'}, {article: 123456789, name: 'King'}], favoriteNum: 2
        })
    });

    it('testing actionStartFavorite case ADD equal', () => {
        const initialState = {
            favoriteList: [{article: 987654321, name: 'Lion'}, {article: 123456789, name: 'King'}],
            favoriteNum: 2
        }

        expect(appReducer(initialState, actionStartFavorite ({article: 123456789, name: 'King'}))).toStrictEqual({
            favoriteList: [{article: 987654321, name: 'Lion'}, {article: 123456789, name: 'King'}], favoriteNum: 2
        })
    });

    it('testing actionCartList case ADD +1 ', () => {
        const initialState = {
            cartList: [],
            cartNum: 0,
            totalPrice: 0
        }

        expect(appReducer(initialState, actionCartList ({article: 123456789, name: 'King', amount: 1, price:10}))).toStrictEqual({
            cartList: [{article: 123456789, name: 'King', amount:1, price: 10}], cartNum: 1, totalPrice: 10
        })
    });

    it('testing actionCartList case ADD equal +1 ', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:1, price: 10}, {article: 987654321, name: 'Lion', amount: 2, price:20}],
            cartNum: 1,
            totalPrice: 10
        }

        expect(appReducer(initialState, actionCartList ({article: 123456789, name: 'King', amount: 1, price:10}))).toStrictEqual({
            cartList: [{article: 123456789, name: 'King', amount:2, price: 10}, {article: 987654321, name: 'Lion', amount: 2, price:20}], cartNum: 4, totalPrice: 60
        })
    });

    it('testing actionCartList case ADD another good', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:11, price: 10}],
            cartNum: 11,
            totalPrice: 110
        }

        expect(appReducer(initialState, actionCartList ({article: 987654321, name: 'Lion', amount: 2, price:20}))).toStrictEqual({
            cartList: [{article: 123456789, name: 'King', amount:11, price: 10},
                {article: 987654321, name: 'Lion', amount: 2, price:20}], cartNum: 13, totalPrice: 150
        })
    });

    it('testing actionStartCart', () => {
        const initialState = {
            cartList: [],
            cartNum: 0,
            totalPrice: 0
        }

        expect(appReducer(initialState, actionStartCart ({article: 123456789, name: 'King', amount: 1, price:10}))).toStrictEqual({
            cartList: [{article: 123456789, name: 'King', amount:1, price: 10}], cartNum: 1, totalPrice: 10
        })
    });

    it('testing actionStartCart case ADD another good', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:11, price: 10}],
            cartNum: 11,
            totalPrice: 110
        }

        expect(appReducer(initialState, actionStartCart ({article: 987654321, name: 'Lion', amount: 2, price:20}))).toStrictEqual({
            cartList: [{article: 123456789, name: 'King', amount:11, price: 10},
                {article: 987654321, name: 'Lion', amount: 2, price:20}], cartNum: 13, totalPrice: 150
        })
    });

    it('testing actionStartCart case ADD same good', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:11, price: 10},
                {article: 987654321, name: 'Lion', amount: 2, price:20}],
            cartNum: 13,
            totalPrice: 150
        }

        expect(appReducer(initialState, actionStartCart ({article: 987654321, name: 'Lion', amount: 2, price:20}))).toStrictEqual({
            cartList: [{article: 123456789, name: 'King', amount:11, price: 10},
                {article: 987654321, name: 'Lion', amount: 2, price:20}], cartNum: 13, totalPrice: 150
        })
    });

    it('testing actionDeleteInCart case Dell - 1', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:10, price: 10}],
            cartNum: 10,
            totalPrice: 100
        }

        expect(appReducer(initialState, actionDeleteInCart ({article: 123456789, name: 'King', amount: 1, price:10}))).toStrictEqual({
            cartList: [{article: 123456789, name: 'King', amount:9, price: 10}], cartNum: 9, totalPrice: 90
        })
    });

    it('testing actionDeleteInCart case Dell - ', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:10, price: 10}],
            cartNum: 10,
            totalPrice: 100
        }

        expect(appReducer(initialState, actionDeleteInCart ({article: 12345678, name: 'King', amount: 1, price:10}))).toStrictEqual({
            cartList: [{article: 123456789, name: 'King', amount:10, price: 10}], cartNum: 10, totalPrice: 100
        })
    });

    it('testing actionDeleteInCart case Dell amount === dell amount payload', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:10, price: 10}],
            cartNum: 10,
            totalPrice: 100
        }

        expect(appReducer(initialState, actionDeleteInCart ({article: 123456789, name: 'King', amount: 10, price:10}))).toStrictEqual({
            cartList: [], cartNum: 0, totalPrice: 0
        })
    });

    it('testing actionDeleteInCart case Dell amount < dell amount payload', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:10, price: 10}],
            cartNum: 10,
            totalPrice: 100
        }

        expect(appReducer(initialState, actionDeleteInCart ({article: 123456789, name: 'King', amount: 30, price:10}))).toStrictEqual({
            cartList: [], cartNum: 0, totalPrice: 0
        })
    });

    it('testing actionDeleteAllInCart', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:10, price: 10},
                {article: 987654321, name: 'Lion', amount: 2, price:20}],
            cartNum: 12,
            totalPrice: 140
        }

        expect(appReducer(initialState, actionDeleteAllInCart ({article: 123456789, name: 'King'}))).toStrictEqual({
            cartList: [{article: 987654321, name: 'Lion', amount: 2, price:20}], cartNum: 2, totalPrice: 40
        })
    });

    it('Testing userInfo', () => {
        const initialState = {
            userInfo: {}
        }

        expect(appReducer(initialState, actionUserInfo({article: 123456789, name: 'King'}))).toStrictEqual({
            userInfo: {article: 123456789, name: 'King'}
        })
    });

    it('testing actionDeleteAfterBuying', () => {
        const initialState = {
            cartList: [{article: 123456789, name: 'King', amount:10, price: 10},
                {article: 987654321, name: 'Lion', amount: 2, price:20}],
            cartNum: 12,
            totalPrice: 140
        }

        expect(appReducer(initialState, actionDeleteAfterBuying ())).toStrictEqual({
            cartList: [], cartNum: 0, totalPrice: 0
        })
    });

});