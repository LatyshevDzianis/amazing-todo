import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TodoList from "../../TodoList";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
  },
}));

const TopickItemCard = ({ topick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={topick.title}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        {console.log("Topick todos:", topick.todos)}
        <TodoList todos={topick.todos} topickId={topick.id} />
      </CardContent>
    </Card>
  );
};

export default TopickItemCard;
