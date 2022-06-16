import { createSlice, ConfigureStore, bindActionCreators, configureStore } from '@reduxjs/toolkit';

const cartSLice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            items:[],
            total : 0
        }
    },
    reducers: {
        add: (state, action) => {
            let items = state.value.items;
            let total = state.value.total + action.payload.product.price;
            const inCart = items.filter(i => i.id == action.payload.product.id);
            if (inCart.length == 0) {
                items.push({ ...action.payload.product, quantity: 1 });
            }
            else {
                items = items.map(i => {
                    if (i.id == action.payload.product.id) {
                        return {
                             quantity: i.quantity + 1,
                             ...action.payload.product
                        }
                    }
                })
            }
            state.value = {
                items, total
            }
        },
        remove: (state, action) => {
            let items = state.value.items;
            let total = state.value.total + action.payload.product.price;
            const inCart = items.filter(i => i.id == action.payload.product.id);
            if (inCart.length == 0) {
                return;
            } else {
                total = total - action.payload.product.price;
                if (inCart[0].quantity == 1) {
                    items = items.filter(i => i.id != action.payload.product.id)
                }
                else {
                    items = items.map(i => {
                        if (i.id == action.payload.product.id) {
                            return {
                                quantity: i.quantity - 1,
                             ...action.payload.product
                            }
                        }
                        else {
                            return i;
                        }
                    })
                }
                state.value = { items, total }
            }
        }
    }
})

export const { add, remove } = cartSLice.actions;

export const store = configureStore({
    reducer: { cart: cartSLice.reducer }
})