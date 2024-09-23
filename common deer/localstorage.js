
// localstorage
let singIn={
    Email:"",
    Password:""
  }
  let EmailData=document.querySelector("#email");
  let PasswordData=document.querySelector("#password");
  let submitbtn=document.querySelector(".account__form-submit");
  EmailData.addEventListener('input',(e)=>{
    singIn.Email=e.target.value;
  })
  PasswordData.addEventListener('input',(e)=>{
     singIn.Password=e.target.value;
  })
  submitbtn.addEventListener("click",(m)=>{
    m.preventDefault();
    localStorage.setItem("singIn",JSON.stringify(singIn));
    EmailData.value="";
    PasswordData.value="";
  })

  let counter=document.querySelector("#adds");
  let number=localStorage.getItem('number');
  counter.innerHTML=`(${number})`;

  