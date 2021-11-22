const postCommentButton = document.querySelector(".commentButton");
const parentStoredBoxTag = document.querySelector(".parentStoredBox");
const commentBoxTag = document.querySelector(".commentBox");


let textId = 0;
postCommentButton.addEventListener("click", () => {
    const storedBoxTag = document.createElement ("div");
    storedBoxTag.classList.add("storedBox");
    parentStoredBoxTag.append(storedBoxTag);
    storedBoxTag.id = textId;
    storedBoxTag.append(commentBoxTag.value);
    textId += 1;
    localStorage.setItem(textId,commentBoxTag.value);
});
    





window.addEventListener("load", () => {
    for (let i = 0; i < localStorage.length; i++) {
        const storedBoxTag = document.createElement ("div");
        storedBoxTag.classList.add("storedBox");
        parentStoredBoxTag.append(storedBoxTag);
        const store = localStorage.getItem(i+1);
        storedBoxTag.append(store); 
    }
    // for(let key in localStorage) {
    //     if (localStorage.hasOwnProperty(key)) {
    //       continue; 
    //     }
    //     const store = localStorage.getItem(key);
    //     const storedBoxTag = document.createElement ("div");
    //     storedBoxTag.classList.add("storedBox");
    //     parentStoredBoxTag.append(storedBoxTag);
    //     storedBoxTag.append(store);
    //   }
    

});
   

