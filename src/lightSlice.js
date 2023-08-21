const SET_LIGHT = "SET_LIGHT";

export function setLight() {
  return {
    type: SET_LIGHT,
  };
}

const initialState = {
  light: "white",
  sun: true,
};

export function lightReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIGHT:
      return {
        ...state,
        light: state.light === "white" ? "black" : "white",
        sun: !state.sun,
      };
    default:
      return state;
  }
}
