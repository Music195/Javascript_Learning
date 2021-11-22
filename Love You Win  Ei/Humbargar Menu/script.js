const humbargerContainerTag = document.querySelector(".humbargerContainer");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const overlayTag = document.querySelector(".overlay");
const liTag = document.getElementsByTagName("li");

humbargerContainerTag.addEventListener("click", () => {
    if (humbargerContainerTag.classList.contains ("open")) {
        line2Tag.classList.remove("hideLine2");
        line1Tag.classList.remove("plus45deg");
        line3Tag.classList.remove("minus45deg");
        overlayTag.classList.remove("opc");
        humbargerContainerTag.classList.remove("open");
        for (let i = 0; i < liTag.length ; i++) {
            liTag[i].classList.remove("upLi");
        };
    } else {
        line2Tag.classList.add("hideLine2");
        line1Tag.classList.add("plus45deg");
        line3Tag.classList.add("minus45deg");
        overlayTag.classList.add("opc");
        humbargerContainerTag.classList.add("open");
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.add("upLi");
        };
    }
   
 
});
