// Defining the initial state
const initialState = {
  users: []
};

// Creating the reducer function
const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    // Default case: return the current state
    default:
      return state;
  }
};

// Export the reducer function
export default usersReducer;
