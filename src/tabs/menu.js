// Define menu here as a json for easier editing and make immutable
const Menu = (function() {
    let menuList = [
    {"Title": "Burger1",
    "Description": "Description1",
    "Price": "$15.99"},
    {"Title": "Burger2",
    "Description": "Description2",
    "Price": "$15.99"}
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
        <div class="itemDiv">
            <div class="itemTitle">${menuItem.Title}</div>
            <div class="itemDescription">${menuItem.Description}</div>
            <div class="itemPrice">${menuItem.Price}</div>
        </div>
        <hr>`
    }
}

export default serveMenu;