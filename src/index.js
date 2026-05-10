import serveAbout from "./tabs/about.js";
import serveMenu from "./tabs/menu.js";
import serveHome from "./tabs/home.js";

// Default tab
serveHome();

function serveTab(id) {
    clearBody();
    switch(id) {
        case "about": {
            serveAbout();
            break;
        }
        case "menu": {
            serveMenu();
            break;
        }
        case "home": {
            serveHome();
            break;
        }
    }
}

function clearBody() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

const navButtons = document.querySelectorAll(".nav");
for (const navButton of navButtons) {
    navButton.addEventListener("click", (e) => {
        serveTab(e.target.id);
    });
}