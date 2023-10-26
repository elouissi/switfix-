


const burgerbtn = document.querySelector(".burgerbtn");
const navbar = document.querySelector(".navbar-nav2")
burgerbtn.addEventListener("click", () => {
    navbar.classList.toggle("navbar-nav2--active")

})
const serchbtn = document.querySelector(".button-ser");
const input = document.querySelector(".clique-ser")
serchbtn.addEventListener("click", () => {
    input.classList.toggle("clique-ser--active")

})



const buttonserch = document.querySelector(".button-serch");
const btnclick = document.querySelector(".buttonclick")
buttonserch.addEventListener("click", () => {
    btnclick.classList.toggle("buttonclick--active")

})

const FAQdetails1 = document.querySelector(".remplir");
if (FAQdetails1) {
    const details1 = FAQdetails1.querySelector(".FAQ")
    FAQdetails1.addEventListener("click", () => {
        details1.classList.toggle("FAQ--active")
    })


    const FAQdetails2 = FAQdetails1.nextElementSibling
    if (FAQdetails2) {
        const details2 = FAQdetails2.querySelector(".FAQ")
        FAQdetails2.addEventListener("click", () => {
            details2.classList.toggle("FAQ--active")

        })
    }

    const FAQdetails3 = FAQdetails2.nextElementSibling
    if (FAQdetails3) {
        const details3 = FAQdetails3.querySelector(".FAQ")
        FAQdetails3.addEventListener("click", () => {
            details3.classList.toggle("FAQ--active")

        })
    }
}














const imgrdrop = document.querySelector(".imgdrop");
const listservice = document.querySelector(".listservice")

imgrdrop.addEventListener("click", () => {
    listservice.classList.toggle("listservice--active")
    console.log(navbar);

})















    function validateForm() {
        const name = document.getElementById('name');
        const phone = document.getElementById('phone_number');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value === '') {
            document.getElementById('nameError').innerText = 'Name cannot be blank';
            name.classList.add("input-error")
            name.classList.remove("input-valid")
        } else {
            document.getElementById('nameError').innerText = '';
            name.classList.add("input-valid")

        }

        const phoneRegex = /\+212\-+[6|7]+\d{8}/g;
        if (!phoneRegex.test(phone.value)) {
            document.getElementById('phoneError').innerText = 'Enter a valid phone number';
            phone.classList.add("input-error");
            phone.classList.remove("input-valid")
        } else {
            document.getElementById('phoneError').innerText = '';
            phone.classList.add("input-valid");
        }



        const emailRegex = /^[a-zA-Z0-9._-]+@gmail+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').innerText = 'Enter a valid email';
            email.classList.add("input-error");
            email.classList.remove("input-valid");
            
        } else {
            document.getElementById('emailError').innerText = '';
            email.classList.add("input-valid")
        }


        const messageRgex = /\w$/;
        if (!messageRgex.test(message.value)) {
            document.getElementById('messageError').innerText = 'Message cannot be blank';
            message.classList.add("input-error");
            message.classList.remove("input-valid");
        } else {
            document.getElementById('messageError').innerText = '';
            message.classList.add("input-valid")
        }
    }




// var slideIndex = 0;
//   carousel();

//   function carousel() {
//       var i;
//       var x = document.getElementsByClassName("main__service__container2__service");
//       for (i = 0; i < x.length; i++) {
//          x[i].style.display = "none";  
//       }
//       slideIndex++;
//       if (slideIndex > x.length) {slideIndex = 1}    
//       x[slideIndex-1].style.display = "block";  
//       setTimeout(carousel, 2000); 
//   }

//   function openModal(modalId) {  
//     document.getElementById(modalId).style.display = "block";
// }

// function closeModal(modalId) {
//     document.getElementById(modalId).style.display = "none";
// // }
//  function myFunction() {
//      document.getElement("myDropdown").classList.toggle("show");
//    }
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}







