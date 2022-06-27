// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  ask: 0,
};

function wallet(state = INITIAL_STATE, action) {
  // console.log(action);
  switch (action.type) {
  case 'FETCH_CURRENCIES':
    return { ...state,
      currencies: Object.keys(action.payload).filter((i) => i !== 'USDT') };
  case 'SAVE_EXPENSES':
    // console.log('entrou');
    return { ...state,
      ask: state.ask + action.payload.ask,
      expenses: [...state.expenses, action.payload.expenses] };
  default:
    return state;
  }
}

export default wallet;
