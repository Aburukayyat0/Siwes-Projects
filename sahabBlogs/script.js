fetch("json/data.json", {
    method : "GET",
})
.then((result) => {
   const data = result;
})
.catch(err => {
    console.log(err);
})

data.map(data => {
    console.log(data.name);
})