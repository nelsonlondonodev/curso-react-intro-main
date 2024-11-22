import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
}

export { TodosLoading };
