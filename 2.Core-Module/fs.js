const fs = require("fs")

// Write File (Synchronous)
fs.writeFileSync("./txt/test.txt", "Hello Arshath!!") // A new file is been created
console.log("File written");

// Read file (Synchronous)
const data = fs.readFileSync("./txt/test.txt", {encoding: "utf-8"}) // A file can be read using readFileSync
console.log("File Reading",data);

// Write File (Asynchronous)
fs.writeFile("./txt/asyncTest.txt", "Hello Arshath this is Node", (err) => {
    if(err) throw err 
    else{
        console.log("Writing completed") //file is created at the same time the log below is executed
    }

    //Read file (Asynchronous)
    fs.readFile("./txt/asyncTest.txt", {encoding: "utf-8"}, (err, data) => {
        console.log("Read file completed", data); // file is read asynchronously
        
    })
})
console.log("File Writing + reading is processing");