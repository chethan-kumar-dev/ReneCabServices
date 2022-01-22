const navbarToggle = document.querySelector('.navbar').getElementsByTagName('ul')[0];
const navbarUl = document.getElementsByTagName('ul')[0];
console.log(navbarToggle)
if(window.clientHeight > 600){
   if(navbarToggle.classList.contains('navbar-toggle')){
      navbarToggle.classList.remove('navbar-toggle')
   }
}
window.onscroll=function(e){
   if(window.scrollY > 50){
      navbarToggle.classList.add('navbar-toggle');
   }
   else{
      navbarToggle.classList.remove('navbar-toggle')
   }
   //console.log(window.scrollY)
}
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61b9b747c82c976b71c18c36/1fmun7tj4';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

var form = document.getElementById('form');
var responseData = document.querySelector('.response-data');

form.onsubmit=function(e){

   e.preventDefault();
   var emailInput = document.querySelector('.email-input');
   var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(emailInput.value.match(regexp)){
      fetch(`https://renecabs-62559-default-rtdb.asia-southeast1.firebasedatabase.app/mail.json`,{
         method:'post',
         body:JSON.stringify({
            name:'chethan',
            kum:'has'
         }),
         headers:{
            "Content-type": "application/json; charset=UTF-8"
         }
      })
      .then(res=>res.json())
      .then(data=>{
         displayResponse('Successfully subscribed','lightgreen','<img src="https://img.icons8.com/color/20/000000/checked--v1.png"/>')
      })
      emailInput.value=''
   }
   else
   {
      displayResponse('Please fill in details','red','<img src="https://img.icons8.com/color/20/000000/cancel.png"/>')
   }
}

function displayResponse(message,color,image){
   responseData.innerHTML=
   `
   <div style='color:${color};display:flex;gap:5px;'>
      <div>
         ${image}
      </div>
      <p>${message}<p>
   </div>
   `
   setTimeout(() => {
      responseData.innerHTML=''
   }, 5000);
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click',()=>{
  
   
   if(document.querySelector('.navbar-ul').classList.contains('toggle-ul')){
     // document.querySelector('body').style.position='relative'
   }
   else
   {
      //document.querySelector('body').style.position='fixed'

   }

   document.querySelector('.navbar-ul').classList.toggle('toggle-ul')
})
var links = document.querySelector('.navbar-ul').getElementsByTagName('li');

for(var i=0;i<links.length;i++){
   links[i].addEventListener('click',function(){
      document.querySelector('.navbar-ul').classList.toggle('toggle-ul')
   })
}

const modal = document.querySelector('.modal');
setTimeout(() => {
   modal.remove()
}, 2000);
