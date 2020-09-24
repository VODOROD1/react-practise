import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <li className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </li>
  );
};

export default DialogItem;
