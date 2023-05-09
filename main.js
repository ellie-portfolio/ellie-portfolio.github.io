// MINI MODALS
var miniModal = document.querySelectorAll('.mini-modal');
var gridItem = document.querySelectorAll('.grid-item');
var videoContainer = document.querySelectorAll('.video-container')

videoContainer.forEach((gridItem, index) => {
    gridItem.addEventListener('mouseover', () => {
        miniModal[index].classList.add("show");
    });
});

videoContainer.forEach((gridItem, index) => {
    gridItem.addEventListener('mouseout', () => {
        miniModal[index].classList.remove("show");
    });
});

// PLAY THUMBNAIL VIDEOS ON HOVER 
gridItem.forEach((gridItem, index) => {
    videoContainer[index].addEventListener('mouseover', () => {
        gridItem.play();
    });
    gridItem.addEventListener('mouseout', () => {
        if (!gridItem.paused) {
            gridItem.pause();
        }
    });
});

// HIDE ALL + PAUSE ALL FUNCTION 
var slides = document.querySelectorAll('.slides video');
var modal = document.querySelector('.modal');
var curSlide = 0

function hideAll() {
    slides.forEach((element, index) => {
        slides[index].classList.add("hide");
        slides[index].classList.remove("show");
        slides[index].pause();
    });
};
hideAll();

// OPEN MODAL + PLAY RESPECTIVE VIDEO
miniModal.forEach((element, index) => {
    videoContainer[index].addEventListener('click', () => {
        hideAll();
        modal.classList.add("show");
        slides[index].classList.remove("hide");
        slides[index].classList.add("show");
        slides[index].play();
        curSlide = index
        caption.innerHTML = miniModal[curSlide].innerHTML;
    });
});

// CLOSE MODAL + ESCAPE KEY
window.onclick = function (e) {
    if (e.target == modal) {
        modal.classList.remove("show");
        hideAll();
    }
};

var closeBtn = document.querySelector('.close');
closeBtn.onclick = (function () {
    modal.classList.remove("show");
    hideAll();
});

document.addEventListener("keydown", function (event) {
    if (event.code == "Escape") {
        modal.classList.remove("show");
        hideAll();
    };
});

// PREV+NEXT BUTTONS + LEFT+RIGHT ARROW KEYS
var next = document.querySelector('.next');
next.onclick = function () {
    if (curSlide >= slides.length - 1) {
        curSlide = 0;
        hideAll();
        slides[curSlide].classList.remove("hide");
        slides[curSlide].classList.add("show");
        slides[curSlide].play();
        caption.innerHTML = miniModal[curSlide].innerHTML;
    }
    else {
        hideAll();
        curSlide++;
        slides[curSlide].classList.remove("hide");
        slides[curSlide].classList.add("show");
        slides[curSlide].play();
        console.log(curSlide);
        caption.innerHTML = miniModal[curSlide].innerHTML;
    };
};

var prev = document.querySelector('.prev');
prev.onclick = function () {
    if (curSlide > 0) {
        hideAll();
        curSlide--;
        slides[curSlide].classList.remove("hide");
        slides[curSlide].classList.add("show");
        slides[curSlide].play();
        caption.innerHTML = miniModal[curSlide].innerHTML;
    }
    else {
        hideAll();
        curSlide = slides.length-1;
        slides[curSlide].classList.remove("hide");
        slides[curSlide].classList.add("show");
        slides[curSlide].play();
        caption.innerHTML = miniModal[curSlide].innerHTML;
    };
};

document.addEventListener("keydown", function (event) {
    if (modal.classList.contains("show")) {
        if (event.code === "ArrowRight") {
            if (curSlide >= slides.length - 1) {
                curSlide = 0;
                hideAll();
                slides[curSlide].classList.remove("hide");
                slides[curSlide].classList.add("show");
                slides[curSlide].play();
                caption.innerHTML = miniModal[curSlide].innerHTML;
            }
            else {
                hideAll();
                curSlide++;
                slides[curSlide].classList.remove("hide");
                slides[curSlide].classList.add("show");
                slides[curSlide].play();
                console.log(curSlide);
                caption.innerHTML = miniModal[curSlide].innerHTML;
            };
        };
    };
});

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowLeft") {
        if (modal.classList.contains("show")) {
            if (curSlide > 0) {
                hideAll();
                curSlide--;
                slides[curSlide].classList.remove("hide");
                slides[curSlide].classList.add("show");
                slides[curSlide].play();
                caption.innerHTML = miniModal[curSlide].innerHTML;
            }
            else {
                hideAll();
                curSlide = slides.length-1;
                slides[curSlide].classList.remove("hide");
                slides[curSlide].classList.add("show");
                slides[curSlide].play();
                caption.innerHTML = miniModal[curSlide].innerHTML;
            };
        };
    };
});

// CAPTIONS
var caption = document.querySelector('.caption');
var miniModalText = miniModal[curSlide];
var videoSizedSpacer = document.querySelector('.video-sized-spacer')

slides[curSlide].addEventListener('loadedmetadata', function () {
    videoSizedSpacer.style.height = slides[curSlide].videoHeight + 'px';
});

