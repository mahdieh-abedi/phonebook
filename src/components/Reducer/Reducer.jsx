const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Add":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000),
          ...payload.newPerson,
        },
      ];
    case "Edit":
      return state.map((oldPerson) =>
        oldPerson.id === payload.ID
          ? {
              id: payload.ID,
              ...payload.newPerson,
            }
          : oldPerson
      );
    case "Delete":
      return state.filter((item) => item.id !== payload.ID);
    case "Favorite":
      return state.map((item) =>
        item.id === payload.ID ? { ...item, favorite: payload.checked } : item
      );
    default:
      return state;
  }
};
export default Reducer;
