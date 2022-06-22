const INITIAL_STATE = {
  emailInput: '',
  passwordInput: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_INFO':
    return { ...state,
      emailInput: action.emailInput,
      passwordInput: action.passwordInput };
  default:
    return state;
  }
}

export default user;
