let counter = 0;

//need to fix counter and index mess
//need a variable to keep track of img index
//need another to calculate the new index
//but the new index should be added to the previous index.
//so maybe only need one variable. need to think this through.

const image = document.querySelector("img");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");

function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

function changeImage(value) {
    const imageContainer = document.querySelector(".images");
    clearDiv(imageContainer);
    const img = document.createElement("img");
    counter = (counter + value) % 3;
    if (counter === 1) {  
        img.src = "./images/img1.jpg";
        imageContainer.appendChild(img);
    } else if (counter === 2) {
        img.src = "./images/img2.jpg";
        imageContainer.appendChild(img);
    } else {
        img.src = "./images/img3.jpg";
        imageContainer.appendChild(img);
    }
}

prev.addEventListener("click", changeImage(-1));
next.addEventListener("click", changeImage(1));

