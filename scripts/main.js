const grid = document.querySelector(`#grid`);
const grid2 = document.querySelector(`#grid2`);
const gridItem = document.querySelector(`.grid-item`);
const gridItem2 = document.querySelector(`.grid-item2`);
const howManyVids = musicvids.length;
const howManyVids2 = adverts.length;
console.log("There are " + howManyVids + " musicvids");
console.log("There are " + howManyVids2 + " adverts");

// clone 1st grid-item node (with children) x howManyVids and append all clones to grid

for (i = 1; i < howManyVids; i++) {
    let clone = gridItem.cloneNode(true);
    grid.appendChild(clone);
};

const gridVids = document.querySelectorAll(`#grid video`);
const overlays = document.querySelectorAll(`.overlay`);
const gridItems = document.querySelectorAll(`.grid-item`);

for (i = 1; i < howManyVids2; i++) {
    let clone2 = gridItem2.cloneNode(true);
    grid2.appendChild(clone2);
};

const gridVids2 = document.querySelectorAll(`#grid2 video`);
const overlays2 = document.querySelectorAll(`.overlay2`);
const gridItems2 = document.querySelectorAll(`.grid-item2`);

// Add source+poster to videos + title to overlays

gridVids.forEach(addSrcAndTitle);
function addSrcAndTitle(item, index) {
    gridVids[index].src = "vids/" + musicvids[index] + ".mp4";
    gridVids[index].poster = "poster/z_webp/" + musicvids[index] + ".webp";
    overlays[index].innerHTML = musicvids[index];
};

gridVids2.forEach(addSrcAndTitle2);
function addSrcAndTitle2(item, index) {
    gridVids2[index].src = "vids/" + adverts[index] + ".mp4";
    gridVids2[index].poster = "poster/" + adverts[index] + ".jpg";
    overlays2[index].innerHTML = adverts[index];
};

// Hover

overlays.forEach(playOnHover);
function playOnHover(item, index) {
    item.addEventListener(`mouseover`, () => {
        gridVids[index].play();
    });
    item.addEventListener(`mouseout`, () => {
        gridVids[index].pause();
    });
};

overlays2.forEach(playOnHover2);
function playOnHover2(item, index) {
    item.addEventListener(`mouseover`, () => {
        gridVids2[index].play();
    });
    item.addEventListener(`mouseout`, () => {
        gridVids2[index].pause();
    });
};

// Click overlays to show fullscreen video (mobile-only)

// Check if the device supports touch events
// const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

// gridItems.forEach(item, index => {
//     item.addEventListener('click', fully(index));
// });

// function fully(index) {
//     // let bigScreen = window.matchMedia(`(min-width: 701px)`);
//     // if (bigScreen.matches) return;
//     gridVids[index].requestFullscreen();
// }
