import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {sendRequest} from "../../helpers/sendRequest.js";
import {API} from "../../configs/API.js";


const initialState = {
    goods: []
}

// export const fetchMenGoods = createAsyncThunk(
//     'men/fetchMen',
//     async () => {
//         const data = await sendRequest(API)
//
//         return data.goods
//     })

export const fetchMenGoods = () => (dispatch) => {
    return sendRequest(API)
        .then((results) => {
            dispatch(menCards(results.goods))

        })
}

const menStoreSlice = createSlice({
    name: 'men',
    initialState,
    reducers: {
        menCards: (state, action) => {
            state.goods = [...action.payload]
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchMenGoods.fulfilled, (state, action) => {
    //         state.goods = [...action.payload]
    //     })
    // }
})

export const {menCards} = menStoreSlice.actions

export default menStoreSlice.reducer