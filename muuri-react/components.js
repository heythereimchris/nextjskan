import React, { useState } from "react";
import { useGrid, useRefresh } from "muuri-react";
import { getRandomWord } from "./utils";

// Item component.
export const Item = ({ id }) => {
  // State is manteined when an item change parent.
  const [tag] = useState(getRandomWord());
  // Simple example. This effect could also be done only with css rules.
  const tabClass = useGrid().id.toLowerCase() + "-tab-item";

  const refresh = useRefresh();

  return (
    <div className="board-item">
      <div className="board-item-content">
        <span>Item </span>
        {id}
        {" - "}
        {tag}
        <div className={"tab-item " + tabClass} />
      </div>
    </div>
  );
};

// Column component.
export const Column = ({ children, actionClass, title }) => {
  return (
    <div className={"board-column " + actionClass}>
      <div className="board-column-header">{title}</div>
      {children}
    </div>
  );
};

// Demo component.
export const Demo = ({ children }) => {
  return <section className="grid-demo">{children}</section>;
};

// Header component.
export const Header = () => {
  return (
    <React.Fragment>
      <h2 className="section-title">
        <span>Kanban Demo</span>
      </h2>
      <h4 className="section-title">
        <div>
          <h4>Drag the items to another list</h4>
        </div>
      </h4>
    </React.Fragment>
  );
};

// Footer component.
export const Footer = ({ children }) => {
  return <div className="grid-footer">{children}</div>;
};
