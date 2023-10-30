const initialState = {
  balance: 500,
  username: 'Jacob',
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
};

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};
