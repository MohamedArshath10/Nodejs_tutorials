const os = require("os")

// Platform
console.log("Platform", os.platform());
// Architecture
console.log("Architecture", os.arch());
// Total Memory
console.log("Total Memory", Math.round(os.totalmem() / 1024 ** 3), 'GB');
// Free memory
console.log("Free Memory", Math.round(os.freemem() / 1024 ** 3), 'GB');

