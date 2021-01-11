let initialState = []

if (typeof window !== "undefined") {
    if (localStorage.getItem("task")) {
      initialState = JSON.parse(localStorage.getItem("task"));
    } else {
      initialState = [];
    }
  }

export const subTaskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_SUBTASK":
        return action.payload;
      default:
        return state;
    }
  };