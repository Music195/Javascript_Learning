const bodyElement = document.getElementsByTagName ("body") [0];
const parentDiv = document.createElement("div");
parentDiv.classList.add("hello");
const childDiv = `half of 100 is ${100 / 2}`
parentDiv.append(childDiv);
bodyElement.append(parentDiv);