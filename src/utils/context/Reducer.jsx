const reducer = (state, action) => {
  if (action.type === "SET_PROGRESS") {
    return {
      ...state,
      progress: action.progress,
    };
  }
};

export default reducer;
