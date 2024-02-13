const inputBox = document.getElementById("input");
const alphaCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const numbers = 1234567890;
const sysmbols = ">!@#$%^&*()_+?>:<|\'";

const length = 16;

const randomPass = alphaCaps + alphaLower + numbers + sysmbols;

function passwordGene(){
    let randomPassword = "";

    randomPassword += alphaCaps[Math.floor(Math.random() * alphaCaps.length)];
    randomPassword += alphaLower[Math.floor(Math.random() * alphaLower.length)];
    randomPassword += numbers[Math.floor(Math.random() * numbers.length)];
    randomPassword += sysmbols[Math.floor(Math.random() * sysmbols.length)];

    while(length > randomPassword.length){
        randomPassword += randomPass[Math.floor(Math.random() * randomPass.length)]
    }
    inputBox.value = randomPassword;

}