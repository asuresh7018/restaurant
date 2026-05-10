import serveAbout from "./tabs/about.js";
import serveMenu from "./tabs/menu.js";
import serveHome from "./tabs/home.js";
import "./styles.css";
import "./tabs/about.css";
import "./tabs/home.css";
import "./tabs/menu.css";
import logoImg from "./resources/logo.svg";

// Default tab - Disabled for now
// serveHome();

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

const logoImage = document.querySelector("#logoIcon");
logoImage.src = logoImg;
