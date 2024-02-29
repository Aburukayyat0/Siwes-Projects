const input = document.querySelector("input");
const download = document.querySelector("button");
const regEx = /^.*[\\\/]/;

download.addEventListener("click", (e) => {
    e.preventDefault();
    download.textContent = "Downloading File...";
    downloadFile(input.value);
});
 
function downloadFile(path){
    fetch(path)
    .then((pathFile) => {
        pathFile.blob();
    })
    .then((pathFile) => {
        let filePath = URL.createObjectURL(pathFile);
        let a = createElement("a");
        a.href = filePath;
        a.download = filePath.replace(regEx, "");

        document.body.appendChild(a);
        a.click();
        a.remove();

        URL.revokeObjectURL(filePath);
        download.textContent = "Download File";
    })
    .catch((error)=>{
        alert("failed to donwload file");
        download.textContent = "Downloading Filed";
        console.log(error);
    })
}