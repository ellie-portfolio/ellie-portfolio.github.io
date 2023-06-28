const grid = document.querySelector(`#grid`);
const gridItem = document.querySelector(`.grid-item`);
const howManyVids = titles.length;
console.log("There are " + howManyVids + " videos");

// clone 1st grid-item node (with children) x howManyVids and append all clones to grid 

for (i = 1; i < howManyVids; i++) {
    let clone = gridItem.cloneNode(true);
    grid.appendChild(clone);
};

const gridVids = document.querySelectorAll(`#grid video`);
const overlays = document.querySelectorAll(`.overlay`);
const gridItems = document.querySelectorAll(`.grid-item`);

// Add source+poster to videos + title to overlays

gridVids.forEach(addSrcAndTitle);
function addSrcAndTitle(item, index) {
    gridVids[index].src = "vids/" + titles[index] + ".mp4";
    gridVids[index].poster = "poster/" + titles[index] + ".jpg";
    overlays[index].innerHTML = titles[index];
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

// Click overlays to show fullscreen video (mobile-only)

// Check if the device supports touch events
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

gridItems.forEach(item, index => {
    item.addEventListener('click', fully(index));
});

function fully(index) {
    // let bigScreen = window.matchMedia(`(min-width: 701px)`);
    // if (bigScreen.matches) return;
    gridVids[index].requestFullscreen();
}