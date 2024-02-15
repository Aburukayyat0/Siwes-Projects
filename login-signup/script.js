const sign = document.getElementById("sign");
const name = document.getElementById("name");
const lostP = document.getElementById("lostP");
const h2 = document.getElementById("h2");

const password = document.getElementById("password");
const emailbox = document.getElementById("email");




const logind = ()=>{

    sign.classList.add(".h2");
    h2.innerText = "Login";
    name.style.display = "none";
    lostP.style.display = "block";
}

function signup(){
    sign.classList.add(".h2");
    lostP.style.display = "none";
    h2.innerText = "Sign-up";
    name.style.display = "block";
}
