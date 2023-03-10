import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import user from '../reducers/user';
// import rootReducer from '../reducers';
import userInfoAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      emailInput: '',
      passwordInput: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { emailInput, passwordInput } = this.state;
    const { sendUserInfo } = this.props;
    const MIN_PASSWORD_LENGTH = 6;
    return (
      <>
        <div>Login</div>
        <br />
        <main>
          <form>
            <label htmlFor="email-input">
              E-mail
              <br />
              <input
                placeholder="Insira seu e-mail aqui"
                name="emailInput"
                type="text"
                id="email-input"
                data-testid="email-input"
                onChange={ this.handleChange }
                value={ emailInput }
              />
            </label>
            <br />
            <label htmlFor="password-input">
              Senha
              <br />
              <input
                placeholder="Insira sua senha aqui"
                name="passwordInput"
                type="text"
                id="password-input"
                data-testid="password-input"
                onChange={ this.handleChange }
                value={ passwordInput }
              />
            </label>
            <br />
            <br />
            <Link to="/carteira">
              <button
                disabled={ passwordInput.length < MIN_PASSWORD_LENGTH
                 || !emailInput.includes('@') || !emailInput.includes('.com') }
                type="button"
                onClick={ () => sendUserInfo(this.state) }
              >
                Entrar

              </button>
            </Link>
          </form>
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendUserInfo: (value) => dispatch(userInfoAction(value)),
});

Login.propTypes = {
  sendUserInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
