let items = [];

const itemsdive = document.getElementById("items");
const input = document.getElementById("iteminput");

function renderItems() {
    itemsdive.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {

        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item;


        const bttn = document.createElement("button");
        bttn.textContent = "Delete";
        bttn.onclick = () => removeItems(idx);

        container.appendChild(text);
        container.appendChild(bttn);
        itemsdive.appendChild(container);
    }
};
function loadItems() {
}
function saveItems() {
}
function addItems() {
    const value = input.value;
    if (value == "") {
        return alert("You can not add any item")
    }
    items.push(value);
    renderItems();
    input.value = "";
}
function removeItems(idx) {
    items.splice(idx, 1);
    renderItems();
}