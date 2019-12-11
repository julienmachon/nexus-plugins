export default ref => {
  const node = document.createElement("p");
  const textnode = document.createTextNode("Hello, World!");
  node.appendChild(textnode);
  ref.appendChild(node);
  return () => {
    console.log("component HelloWorld callback");
  };
};
