const itemsListWrapper = document.querySelector(".items-list-wrapper");
const addItem = document.querySelector(".new-item-wrapper button");
const inputItem = document.querySelector("#new-item");
// const trashButton = document.querySelector("#trash")

function elementCreator(id){
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("box-model-wrapper", "item-wrapper");

    const checkOnItem = document.createElement("input");
    checkOnItem.type = "checkbox";
    checkOnItem.name = "item";

    const nameItem = document.createElement("span");
    nameItem.textContent = inputItem.value;

    const trashButtonWrapper = document.createElement("div");

    const trashButton = document.createElement("button");
    trashButton.id = id;

    const labelTrash = document.createElement("label");
    labelTrash.setAttribute("for", id);
    

    const trashIcon = document.createElement("img");
    trashIcon.src = "assets/icons/trash.svg";

    itemWrapper.appendChild(checkOnItem);
    itemWrapper.appendChild(nameItem);
    itemWrapper.appendChild(trashButtonWrapper);
    checkOnItem.classList.add("item-checkbox");
    trashButtonWrapper.classList.add("trash-button-wrapper");
    trashButtonWrapper.appendChild(trashButton);
    trashButtonWrapper.appendChild(labelTrash);
    labelTrash.setAttribute("for", "trash-button");
    labelTrash.appendChild(trashIcon);

    return itemWrapper;
}

function removeElement(element){
    element.remove();
}

addItem.onclick = (e) => {
    // e.timeStamp - Tempo do click, gerando um id único para cada elemento.
    itemsListWrapper.appendChild(elementCreator(e.timeStamp));
}

// Verificar como fazer para deletar: Talvez chamando o elemento pai e usando uma condicional para verificar sem ele possui algum filho com determiado ID.
trashButton.onclick = (e) => {
    console.log(e.id);
}

