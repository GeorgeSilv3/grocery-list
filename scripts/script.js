const itemsListWrapper = document.querySelector(".items-list-wrapper");7
const form = document.querySelector("form");
const addItem = document.querySelector(".new-item-wrapper button");
const inputItem = document.querySelector("#new-item");
const removeItemMessage = document.getElementsByClassName("remove-item-message");

let elementsDeletable = [];

function elementCreator(id){
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("box-model-wrapper", "item-wrapper");

    itemWrapper.innerHTML = `<input type="checkbox" name="item" class="item-checkbox"><span>${inputItem.value}</span><div class="trash-button-wrapper"><button class="trashButton"></button><label for="trash-button"><img src="assets/icons/trash.svg" id="${id}"></label></div>`

    elementsDeletable.push(id);
    console.log(itemWrapper.innerHTML);
    return itemWrapper;
}

function removeMessage (){removeItemMessage[0].style.display = "none";}



form.onsubmit = (e) => {
    e.preventDefault();
    // e.timeStamp - Time click, giving a ID specifc to each click
    itemsListWrapper.appendChild(elementCreator(e.timeStamp));7
    inputItem.value = "";
}

addEventListener("click", (e) => {
    const idToRemove = e.target.id;
    if (elementsDeletable.includes(Number(idToRemove))){
        document.getElementById(idToRemove).parentElement.parentElement.parentElement.remove(); //Verify how to do better
        removeItemMessage[0].style.display = "flex";
    } 
    if (e.target.id == document.getElementById("close-message")){

    }
})



