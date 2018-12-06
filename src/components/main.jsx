import React from "react";
import AddTask from "./addTask";
import Todos from "./todos";

const Main = () => {
  return (
    <React.Fragment>
      <AddTask />
      <Todos />
    </React.Fragment>
  );
};

export default Main;
