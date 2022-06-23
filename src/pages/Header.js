import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { thunkCurrencies } from '../actions';
// import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps';
// import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <p data-testid="email-field">{user.email}</p>
        <p data-testid="total-field">Despesa total: 0</p>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
