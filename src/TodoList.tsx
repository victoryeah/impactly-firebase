import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, update } from "firebase/database";

// Import firebase configuration from firebase.ts file
import firebaseApp from "./firebase";

import { Todo } from "./types";
import { Checkbox, FormControlLabel, Card, CardHeader } from "@mui/material";

const TodoList = () => {
  const db = getDatabase(firebaseApp);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const todoRef = ref(db, "/todos");
    
    onValue(todoRef, (snapshot) => {
      const todos = snapshot.val();
      const newTodoList: Todo[] = [];

      for (let id in todos) {
        newTodoList.push({ id, ...todos[id] });
      };

      setTodoList(newTodoList);
    });
  }, [db]);

  const changeTodoCompletion = (todo: Todo) => {
    const todoRef = ref(db, "/todos/" + todo.id);
    update(todoRef, { done: !todo.done });
    };

  return (
    <Card>
      <CardHeader
        title="Todo List" />
        {todoList.map((todo, index) => {
            return (
                <ul>
                <FormControlLabel
                    control={<Checkbox 
                        key={index}
                        checked={todo.done} 
                        onChange={() => changeTodoCompletion(todo)} />}
                        label={todo.title} />
                </ul>
            );    
        })}
    </Card>
  )
}

export default TodoList;