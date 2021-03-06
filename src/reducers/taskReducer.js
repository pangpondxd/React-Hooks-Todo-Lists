let initialState = []

if (typeof window !== "undefined") {
    if (localStorage.getItem("task")) {
      initialState = JSON.parse(localStorage.getItem("task"));
    } else {
      initialState = [];
    }
  }

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_TASK":
        return action.payload;
      default:
        return state;
    }
  };