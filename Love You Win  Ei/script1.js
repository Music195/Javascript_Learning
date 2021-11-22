/*

//Myanmar Webdeveloper episode 63  Useful DOM methods and properties 




const bodyElement = document.getElementsByTagName("body")[0]; // HTML Collection
//console.log("Body element: ", bodyElement);


//const parentDiv = document.getElementsByClassName("parent");
//parentDiv.innerHTML = "";
//console.log("parent div: ", parentDiv);
//const DivWithId = document.getElementById("myId");
//console.log("Div With Id: ", DivWithId)


const parentDiv = document.createElement("div");
parentDiv.classList.add("parent", "testClass")
parentDiv.classList.remove("testClass")
const childDivOne = document.createElement("div");
childDivOne.classList.add("child")
//const childDivOneText = document.createTextNode("child one");
//childDivOne.appendChild(childDivOneText);

childDivOne.append("child one")
const childDivTwo = document.createElement("div");
childDivTwo.classList.add("child")
//const childDivTwoText = document.createTextNode("child two");
//childDivTwo.appendChild(childDivTwoText);

childDivTwo.append("child two")
//parentDiv.appendChild(childDivOne);
//parentDiv.appendChild(childDivTwo);

parentDiv.append(childDivOne, childDivTwo)
bodyElement.appendChild(parentDiv);

const styleTestDiv = document.getElementsByClassName("styleTest")[0];
//console.log("styleTestDiv Width: ",styleTestDiv.style.width)
//console.log("styleTestDiv Height: ",styleTestDiv.style.height)
//console.log("styleTestDiv Background Color: ",styleTestDiv.style.backgroundColor) //for inline CSS


console.log("styleTestDiv Width: ",getComputedStyle(styleTestDiv).width)
console.log("styleTestDiv Height: ",getComputedStyle(styleTestDiv).height)
console.log("styleTestDiv Background Color: ",getComputedStyle(styleTestDiv).backgroundColor)


*/

/*


// Myanmar Webdeveloper episode 64 Events

const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("girl")[0];
const originalImageSrc = image.src;
const imageArray = [
    "https://bit.ly/3j5ecX0",
    "https://bit.ly/3rGdeob",
    "https://bit.ly/3ydx24t",
    "https://bit.ly/2V4sDm7",
    "https://bit.ly/3zVffjf",
]

let counter = 0;
const myFunction= () => {
    if (counter === 5) {
        image.src = originalImageSrc;
        counter =  0;
        return;
    }
    const imageLink = imageArray[counter];
    image.src = imageLink;
    console.log("Counter number: ", counter)
    counter += 1;
  

};

//myButtton.onclick = myFunction;

myButton.addEventListener("click", myFunction);

*/

// Shopping List



let pId = 1;
const inPutTag = document.getElementsByClassName("inPut")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];
const listBoxTag = document.createElement("div");
listBoxTag.classList.add("listBox");
const handleChange = (event) => {
  const inPutValue = event.target.value;
  const spanTag = document.createElement("span");
  spanTag.id = pId;
  spanTag.classList.add("spanName")
  //<i class=""></i>
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-minus-circle");
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("productName");
  const productNo = pId.toString() + ". " + inPutValue;
  spanTag.append(productNo);
  parentDiv.append(spanTag, trashIcon);
  listBoxTag.append(parentDiv);
  shoppingListTag.append(listBoxTag);
  /*trashIcon.addEventListener("click", () => {
      const classExit = spanTag.classList.contains("purchased")
     if ( classExit) {
         spanTag.classList.remove("purchased")
     } else {
         spanTag.classList.add("purchased")
     }
  }); */
  trashIcon.addEventListener( "click", () => {
      parentDiv.remove();

  }
  )
  inPutTag.value = "";
  pId += 1;

};
inPutTag.addEventListener("change", handleChange);

