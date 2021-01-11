let initialState = []

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_TASK":
        return action.payload;
      default:
        return state;
    }
  };