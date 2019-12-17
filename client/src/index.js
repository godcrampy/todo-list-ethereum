import React from "react";
import ReactDom from "react-dom";
import { Drizzle } from "drizzle";
import TodoList from "./contracts/TodoList.json";

import App from "./App";
const options = {
  contracts: [TodoList],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545"
    }
  }
};

const drizzle = new Drizzle(options);
ReactDom.render(<App drizzle={drizzle} />, document.getElementById("root"));
