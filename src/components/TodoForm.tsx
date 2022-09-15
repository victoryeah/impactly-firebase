import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import { Button, FormControl, TextField } from "@mui/material";

import firebaseApp from "../firebase";

const TodoForm = () => {
  const db = getDatabase(firebaseApp);

  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
  const todoRef = ref(db, "/todos");
  const todo = {
    title,
    done: false,
  };
    push(todoRef, todo);
  };

  return (
      <FormControl>
          <TextField onChange={handleChange} variant="outlined"/>
          <Button type="submit" onClick={addTodo} variant="contained">
              Add todo
          </Button>
      </FormControl>
  )
}
export default TodoForm;
