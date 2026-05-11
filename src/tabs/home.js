import burgerImg from "../resources/burger.png"

function serveHome() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = `
    <div id="homeContainer">
        <div id="street">
            <div>123 Snack St.</div>
            <div>Breadland</div>
        </div>
        <div>
            <img id=homeImg></img>
        </div>
        <div id="subtext">
            <div>The freshest, juiciest burgers</div>
            <div>Open 8:00 - 18:00 daily</div>
        </div>
    </div>`;
    serveResources(); // Can only apply image changes with the divs present
}

function serveResources() {
    const burgerImage = document.querySelector("#homeImg");
    burgerImage.src = burgerImg;
}



export default serveHome;