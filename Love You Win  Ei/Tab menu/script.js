const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const noTag = document.querySelector(".no");

const imgToShow = [
    "https://bit.ly/3DvHU0f",
    "https://bit.ly/3nrjRdq",
    "https://bit.ly/3qOIgf5",
    "https://bit.ly/3Cxf52i",
    "https://bit.ly/3CsAHwR",
]
 
const tags =[ "home", "service", "about us", "help", "login"];

let chosenTagId = 0;
const imgTag = document.createElement ("img");
imgTag.classList.add("img");
noTag.append(imgTag);

//const tabTohide = document.getElementsByClassName("selected") [0];

const change = (event) => {
    chosenTagId = event.target.id;
    const chosenTag = document.getElementById(chosenTagId);
    const chosenTagWidth = chosenTag.offsetWidth;
    sliderTag.style.width = chosenTagWidth + "px";
    const tagLeftW = chosenTag.offsetLeft + "px";
    console.log(tagLeftW);
    sliderTag.style.transform = `translate(${tagLeftW})`;

    imgTag.src = imgToShow[chosenTagId];
    

    /*if (imgTag.classList.contains("selected")) {
        
        tabTohide.style.display= "none";
        tabTohide.classList.remove("selected")

    }else{
        imgTag.src = imgToShow[chosenTagId];
        imgTag.classList.add("selected");
        tabTohide.style.display= "block";


        

    }*/
    
};


for (let i = 0; i < tags.length; i++) {
    const liTag = document.createElement("li");
    liTag.append(tags[i].toUpperCase());
    liTag.id = i;
    ulTag.append(liTag);


    
    
    
    if( i === 0) {
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
    liTag.addEventListener("click", change);
    
};

    