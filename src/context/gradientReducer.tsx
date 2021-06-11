export const gradientReducer = (state: any, action: any): any => {
  switch (action.type) {
    case 'setColor':
      return {
        ...state,
        colors: action.payload,
      };

    case 'setPrevColor':
      return {
        ...state,
        setPrevColor: action.payload,
      };
    default:
      return state;
  }
};
