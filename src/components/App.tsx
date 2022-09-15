import { Grid } from '@mui/material'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
      <Grid item>
        <TodoForm />
        <TodoList />
      </Grid>
    </Grid>
  );
}


export default App;
