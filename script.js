//login form.................................................................................................................
const showPopupBtn = document.querySelector(".login-btn");
const formpopup = document.querySelector(".form");
const hidePopupBtn = document.querySelector(".form .close-btn");

const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

//show form
showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link =>{
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        formpopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});

//login home page.................................................................................................................
function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
        if(email == "tharushiabirandi@gmail.com" && password == "20020609"){
            alert("successfull! you can log....");
            window.location.assign("c:\Users\User\Desktop\furniture\home page.html");
        }
        else{
            alert("wrong invalid");
        }
}

//search box......................................................................................................................
function myFunction(){
    document.write("search Anything............................................................");
}

//images large size.......................................................................................................................
document.querySelectorAll(".galleery img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
        

    }
});
    document.querySelector(".popup-image span").onlick = () =>{
    document.querySelector(".popup-image").style.display = "none"; 
}
