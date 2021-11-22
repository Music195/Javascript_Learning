const buttomTag = document.querySelector(".B");
const failTag = document.querySelector(".fail");


buttomTag.addEventListener("click", () => {
    failTag.innerHTML= "";
    const text = "You are failed!";
    failTag.append(text);
    failTag.style.bottom = `0px`;
    setTimeout(() => {
        failTag.style.bottom = `-${failTag.offsetHeight}px`;
    },5000)
})