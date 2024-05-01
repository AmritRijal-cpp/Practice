let list = [
    {
        "Flavour": "GUAVA FLAVOUR",
        "Price": "$39.50",
        "Image": "assets/guava.png"
    },
    {
        "Flavour": "MANGO FLAVOUR",
        "Price": "$49.50",
        "Image": "assets/mango.png"
    },
    {
        "Flavour": "PINEAPPLE FLAVOUR",
        "Price": "$29.50",
        "Image": "assets/pineapple.png"
    }

]

let currentIndex = 1;

function next() {
    currentIndex++;
    changeContent();
}

function prev() {
    currentIndex--;
    changeContent(); 
}

function changeContent() {
    if(currentIndex >= list.length){
        currentIndex = 0;
    }else if(currentIndex < 0) {
        currentIndex = list.length - 1;
    }
    
    document.getElementById("guava").src = list[(currentIndex + 2) % list.length].Image;
    document.getElementById("mango").src = list[currentIndex].Image;
    document.getElementById("pineapple").src = list[(currentIndex + 1) % list.length].Image;
    document.querySelector(".flavour").innerHTML = list[currentIndex].Flavour;
    document.querySelector(".price").innerHTML = list[currentIndex].Price;
}