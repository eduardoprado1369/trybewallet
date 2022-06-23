const userInfoAction = (info) => ({ type: 'USER_INFO', payload: { user: info } });

export const fetchCurrenciesAction = (currencies) => (
  { type: 'FETCH_CURRENCIES',
    payload: currencies }
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

export default userInfoAction;
