import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoriteList: [],
    cartList: [],
    totalPrice: 0,
    userInfo:{}
}


const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        actionFavoriteList: (state, {payload}) => {

            if (!state.favoriteList.some((item) => item.article === payload.article)) {
                state.favoriteList = [...state.favoriteList, payload]
                document.querySelector('.favorite-num').innerText = state.favoriteList.length
                sessionStorage.setItem('favoriteList', JSON.stringify(state.favoriteList))

            } else {
                state.favoriteList = state.favoriteList.filter((item) => item.article !== payload.article)
                document.querySelector('.favorite-num').innerText = state.favoriteList.length
                sessionStorage.setItem('favoriteList', JSON.stringify(state.favoriteList))

            }
        },
        actionStartFavorite: (state, {payload}) => {

                if (state.favoriteList.length === 0 ||
                    !state.favoriteList.some((card) => card.article === payload.article)){

                    state.favoriteList = [...state.favoriteList, payload]
                    document.querySelector('.favorite-num').innerText = state.favoriteList.length
                }
        },
        actionCartList: (state, {payload}) => {

            let count = 0;
            let price = 0;

            if (!state.cartList.some((item) => item.article === payload.article)) {
                state.cartList = [...state.cartList, payload]

            } else {
                state.cartList.forEach((item) => {

                    if (item.article === payload.article){
                        item.amount = +item.amount + +payload.amount
                    }
                })
            }

            state.cartList.forEach((item) =>{
                count += +item.amount;
                price += +item.amount * +item.price
            })

            state.totalPrice = price
            document.querySelector('.cart-num').innerText = count
            sessionStorage.setItem('cartList', JSON.stringify(state.cartList))
        },

        actionStartCart: (state, {payload}) => {
            if (state.cartList.length === 0 ||
                !state.cartList.some((card) => card.article === payload.article)){

                state.cartList = [...state.cartList, payload]
            }
            let count = 0;
            let price = 0;
            state.cartList.forEach((item) =>{
                count += +item.amount;
                price += +item.amount * +item.price
            })
            state.totalPrice = price
            document.querySelector('.cart-num').innerText = count
        },

        actionDeleteInCart: (state, {payload})  => {

            let countCart = 0;
            let price = 0;
            state.cartList.forEach((item) => {
                if (item.article === payload.article){
                    item.amount = +item.amount - +payload.amount;
                    if (item.amount < 1) {
                        state.cartList = state.cartList.filter((cartItem) => cartItem.article !== payload.article)
                    }
                }
            })

            state.cartList.forEach((item) => {
                countCart += +item.amount;
                price += +item.amount * +item.price;
            });
            state.totalPrice = price;
            document.querySelector('.cart-num').innerText = countCart;
            sessionStorage.setItem('cartList', JSON.stringify(state.cartList));
        },

        actionDeleteAllInCart: (state, {payload}) => {

            let countCart = 0;
            let price = 0;

            state.cartList = state.cartList.filter((cartItem) => cartItem.article !== payload.article);

            state.cartList.forEach((item) => {
                countCart += +item.amount;
                price += +item.amount * +item.price;
            });

            state.totalPrice = price;
            document.querySelector('.cart-num').innerText = countCart;
            sessionStorage.setItem('cartList', JSON.stringify(state.cartList));
        },
        actionUserInfo: (state, {payload}) => {
            state.userInfo = payload
            console.log(state.userInfo)
        },
        actionDeleteAfterBuying: (state) => {
            state.cartList = [];
            sessionStorage.removeItem('cartList')
            document.querySelector('.cart-num').innerText = 0;
        }
    }
})


export const {actionFavoriteList,
    actionStartFavorite,
    actionCartList,
    actionStartCart,
    actionDeleteInCart,
    actionDeleteAllInCart,
    actionUserInfo,
    actionDeleteAfterBuying} = appSlice.actions

export default appSlice.reducer