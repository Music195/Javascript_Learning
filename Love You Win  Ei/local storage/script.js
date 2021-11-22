const toastAlert = () => {
    const buttomTag = document.querySelector(".B");
    const failTag = document.querySelector(".fail");
    failTag.style.bottom = `-${failTag.offsetHeight}px`;
    setTimeout(() => {
        failTag.style.bottom = `0px`;
    },1000);


    buttomTag.addEventListener("click", () => {
        localStorage.setItem("Ok", "yes");
        failTag.style.bottom = `-${failTag.offsetHeight}px`;
    });
};

window.addEventListener("load", () => {
    const youClosed = localStorage.getItem("Ok");
    console.log(youClosed);
    if ( youClosed !== "yes") {
        toastAlert();
    };
    
});