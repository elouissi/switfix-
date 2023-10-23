 


const burgerbtn = document.querySelector(".burgerbtn");
const navbar = document.querySelector(".navbar-nav2")
burgerbtn.addEventListener("click" , () => {
    navbar.classList.toggle("navbar-nav2--active")
    
} )



const buttonserch = document.querySelector(".button-serch");
const btnclick = document.querySelector(".buttonclick")
buttonserch.addEventListener("click" , () => {
    btnclick.classList.toggle("buttonclick--active")
    
} )
const FAQdetails1 = document.querySelector(".remplir");
const details1 = FAQdetails1.querySelector(".FAQ")
FAQdetails1.addEventListener("click" , () => {
    details1.classList.toggle("FAQ--active")
    
} )
 
const FAQdetails2 = FAQdetails1.nextElementSibling
const details2 = FAQdetails2.querySelector(".FAQ")
FAQdetails2.addEventListener("click" , () => {
    details2.classList.toggle("FAQ--active")
    
} )
const FAQdetails3 =  FAQdetails2.nextElementSibling
const details3 = FAQdetails3.querySelector(".FAQ")
FAQdetails3.addEventListener("click" , () => {
    details3.classList.toggle("FAQ--active")
    
} )
 