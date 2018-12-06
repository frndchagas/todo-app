import React from 'react';
import AddTask from './addTask';
import Todos from './todos';

const Main = () => {
  return (
    <React.Fragment>
      <AddTask />
      {/* <Todos /> */}
    </React.Fragment>
  );
  /* return (
    <>
      <AddTask />
      <Todos />
    </>
  ); */
  /* return [
    <AddTask key="add-task" />,
    <Todos />
  ] */
};

export default Main;
