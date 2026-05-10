// Define menu here as a json for easier editing and make immutable
const Menu = (function() {
    let menuList = [
    {"Title": "Burger1",
    "Description": "Description1",
    "Price": "Price1"}
    ]

    const GetMenu = () => {
        return menuList;
    }

    return { GetMenu };
})();

function serveMenu() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = `
    <div class="header">Menu</div>
    `;
    createMenuItems(contentDiv);
}

function createMenuItems(contentDiv) {
    for (const menuItem of Menu.GetMenu()) {
        contentDiv.innerHTML += `
        <div class="itemTitle">${menuItem.Title}</div>
        <div class="itemDescription">${menuItem.Description}</div>
        <div class="itemPrice">${menuItem.Price}</div>`
    }
}

export default serveMenu;