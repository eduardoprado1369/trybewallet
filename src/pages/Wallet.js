import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { thunkCurrencies } from '../actions';
import ExpensesForm from './ExpensesForm';
// import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <ExpensesForm />
      </>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(thunkCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet,
});

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  // currencies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
