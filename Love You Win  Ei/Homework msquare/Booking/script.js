const dateTag = document.querySelector (".date");
const nameTag = document.querySelector (".name");
const okButtonTag = document.querySelector (".okButton");
//const cancelButtonTag = document.querySelector (".cancelButton");
const customerTag = document.querySelector (".customer");



okButtonTag.addEventListener ("click", () => {
    const customerSubTag = document.createElement("div");
    customerSubTag.classList.add("customerSub");
    customerTag.append(customerSubTag);
    const customerNameTag = document.createElement("div");
    customerNameTag.classList.add("customerName");
    customerNameTag.append(nameTag.value);
    const customerDateTag = document.createElement("div");
    customerDateTag.classList.add("customerDate", "customerName");
    customerDateTag.append(dateTag.value);
    const customerCancelTag = document.createElement("button");
    customerCancelTag.innerHTML= "Cancel";
    customerCancelTag.classList.add("cancelButton");
    customerSubTag.append(customerNameTag, customerDateTag,customerCancelTag);

    const deadline = (date) => {
        const currentDate = new Date();
        const currentDateTime = currentDate.getTime();
        
        //const deadLineDateTime = deadLineDate.getTime();
        //const inputDateHour = date.getHours();
        const deadLineDateTime = date.setHours(date.getHours() - 24);
        return currentDateTime < deadLineDateTime;
    }; 

    customerCancelTag.addEventListener("click", () => {

         if (deadline(new Date (dateTag.value))) {
            customerSubTag.innerHTML= "";
         }else {
            alert("You can't cancel");
         }
    });

});

// const customerArrayTag = document.getElementsByClassName("customer");

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }