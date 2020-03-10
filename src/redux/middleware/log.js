const log = ({dispatch, getState}) => next => action => {
  console.log(action.type);
  next(action);
};

export default log;
