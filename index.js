import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Mrityunjay Kumar  2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
