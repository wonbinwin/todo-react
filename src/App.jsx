import "./style.css";
import { useState } from "react";
import TodoItem from "./TodoItem";
const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <ul>
        <TodoItem />
      </ul>
      <ul>
        <TodoItem />
      </ul>
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
};

export default App;
