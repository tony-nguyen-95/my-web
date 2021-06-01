import React from "react";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  track: {
    backgroundColor: "#757575 !important",
    opacity: 1,
  },
});

export default function SwitchButton() {
  const dispatch = useDispatch();
  const { selectedTheme } = useSelector((state) => state.ThemeReducer);
  const changeTheme = () => {
    dispatch({
      type: "CHANGE_THEME",
    });
  };

  const classes = useStyles();
  return (
    <div style={{ paddingLeft: "20px" }}>
      <span style={{ color: selectedTheme.secondaryColor }}>Dark Mode</span>
      <Switch
        classes={{
          track: classes.track,
        }}
        color="default"
        onClick={changeTheme}
      />
    </div>
  );
}
