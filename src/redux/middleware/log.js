const log = ({dispatch, getState}) => next => action => {
  console.log('ACTION_TYPE: ' + action.type);
  next(action);
};

export default log;
