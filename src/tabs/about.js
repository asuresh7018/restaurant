import { addSectionBreak } from "../index.js";
import mapImg from "../resources/map.svg";

function serveAbout() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = `
    <div id="aboutDiv">
        <div id="map">
            <img id="mapImg">
        </div>`

    contentDiv.innerHTML += `
        <div id="contact">
            <div id="contactHeader" class="header">Contact Us</div>
            <div id="contactDetails">
                <div id="contactTitle">Burger Nexus</div>
                <div class="contactInfo">(P) 02 1234 5678</div>
                <div class="contactInfo">(M) 0423 038 240</div>
            </div>
        </div>
    </div>`;
        
    serveResources(); // Can only serve images once page loads
}

function serveResources() {
    const mapImage = document.querySelector("#mapImg");
    mapImage.src = mapImg;
}

export default serveAbout;