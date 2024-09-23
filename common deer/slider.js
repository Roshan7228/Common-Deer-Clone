const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const radio4 = document.querySelector("#radio4");
const radio5 = document.querySelector("#radio5");
const first = document.querySelector(".first");
const nextButton = document.querySelector("#next");
const prewButton = document.querySelector("#prew");
const popup = document.querySelector(".home-carousel_content1");
const popup2 = document.querySelector(".home-carousel_content2");
const popup3 = document.querySelector(".home-carousel_content3");
const popup4 = document.querySelector(".home-carousel_content4");
const radios = [radio1, radio2, radio3, radio4, radio5];
let currentIndex = 0;
const intervalTime = 10000;
let interval;

function updateStyles() {
  radios.forEach((radio, index) => {
    if (radio.checked) {
      first.style.marginLeft = `${-20 * index}%`;
    }
  });
}

function autoAdvance() {
  currentIndex = (currentIndex + 1) % radios.length;
  radios[currentIndex].checked = true;
  updateStyles();
}

function autoAdvance2() {
  currentIndex = (currentIndex - 1 + radios.length) % radios.length;
  radios[currentIndex].checked = true;
  updateStyles();
}

radios.forEach((radio) => {
  radio.addEventListener("click",()=> {
    popup.style.display = "block";
    popup.style.animation = "slideInRight 2s ease-in-out";
    popup.style.animationDuration = "2s";
    popup.style.animationFillMode = "forwards";
    popup.style.animationIterationCount = "1";
    popup2.style.display = "block";
    popup2.style.animation = "slideInRight1 1s ease-in-out";
    popup2.style.animationDuration = "6s";
    popup2.style.animationFillMode = "forwards";
    popup2.style.animationIterationCount = "1";
    popup3.style.display = "block";
    popup3.style.animation = "slideInRight2 1s ease-in-out";
    popup3.style.animationDuration = "7s";
    popup3.style.animationFillMode = "forwards";
    popup3.style.animationIterationCount = "1";
    popup4.style.display = "block";
    popup4.style.animation = "slideInRight3 1s ease-in-out";
    popup4.style.animationDuration = "8s";
    popup4.style.animationFillMode = "forwards";
    popup4.style.animationIterationCount = "1";
     
  });
 
});

radios.forEach((radio) => {
  radio.addEventListener("click", updateStyles);

});

updateStyles();

nextButton.addEventListener("click", () => {
  autoAdvance();
  clearInterval(interval);
  interval = setInterval(autoAdvance, intervalTime);
  popup.style.display = "block";
  popup.style.animation = "slideInRight 2s ease-in-out";
  popup.style.animationDuration = "2s";
  popup.style.animationFillMode = "forwards";
  popup.style.animationIterationCount = "1";
  popup2.style.display = "block";
  popup2.style.animation = "slideInRight1 1s ease-in-out";
  popup2.style.animationDuration = "6s";
  popup2.style.animationFillMode = "forwards";
  popup2.style.animationIterationCount = "1";
  popup3.style.display = "block";
  popup3.style.animation = "slideInRight2 1s ease-in-out";
  popup3.style.animationDuration = "7s";
  popup3.style.animationFillMode = "forwards";
  popup3.style.animationIterationCount = "1";
  popup4.style.display = "block";
  popup4.style.animation = "slideInRight3 1s ease-in-out";
  popup4.style.animationDuration = "8s";
  popup4.style.animationFillMode = "forwards";
  popup4.style.animationIterationCount = "1";
  
  
});

prewButton.addEventListener("click", () => {
  autoAdvance2();
  clearInterval(interval);
  interval = setInterval(autoAdvance2, intervalTime);
  popup.style.display = "block";
  popup.style.animation = "slideInLeft 2s ease-in-out";
  popup.style.animationDuration = "2s";
  popup.style.animationFillMode = "forwards";
  popup.style.animationIterationCount = "1";
  popup2.style.display = "block";
  popup2.style.animation = "slideInLeft1 1s ease-in-out";
  popup2.style.animationDuration = "4s";
  popup2.style.animationFillMode = "forwards";
  popup2.style.animationIterationCount = "1";
  popup3.style.display = "block";
  popup3.style.animation = "slideInLeft2 1s ease-in-out";
  popup3.style.animationDuration = "7s";
  popup3.style.animationFillMode = "forwards";
  popup3.style.animationIterationCount = "1";
  popup4.style.display = "block";
  popup4.style.animation = "slideInLeft3 1s ease-in-out";
  popup4.style.animationDuration = "7s";
  popup4.style.animationFillMode = "forwards";
  popup4.style.animationIterationCount = "1";
  
});
interval = setInterval(updateStyles, intervalTime);

