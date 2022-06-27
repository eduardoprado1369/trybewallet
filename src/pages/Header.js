import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { thunkCurrencies } from '../actions';
// import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps';
// import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';

class Header extends React.Component {
  render() {
    const { user, total } = this.props;
    // console.log(total);
    return (
      <header>
        <p data-testid="email-field">{user.email}</p>
        <p data-testid="total-field">
          {total.ask ? `${total.ask.toFixed(2)}` : '0'}
        </p>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  total: state.wallet,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
