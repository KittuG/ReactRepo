import React from "react";
import ReactDOM from "react-dom/client";

// Raect Element
const jsxHeading = (<h1 className="header"
    tabIndex={2}>Hello from JSX learning!</h1>
)

const Title = () => (<h1 className="header"
    tabIndex={2}>Title from Funtional Component!</h1>)
const title = <h1>Heading Component</h1>
const data = 1000;
// Funtional Component
const Heading = () => {
    return (
        <div id="container">
            <Title />
            Title();
            {title} - {data}
            <h1 className="header"
                tabIndex={2}>Hello from Funtional Component!</h1>
        </div>
    )
}
// const heading = React.createElement("h1", { id: "heading" }, "Hello from here");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);