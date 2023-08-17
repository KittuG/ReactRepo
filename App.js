import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        [React.createElement("h1",
            { id: "h1Id" }, "I'm inside H1"), React.createElement("h2",
                { id: "h1Id" }, "I'm inside H2 at same lvl of h1")]));

const jsxHeading = <h1>Hello form JSX learning!</h1>
// const heading = React.createElement("h1", { id: "heading" }, "Hello from here");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);