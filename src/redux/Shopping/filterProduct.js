import * as actionTypes from './shopping-types';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
