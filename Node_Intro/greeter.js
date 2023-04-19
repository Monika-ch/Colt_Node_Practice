// const args = process.argv.slice(2);
// for (let arg of args) {
//   console.log(`Hi there, ${arg}!`);
// }

const fs = require("fs");
const folderName = process.argv[2] || "Project";

// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("IN CALLBACK");
//   if (err) throw err;
// });
// console.log("AFTER CALLBACK");

// fs.mkdirSync("Cats");
// console.log("AFTER MKDIR IN FILE");

// // ******** Creating a script to make a project folder with HTML, CSS and JS files. CSS, JS files are linked to index.html with babel script to write React Javascript! ********* 

const htmlData = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="app.css">
  <title>Document</title>
</head>
<body>
  
  <div id="root"></div>
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>

  <script src="https://unpkg.com/babel-standalone"></script>
  <script src="index.js" type="text/jsx"></script>
</body>
</html>`;

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, htmlData);
  fs.writeFileSync(`${folderName}/app.css`, "/* Your CSS styles here! */");
  fs.writeFileSync(`${folderName}/app.js`, "// Your JavaScript here!");
} catch (e) {
  console.log("SOMETHING WENT WRONG!!!");
  console.log(e);
}
