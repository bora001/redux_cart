const initialState = {
  items: [],
  total: 0,
};
const cartReducer = (state = initialState, action) => {
  if (action.type === "AddCart") {
    const cartItem = action.props;
    const cartTotal = state.total + action.props.price;
    const sameItem = state.items.filter(
      (item) => item.name === action.props.name
    );
    if (sameItem.length > 0) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === action.props.name
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
        total: cartTotal,
      };
    } else {
      return {
        ...state,
        items: [...state.items, cartItem],
        total: cartTotal,
      };
    }
  }
  if (action.type === "RemoveItem") {
    const sameItem = state.items.filter(
      (item) => item.name === action.props.name
    );
    const cartTotal = state.total - action.props.price;
    if (action.props.qty === 1) {
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.props.name),
        total: cartTotal,
      };
    }
    if (sameItem.length > 0) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === action.props.name && item.qty > 0
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
        total: cartTotal,
      };
    }
  }
  return state;
};

export default cartReducer;
