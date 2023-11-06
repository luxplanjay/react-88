// Если екшен это обьект, ничего не делает и пропускает дальше
// Если екшен это функция, вызывает ее, передает диспатч, и не пропускает дальше

const reduxThunkMd = store => next => action => {
  if (typeof action !== 'function') {
    next(action);
    return;
  }

  action(store.dispatch);
};

const fetchContacts = () => async dispatch => {
  try {
    dispatch({ type: 'fetch/pending' });
    const response = await axios.get('/contacts');
    dispatch({ type: 'fetch/success' });
  } catch (error) {}
};

useEffect(() => {
  dispatch(fetchContacts());
}, []);
