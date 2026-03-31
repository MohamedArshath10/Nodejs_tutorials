const path = require("path")
const filepath = "E:/PROJECT OF ARSHATH/NodeJs Tutorial/1.Intro/app.js"

console.log("Base name: ", path.basename(filepath));  //o/p ==>  app.js
console.log("Directory name: ", path.dirname(filepath));  //o/p ==>  E:/PROJECT OF ARSHATH/NodeJs Tutorial/1.Intro
console.log("Extensiojn name: ", path.extname(filepath));  //o/p ==> .js

// To locate the test.txt using join
console.log("Joined path: ", path.join(__dirname, 'txt', 'test.txt'));