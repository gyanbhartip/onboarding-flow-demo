const reducer = (state, action) => {
  if (action.type === "SET_PROGRESS") {
    return {
      ...state,
      progress: action.progress,
    };
  }
  if (action.type === "SET_SELECTED_TYPE") {
    return {
      ...state,
      selectedType: action.selectedType,
    };
  }
};

export default reducer;
