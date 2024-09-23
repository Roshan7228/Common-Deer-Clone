function openModal() {
    let modalAddCard = document.querySelector(".modal-hidden");
    modalAddCard.classList.remove("hidden"); 
    
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("hidden");
    
    let body = document.querySelector("body");
    body.style.overflowY = "hidden"; 
}


let navAddCard = document.querySelector(".add");
navAddCard.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});

function closeModal() {
    let modalAddCard = document.querySelector(".modal-hidden");
    modalAddCard.classList.add("hidden"); 
    
    let overlay = document.querySelector(".overlay");
    overlay.classList.add("hidden"); 
    
    let body = document.querySelector("body");
    body.style.overflowY = "scroll"; 
}

// Event Listener to Close Modal
let closeModalButton = document.querySelector(".close");
closeModalButton.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
});



// modal 2
let searchbar = document.querySelector(".searchbar-nav");
function openmodal1() {
    let modalcard = document.querySelector(".modal-hidden1");
    modalcard.classList.remove("hidden");
    let over = document.querySelector(".overlay");
    over.classList.remove("hidden");
    let body = document.querySelector("body");
    body.style.overflowY = "hidden "
}
searchbar.addEventListener('click', function (e) {
    e.preventDefault();
    openmodal1();
})
let closeModel1 = document.querySelector("#close1");
function closeModel2() {
    let modalAddcard = document.querySelector(".modal-hidden1");
    modalAddcard.classList.add("hidden");
    let over = document.querySelector(".overlay");
    over.classList.add("hidden");
    let body = document.querySelector("body");
    body.style.overflowY = "scroll"

}
closeModel1.addEventListener('click', (e) => {
    e.preventDefault();
    closeModel2();
})