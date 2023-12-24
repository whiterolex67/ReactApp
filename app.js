import React from "react";
import ReactDOM from "react-dom/client"
const reactElem = React.createElement(
    "h1",
    {id : "textMsg"},
    "Hello Iam learning React"
);
const parent = React.createElement(
    "div",
    {},
    React.createElement(
        "div",
        {},
        [React.createElement(
            "h1",
            {},
            "Hello iam the h1 tag"
        ),React.createElement(
            "h2",
            {},
            "Hello iam the h2 tag"
        )]
    ),
);
const elemFromWeb = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(elemFromWeb);
reactRoot.render(parent);