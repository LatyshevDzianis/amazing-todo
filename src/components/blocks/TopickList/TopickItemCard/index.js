import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TodoList from "../../TodoList";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeTopick } from "../../../../actions/topick";
import EditTopick from "../../EditTopick";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
  },
}));

const TopickItemCard = ({ topick }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeTopick(topick.id));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={topick.title}
        action={
          <>
            <EditTopick topickId={topick.id} />
            <IconButton aria-label="remove" onClick={handleRemoveClick}>
              <DeleteIcon />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <TodoList todos={topick.todos} topickId={topick.id} />
      </CardContent>
    </Card>
  );
};

export default TopickItemCard;
