const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("Assalam Alaikum");

    //set header coontent type
    res.setHeader("content-Type", "text/html");
    
    let path = "./views";

    switch(req.url){
        case "/":
            path += "home.html";
            break;
        case "contact":
            path += "/contact.html";
            break;
        case "index":
            path += "/index.html";
            break;
            case "about":
                path += "/about.html";
                break;
        default:
            path += "404.html"
            break;
    }
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err.message);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000, "localhost", () => {
    console.log("listen to port 3000");
})



