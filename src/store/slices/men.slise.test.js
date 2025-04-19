import menReducer, {menCards} from './men.slice.js'
import appReducer from "./app.slice.js";

describe('Testing men Cards', () => {
    it('Test init state', () => {
        expect(menReducer(undefined, {type: undefined})).toEqual({
            goods: []
        })
    });

    it('Test actionMenCards', () => {
        expect(menReducer(undefined, {payload: [{test: "test"}], type:"men/menCards"})).toEqual({
            goods: [{test: 'test'}]
        })
    });
});