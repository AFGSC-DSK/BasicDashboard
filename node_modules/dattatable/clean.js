const fs = require("fs");

// See if the build directory exists
if (fs.existsSync("./build")) {
    // Delete the file
    fs.rmdirSync("./build", { recursive: true });

    // Log
    console.log("Deleted the build directory.");
}

// See if the dist directory exists
if (fs.existsSync("./dist")) {
    // Delete the file
    fs.rmdirSync("./dist", { recursive: true });

    // Log
    console.log("Deleted the dist directory.");
}

// See if the docs directory exists
if (fs.existsSync("./docs")) {
    // Delete the file
    fs.rmdirSync("./docs", { recursive: true });

    // Log
    console.log("Deleted the docs directory.");
}

// See if the icons directory exists
if (fs.existsSync("./icons")) {
    // Delete the file
    fs.rmdirSync("./icons", { recursive: true });

    // Log
    console.log("Deleted the icons directory.");
}