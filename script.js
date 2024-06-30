const starContainer = document.querySelector(".star-container");
const countSpan = document.querySelector("#count");
const starArray = document.querySelectorAll(".star");

let clickedStar = 0;

const fillStar = function (clickedStar) {
    // update count
    countSpan.textContent = clickedStar;

    fillColor(clickedStar);
};

const fillColor = function (clickedStar) {
    //reset all stars to default color
    starArray.forEach((star) => {
        star.classList.remove("yellow");
    });

    // Add yellow class to the clicked stars
    Array.from(starArray)
        .slice(0, clickedStar)
        .forEach((star) => {
            star.classList.add("yellow");
        });
};

starContainer.addEventListener("click", (e) => {
    if (e.target.hasAttribute("index")) {
        clickedStar = e.target.getAttribute("index");
        fillStar(clickedStar);
    }
});

starContainer.addEventListener("mouseover", (e) => {
    if (e.target.hasAttribute("index")) {
        let currentOverIndex = e.target.getAttribute("index");
        fillColor(currentOverIndex);
    }
});

starContainer.addEventListener("mouseleave", (e) => {
    fillColor(clickedStar);
});
