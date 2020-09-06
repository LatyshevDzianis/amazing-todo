import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { addTopick } from "../../../actions/topick";

const useStyles = makeStyles((theme) => ({
  topickInput: {
    margin: "1em",
    minWidth: 350,
  },
}));

const AddTopickBtn = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [topickInput, setTopickInput] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      dispatch(addTopick(topickInput.trim()));
      setTopickInput("");
      setAnchorEl(null);
    }
  };

  const handleChangeTopick = (event) => {
    setTopickInput(event.target.value);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <TextField
          label="Name of the topick"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          className={classes.topickInput}
          value={topickInput}
          onChange={handleChangeTopick}
          onKeyPress={handleEnterPress}
        />
      </Popover>
    </>
  );
};

export default AddTopickBtn;
