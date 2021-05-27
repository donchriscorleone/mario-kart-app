export const reducer = (state, action) => {
  if (action.type === "START") {
    return {
      ...state,
      animation: "-start",
      isStart: true,
      buttonContent: "Stop",
    };
  }
  if (action.type === "STOP") {
    return {
      ...state,
      animation: "",
      isStart: false,
      buttonContent: "Start",
    };
  }

  throw new Error("no matching action type");
};
