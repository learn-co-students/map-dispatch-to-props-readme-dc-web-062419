export default function shoppingListItemReducer(
  state = {
    items: [],
  },
  action,
) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { ...state, items: [...state.items, action.payload] };

    default:
      return state;
  }
}
