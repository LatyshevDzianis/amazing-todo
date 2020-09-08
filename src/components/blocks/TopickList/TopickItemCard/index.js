import React from "react";
import { useDispatch } from "react-redux";
import { IconButton, CardHeader, CardContent, Card } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import TodoList from "../../TodoList";
import { removeTopick } from "../../../../actions/topick";
import EditTopick from "../../EditTopickBtn";

const TopickItemCard = ({ topick }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeTopick(topick.id));
  };

  return (
    <Card>
      <CardHeader
        title={topick.title}
        action={
          <>
            <EditTopick topickId={topick.id} topickTitle={topick.title} />
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
