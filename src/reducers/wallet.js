// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FETCH_CURRENCIES':
    return { ...state,
      currencies: Object.keys(action.payload).filter((i) => i !== 'USDT') };
  default:
    return state;
  }
}

export default wallet;
