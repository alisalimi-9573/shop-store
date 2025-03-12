const initialState = {
  userData: [],
  isLoggedIn: false,
  carts: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "sign_up_user":
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    case "login_user":
      const existingUser = state.userData.find(
        (user) => user.id === action.payload.id
      );
      if (!existingUser) {
        return state;
      }
      localStorage.setItem("userId", action.payload.id);
      return {
        ...state,
        isLoggedIn: true,
      };
    case "logout_user":
      localStorage.removeItem("userId");
      return {
        ...state,
        isLoggedIn: false,
      };
    case "add_to_carts":
      return {
        ...state,
        carts: [...state, action.payload],
      };
    default:
      state;
  }
}

export { initialState, reducer };
