let intialState = {
  Users: [],
};

const userReducers = (state = intialState, action) => {
  switch (action.type) {
    case "view":
      return {
        ...state,
        Users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducers;
