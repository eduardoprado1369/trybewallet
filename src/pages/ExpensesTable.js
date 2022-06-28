import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses && expenses.map((item) => (
          <tr key={ item.id }>
            <td>{item.description}</td>
            <td>{item.tag}</td>
            <td>{item.method}</td>
            <td>{Number(item.value).toFixed(2)}</td>
            <td>
              {/* {item.currency === 'USD' ? 'Dólar Comercial'
                : item.currency === 'EUR' ? 'Euro' : item.currency} */}
              {item.currency === 'USD' && 'Dólar Comercial'}
              {item.currency === 'EUR' && 'Euro'}
              {item.currency !== 'USD' && item.currency !== 'EUR' && item.currency}
            </td>
            <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
            <td>
              {Number(item.value * item.exchangeRates[item.currency].ask)
                .toFixed(2)}

            </td>
            <td>Real</td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(ExpensesTable);
