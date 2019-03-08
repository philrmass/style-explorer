function currentColor(state = {}, action) {
  console.log('currentColor', state, action);
  switch(action.type) {
    default:
      return state;
  }
}

export default currentColor;
