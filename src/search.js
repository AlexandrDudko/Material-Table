import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "200px",
    height: "40px"
  },
  input: {
    marginLeft: theme.spacing(1)
  },
  iconButton: {
    padding: 10
  }
}));

const Search = (props) => {
  const handleChange = (event) => {
    props.parentCallback(event.target.value);
  };
  const classes = useStyles();
  return (
    <Paper component="form" elevation={1} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
      <SearchIcon className={classes.iconButton} />
    </Paper>
  );
};
export default Search;
