// json-data
let mainSection = document.querySelector(".Collection-products");
let productsDetails=[]
function myfunction(){
  fetch("http://localhost:3000/productsData")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data);
    display(data);
    productsDetails=data
  }).catch((err)=>{
    console.log(err);
  })
}
myfunction();
 
function display(prod){
  prod.map((products)=>{
     let store1=show(products.id,products.image,products.title,products.price);
     mainSection.innerHTML+=store1;
  })

}

function show(id,image,title,price){
  let store=`<div class="layout-item" data-id="${id}">
                 <a href="decription.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&id=${encodeURIComponent(id)}">
                 <div class="item-image">
                    <img src="${image}" alt="${title}">
                    <div class="overlays">
                        <button class="js-product-add-text" type="submit" data-id="${id}">Add to Cart<i class="ri-add-line"></i></button>
                      </div>
                 </div></a>
                 <div class="item-details">
                    <h3 class="products-details">${title}</h3>
                    <p class="products-price">$${price}</p>
                 </div>
             </div>`
       return store;  
           
}
let select = document.querySelector("#SortyBy");

select.addEventListener("change",()=>{
  let selectValue=select.value;
  let price=productsDetails.filter((el)=>{
     return el.price;
  })
  let sortdata;
  if(selectValue==="price-ascending"){
    sortdata=price.sort((a,b)=>{
      return a.price-b.price;
    })
  }
  else if(selectValue==="price-descending"){
    sortdata=price.sort((a,b)=>{
      return b.price-a.price;
    })
  }
  mainSection.innerHTML = "";
  display(sortdata);
})



  let counter=document.querySelector("#adds");
  let number=localStorage.getItem('number');
  counter.innerHTML=`(${number})`;

  if(number>0){
    function openModals() {
      let modalAddCard = document.querySelector(".modal55");
      modalAddCard.classList.remove("hidden66"); 
      
      let overlay = document.querySelector(".overlays5");
      overlay.classList.remove("hidden66");
      
      
      let body = document.querySelector("body");
      body.style.overflowY = "hidden"; 
    

      let dataobj = localStorage.getItem('dataobj');
      if (dataobj) {
        dataobj = JSON.parse(dataobj);
        let imagemodal=document.getElementById("image52").src=dataobj.image;
        let titlemodal=document.getElementById("layout-title");
        titlemodal.innerHTML=dataobj.title;
        let pricemodal=document.getElementById("layout-price");
        pricemodal.innerHTML=`$${dataobj.price}`;
      }
    
  }


  let navAddCard = document.querySelector(".add");
  navAddCard.addEventListener('click', function (e) {
      e.preventDefault();
      openModals();
  });

  function closeModals() {
      let modalAddCard = document.querySelector(".modal55");
      modalAddCard.classList.add("hidden66"); 
      
      let overlay = document.querySelector(".overlays5");
      overlay.classList.add("hidden66"); 
      
      let body = document.querySelector("body");
      body.style.overflowY = "scroll"; 
  }

  let closeModalButton = document.querySelector("#close");
  closeModalButton.addEventListener('click', function (e) {
      e.preventDefault();
      closeModals();
      console.log("roshan");
  });

  let minuss1=document.querySelector(".minus1");
  let number2=document.querySelector(".number1");

  minuss1.addEventListener('click',()=>{
    number--;
    number2.innerHTML=number;
    
  })
  }
  else{
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
  }

// let counter = document.querySelector("#adds");
// let number = localStorage.getItem('number') || 0;

// let addToCard = document.querySelector("#addtocard");

// addToCard.addEventListener('click', () => {
//   number++;
//   counter.innerHTML = `(${number})`;
//   localStorage.setItem('number', number);
//   console.log("roshan");
// })  
// window.addEventListener('load', () => {
//     let storedNumber = localStorage.getItem('number');
//     if (storedNumber) {
//       counter.innerHTML = `(${storedNumber})`;
//     }
//   })

