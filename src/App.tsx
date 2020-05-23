import React, {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      margin: theme.spacing(1),
      width: "50ch",
    },
  }),
);

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const classes = useStyles();

  const handleSubmit = (event) => {
    setTodoList((state) => {
      return [...state, todo];
    });
    setTodo("");

    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setTodo(event?.target.value);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>

      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.text}
          label="タスクを入力してください"
          value={todo}
          onChange={handleInputChange}
        />
      </form>

      <List>
        {todoList.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value}>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default App;
