let accordion=document.querySelector(".contenBx");
accordion.addEventListener("click",(e)=>{
    let containdec=document.querySelector(".content-text1");
    containdec.classList.toggle('active');
})


// decription fille add
let Data=new URLSearchParams(window.location.search);


window.addEventListener('load',()=>{
    let dataobj={
        image:Data.get('image'),
        title:Data.get('title'),
        price:Data.get('price'),
        id:Data.get("id")
    }

    let image=document.getElementById("image").src=dataobj.image;
    let title=document.getElementById("section-title").innerHTML=dataobj.title;
    let price=document.getElementById("products-pric").innerHTML=dataobj.price;
    let imagemodal = document.getElementById("image52").src = dataobj.image;
    let titlemodal = document.getElementById("layout-title");
    titlemodal.innerHTML = dataobj.title;
    let pricemodal = document.getElementById("layout-price");
    pricemodal.innerHTML = `$${dataobj.price}`;
    let priceMOdals = document.querySelector("#TotalPrice");
    priceMOdals.innerHTML = dataobj.price;
    

})




// add to card 
let counter = document.querySelector("#add");
let number = localStorage.getItem('number') || 0;

let addToCard = document.querySelector("#addtocard");

addToCard.addEventListener('click', () => {
  number++;
  counter.innerHTML = `(${number})`;
  localStorage.setItem('number', number);
  openModals();

  let dataobj1 = {
    image: Data.get('image'),
    title: Data.get('title'),
    price: Data.get('price'),
    id: Data.get("id")
  };

  let storedData = localStorage.getItem('productData');
  if (storedData) {
    storedData = JSON.parse(storedData);
    storedData.push(dataobj1);
    localStorage.setItem('productData', JSON.stringify(storedData));
  } else {
    localStorage.setItem('productData', JSON.stringify([dataobj1]));
  }

  let imagemodal = document.getElementById("image52").src = dataobj1.image;
  let titlemodal = document.getElementById("layout-title");
  titlemodal.innerHTML = dataobj1.title;
  let pricemodal = document.getElementById("layout-price");
  pricemodal.innerHTML = `$${dataobj1.price}`;
  let priceMOdals = document.querySelector("#TotalPrice");

  let totalPrice = 0;
  storedData.forEach((data) => {
    totalPrice += Number(data.price);
  });
  priceMOdals.innerHTML = `$${totalPrice}`;

  // Dusre product ka price add karna
  let finalPrice = totalPrice;
  let previousPrice = localStorage.getItem('finalPrice');
  if (previousPrice) {
    finalPrice += Number(previousPrice);
  }
  document.querySelector("#finalPrice").innerHTML = `$${finalPrice}`;
})
window.addEventListener('load', () => {
  let storedData = localStorage.getItem('productData');
  if (storedData) {
    storedData = JSON.parse(storedData);
    let totalPrice = 0;
    storedData.forEach((data) => {
      totalPrice += Number(data.price);
    });
    let priceMOdals = document.querySelector("#TotalPrice");
    priceMOdals.innerHTML = `$${totalPrice}`;
  }
})





let minuss=document.querySelector(".minus");
let number1=document.querySelector(".number");
let number3=document.querySelector(".number1");
minuss.addEventListener("click", () => {
  if (number > 0) {
    number--;
    number1.innerHTML = number;
    number3.innerHTML = number;
    localStorage.setItem('number', number);
    localStorage.removeItem('finalPrice');

    // Price update karna
    let dataObj = Number(Data.get('price')) || 0;
    let totalPrice = dataObj * number;
    localStorage.setItem('finalPrice', totalPrice);
    PriceSelecter.innerHTML = `$${totalPrice}.00`;
    subTotalPrices.innerHTML = `$${totalPrice}.00`;
  }
})
let pluss = document.querySelector(".plus");


pluss.addEventListener("click", () => {
  if (number >= 0) {
    number++;
    number1.innerHTML = number;
    number3.innerHTML = number;
    localStorage.setItem('number', number);

    // Price update karna
    let dataObj = Number(Data.get('price')) || 0;
    let totalPrice = dataObj * number;
    localStorage.setItem('finalPrice', totalPrice);
    PriceSelecter.innerHTML = `$${totalPrice}.00`;
    subTotalPrices.innerHTML = `$${totalPrice}.00`;
  }
})

// modal//
function openModals() {
    let modalAddCard = document.querySelector(".modal55");
    modalAddCard.classList.remove("hidden66"); 
    
    let overlay = document.querySelector(".overlays5");
    overlay.classList.remove("hidden66");
    
    
    let body = document.querySelector("body");
    body.style.overflowY = "hidden"; 

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
});

let minuss1=document.querySelector(".minus1");
let number2=document.querySelector(".number1");
let pluss1=document.querySelector(".plus1");
let PriceSelecter=document.querySelector("#layout-price");
let subTotalPrices=document.querySelector("#TotalPrice");

let totalPrice = 0;




pluss1.addEventListener('click', () => {
  number++;
  number2.innerHTML = number;
  let storedPrice = localStorage.getItem('finalPrice');
  if (storedPrice) {
    totalPrice = Number(storedPrice);
  } else {
    totalPrice = 0;
  }
  let dataObj = Number(Data.get('price')) || 0;
  totalPrice = dataObj * number;
  let finalPrice = totalPrice;
  localStorage.setItem('finalPrice', finalPrice);
  PriceSelecter.innerHTML = `$${finalPrice}.00`;
  console.log(subTotalPrices);
  subTotalPrices.innerHTML=`$${finalPrice}.00`;

})
minuss1.addEventListener('click', () => {
  if (number > 1) {
    number--;
    number2.innerHTML = number;
    let storedPrice = localStorage.getItem('finalPrice');
    if (storedPrice) {
      totalPrice = Number(storedPrice);
    } else {
      totalPrice = 0;
    }
    let dataObj = Number(Data.get('price')) || 0;
    totalPrice = dataObj * number;
    let finalPrice = totalPrice;
    localStorage.setItem('finalPrice', finalPrice);
    PriceSelecter.innerHTML = `$${finalPrice}.00`;
    subTotalPrices.innerHTML=`$${finalPrice}.00`;
  }
});








// jsone data fetch 
// let mainSection=document.querySelector(".description-data");
// function myfunction(id){
//     fetch(`http://localhost:3000/productsData/${id}`)
//     .then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         // console.log(data);
//         display(data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }


// function display(data){
//     // data.map((details)=>{
//     //     let datass=show(details.dec,details.list1);
//     //     mainSection.innerHTML+=datass;
//     // })
//     console.log(data);
//     // let datas=data;
//     // console.log(datas);
//     // mainSection.innerHTML+=datas.price;
//     // mainSection.innerHTML+=datas.dec;
//     // mainSection.innerHTML+=datas.list1;
//     // datas.map((datss)=>{
//     //     console.log(datss.price);
//     // })
// }

 
// function show(dec,list1,list2,list3,list4,list5,decp1,decp2,decp3){
//     let store=`<div class="content-text">
//                     <p class="text-2">${dec}</p>
//                     <ul>
//                         <li>${list1}</li>
//                         <li>${list2}</li>
//                         <li>${list3}</li>
//                         <li>${list4}</li>
//                         <li>${list5}</li>
//                     </ul>
//                     <p class="text-3">${decp1}</p>
//                     <p class="text-4">${decp2}</p>
//                     <h6>${decp3}</h6>
//                 </div>`;
//     return store;
// }