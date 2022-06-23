const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_INFO':
    return { ...state,
      email: action.payload.user.emailInput,
      password: action.payload.user.passwordInput,
    };
  default:
    return state;
  }
}

export default user;
