const initialState = {
  apartments: [],
};

const apartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "receive_apartments":
      console.log("action.apartments:", action.apartments);
      return { ...state, apartments: action.apartments };

    default:
      return state;
  }
};
export default apartmentReducer;
