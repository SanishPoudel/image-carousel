let index = 0;
displayImage(index);

const prev = document.querySelector(".previous");
const next = document.querySelector(".next");

function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

function displayImage(index) {
    if (index < 0) {
        index = index * -1;
    }

    const imageContainer = document.querySelector(".images");
    const img = document.createElement("img");
    clearDiv(imageContainer);
    let counter = index % 3;

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

prev.addEventListener("click", ()=> {
    index --;
    displayImage(index);
})

next.addEventListener("click", ()=> {
    index ++;
    displayImage(index);
})


