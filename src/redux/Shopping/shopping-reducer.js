import * as actionTypes from './shopping-types';

const INITIAL_STATE = [];

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_BASKET:
          return [...state, action.product];  
        case actionTypes.REMOVE_FROM_BASKET:
            {
                const itemID = action.product.id;
                let currentBasket = [...state];
                const index = currentBasket.findIndex((item) => 
                item.id === itemID)
                if (index >= 0) {
                  currentBasket.splice(index, 1);
                }
                [...state] = currentBasket;
            }
        default:
          return state;
    }
}

export default shopReducer;
