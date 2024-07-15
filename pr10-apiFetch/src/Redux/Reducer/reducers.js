let intialState = {
  Products: [],
  error: null,
};

const Reducers = (state = intialState, action) => {
  switch (action.type) {
    case "view":
      // console.log(action.payload);
      return {
        ...state,
        Products: action.payload,
      };

    default:
      return state;
  }
};

export default Reducers;
