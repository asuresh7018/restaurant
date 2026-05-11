import { addSectionBreak } from "../index.js";

// Define menu here as a json for easier editing and make immutable
const Menu = (function() {
    let menuList = [
    {"Title": "Classic Hamburger",
    "Description": "A classic burger filled with tomatos, lettuce and diced onions",
    "Price": "$15.99"},
    {"Title": "Chili Cheeseburger",
    "Description": "Fresh-ground beef, red chili and shredded cheese",
    "Price": "$15.99"},
    {"Title": "Mushroom Patty Burger",
    "Description": "Vegetarian option with mushroom patty, lettuce and melted cheese",
    "Price": "$15.99"}
    ];

    let sides = [
        {"Title": "French Fries",
        "Description": "Classic fries with chicken salt",
        "Price": "$5.99"},
        {"Title": "(Optional) Ketchup",
        "Description": "Optional side of tomato or chili sauce",
        "Price": "$0.99"}];

    let drinks = [
        {"Title": "Soft drink",
        "Description": "300ml soft drink of your choice (Coca Cola, Sprite, Fanta)",
        "Price": "$4.99"}];

    const GetMenu = () => {
        return menuList;
    }

    const GetSides = () => {
        return sides;
    }

    const GetDrinks = () => {
        return drinks;
    }

    return { GetMenu, GetSides, GetDrinks };
})();

function serveMenu() {
    const contentDiv = document.querySelector("#content");
    createMenuItems(contentDiv);
}

function createMenuItems(contentDiv) {
    contentDiv.innerHTML = `
    <div class="header">Menu</div>
    `;
    for (const menuItem of Menu.GetMenu()) {
        contentDiv.innerHTML += `
        <div class="itemDiv">
            <div class="itemTitle">${menuItem.Title}</div>
            <div class="itemDescription">${menuItem.Description}</div>
            <div class="itemPrice">${menuItem.Price}</div>
        </div>
        <hr>`
    }
    addSectionBreak(contentDiv);
    contentDiv.innerHTML += `<div class="header">Sides</div>`
    for (const menuItem of Menu.GetSides()) {
        contentDiv.innerHTML += `
        <div class="itemDiv">
            <div class="itemTitle">${menuItem.Title}</div>
            <div class="itemDescription">${menuItem.Description}</div>
            <div class="itemPrice">${menuItem.Price}</div>
        </div>
        <hr>`;
    }
    addSectionBreak(contentDiv);
    contentDiv.innerHTML += `<div class="header">Drinks</div>`
    for (const menuItem of Menu.GetDrinks()) {
        contentDiv.innerHTML += `
        <div class="itemDiv">
            <div class="itemTitle">${menuItem.Title}</div>
            <div class="itemDescription">${menuItem.Description}</div>
            <div class="itemPrice">${menuItem.Price}</div>
        </div>
        <hr>`;
    }
    addSectionBreak(contentDiv);
}

export default serveMenu;