import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExchangeRateThunk } from '../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.sendExpensesInfo = this.sendExpensesInfo.bind(this);

    this.state = {
      valueInput: '',
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Cartão de crédito',
      tagInput: 'Lazer',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  sendExpensesInfo() {
    const { saveExpensesInfo, userExpenses } = this.props;
    // const { valueInput } = this.state;
    const lastId = userExpenses ? userExpenses.length - 1 : 0;
    // const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    // const fetchJSON = await fetchCurrencies?.json();
    // console.log(fetchJSON);
    // console.log(fetchJSON.USD);
    // const selectedCurrency = Object.values(fetchJSON).find((i) => (
    //   i.code === currencyInput
    // ));
    // console.log(userExpenses.length);
    // const ask = userExpenses.length > 0 ? userExpenses.reduce((acc, item) => {
    //   const itemValueInBRL = parseFloat(item.value) * selectedCurrency.ask;
    //   acc += itemValueInBRL;
    //   return acc;
    // }, 0) : parseFloat(valueInput) * selectedCurrency.ask;
    // console.log(ask);
    saveExpensesInfo(this.state, lastId);
    this.setState({
      valueInput: '',
      // descriptionInput: '',
      // currencyInput: 'USD',
      // methodInput: 'cash',
      // tagInput: 'Alimentacão',
    });
  }

  render() {
    const { valueInput, descriptionInput, methodInput, tagInput } = this.state;
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
              onChange={ this.handleChange }
              value={ valueInput }
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              data-testid="description-input"
              id="description-input"
              type="text"
              name="descriptionInput"
              onChange={ this.handleChange }
              value={ descriptionInput }
            />
          </label>
          <label htmlFor="selectCurrency">
            Moeda
            <select
              name="currencyInput"
              id="selectCurrency"
              onChange={ this.handleChange }
            >
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
              name="methodInput"
              id="selectPaymentMethod"
              data-testid="method-input"
              onChange={ this.handleChange }
              value={ methodInput }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="selectTag">
            Tipo de despesa
            <select
              name="tagInput"
              id="selectTag"
              data-testid="tag-input"
              onChange={ this.handleChange }
              value={ tagInput }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <br />
          <br />
          <button
            type="button"
            onClick={ () => this.sendExpensesInfo() }
          >
            Adicionar despesa

          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpensesInfo:
   (info, lastId) => dispatch(getExchangeRateThunk(info, lastId)),
});

const mapStateToProps = (state) => ({
  userExpenses: state.wallet.expenses,
});

ExpensesForm.propTypes = {
  saveExpensesInfo: PropTypes.func.isRequired,
  userExpenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
