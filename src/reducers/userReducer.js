const initialState = {
  users: {
    honey: [], // User Honey's reading list
    monique: [], // User Monique's reading list
    naomi: [], // User Naomi's reading list
    
  },
};

// src/reducers/userReducer.js

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_READING_LIST":
      const { userId, bookId } = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [userId]: [...state.users[userId], bookId],
        },
      };
    default:
      return state;
  }
};

export default userReducer;
