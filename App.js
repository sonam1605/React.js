    const parent = React.createElement(
        "div", { id: "parent"}, React.createElement(
            "div", { id:"child" },
            [React.createElement("h1", {}, "Learning React.js"), 
            React.createElement("h2", {}, "Learning React.js very soon")] // for creating multiple child or can say sibling. need to wrap up in an array
        )
    );
    
    
    // const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

    console.log(parent);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);