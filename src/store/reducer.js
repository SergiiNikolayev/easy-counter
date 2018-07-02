import * as actionTypes from './actions'

const initialState = {
  myValue: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.INCREMENT:
      console.log('+1');
      return {
        ...state,
        myValue: state.myValue + 1
      };
    case actionTypes.DECREMENT:
      console.log('-1');
      return {
        ...state,
        myValue: state.myValue - 1
      };
    default: return state;
  };
};

export default reducer;
