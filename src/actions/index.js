const userInfoAction = (info) => ({ type: 'USER_INFO', payload: { user: info } });

export const fetchCurrenciesAction = (currencies) => (
  {
    type: 'FETCH_CURRENCIES',
    payload: currencies,
  }
);

export function thunkCurrencies() {
  return async (dispatch) => {
    const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const fetchJSON = await fetchCurrencies?.json();
    if (fetchJSON) {
      dispatch(fetchCurrenciesAction(fetchJSON));
    }
  };
}

export const saveExpensesAction = (info, currencies, lastId, ask) => (
  {
    type: 'SAVE_EXPENSES',
    payload:
    {
      expenses:
      {
        id: lastId + 1,
        value: info.valueInput,
        description: info.descriptionInput,
        currency: info.currencyInput,
        method: info.methodInput,
        tag: info.tagInput,
        exchangeRates: {
          ...currencies,
        },
      },
      ask,
    },
  }
);

export function getExchangeRateThunk(info, lastId) {
  return async (dispatch) => {
    const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const fetchJSON = await fetchCurrencies?.json();
    // const { wallet: { expenses } } = state();
    // console.log(expenses);
    // const ask = expenses.length > 0 ? (expenses.reduce((acc, item) => {
    //   const itemValueInBRL = parseFloat(item.value)
    //    * item.exchangeRates[item.currency].ask;
    //   acc += itemValueInBRL;
    //   return acc;
    // }, 0)) : parseFloat(info.valueInput) * fetchJSON[info.currencyInput].ask;
    const ask = parseFloat(info.valueInput) * fetchJSON[info.currencyInput].ask;
    dispatch(saveExpensesAction(info, fetchJSON, lastId, ask));
  };
}

export default userInfoAction;
