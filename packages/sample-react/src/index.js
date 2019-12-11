import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = React.useState(0);
  return React.createElement(
    "p",
    {
      onClick: () => setCount(count + 1)
    },
    "I am react: ",
    count
  );
};

export default ref => {
  ReactDOM.render(React.createElement(App), ref);
};
