import React from 'react';

class ExpensesForm extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="value-input">
            Valor
            <input
              data-testid="value-input"
              id="value-input"
              type="text"
              name="valueInput"
              // onClick
              // value
            />
          </label>
          <label htmlFor="description-input">
            Valor
            <input
              data-testid="description-input"
              id="description-input"
              type="text"
              name="descriptionInput"
              // onClick
              // value
            />
          </label>
          <label htmlFor="selectCurrency">
            Moeda
            <select name="selectCurrency" id="selectCurrency">
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="ARS">ARS</option>
              <option value="BTC">BTC</option>
              <option value="LTC">LTC</option>
              <option value="JPY">JPY</option>
              <option value="CHF">HFC</option>
              <option value="AUD">AUD</option>
              <option value="CNY">CNY</option>
              <option value="ILS">ILS</option>
              <option value="ETH">ETH</option>
              <option value="XRP">XRP</option>
            </select>
          </label>
          <label htmlFor="selectPaymentMethod">
            Método de pagamento
            <select
              name="selectPaymentMethod"
              id="selectPaymentMethod"
              data-testid="method-input"
            >
              <option value="cash">Dinheiro</option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="selectTag">
            Tipo de despesa
            <select name="selectTag" id="selectTag" data-testid="tag-input">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default ExpensesForm;
