import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TodoList from "./TodoList";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
}));

const TodoCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        //subheader="September 14, 2016"
      />
      <CardContent>
        <TodoList />
      </CardContent>
    </Card>
  );
};

export default TodoCard;
