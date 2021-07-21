import * as actionTypes from './shopping-types';

export const addToBasket = (product) => ({
    type: actionTypes.ADD_TO_BASKET,
    product,
});

export const removeFromBasket = (product) => ({
    type: actionTypes.REMOVE_FROM_BASKET,
    product,
});

export const filterProducts = (category) => ({
    type: actionTypes.FILTER_PRODUCT,
    payload: category,
});
