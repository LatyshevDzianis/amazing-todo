import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Popover, IconButton, makeStyles, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import { editTopick } from "../../../actions/topick";

const useStyles = makeStyles(() => ({
  todoInput: {
    margin: "1em",
    minWidth: 290,
  },
}));

const EditTopick = ({ topickId, topickTitle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [topickInput, setTopickInput] = useState(topickTitle);
  const dispatch = useDispatch();
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    setTopickInput(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      if (topickInput.trim()) {
        dispatch(editTopick(topickId, topickInput.trim()));
        setAnchorEl(null);
        setTopickInput("");
      }
    }
  };

  return (
    <>
      <IconButton aria-label="edit" onClick={handleClick}>
        <EditIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <TextField
          label="Topick title"
          multiline
          id="outlined-size-small"
          variant="outlined"
          size="small"
          value={topickInput}
          onChange={handleChange}
          className={classes.todoInput}
          onKeyPress={handleEnterPress}
        />
      </Popover>
    </>
  );
};

export default EditTopick;
