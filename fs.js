const fs = require("fs");

// const quote = "No beauty shines brighter than that of a good heart🥳!!";

// fs.writeFile("./awesome.html", quote, (err) => {
//   console.log("Completed writing awesome.html");
// });

const quote2 = "Live More, Worry Less 🥳🥳🥳";

//Task
//Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// ....
// text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed writing text-${i}.html`);
//   });
// }

//Task-2
//node fs.js 30 => 30 files to be created | note-1.txt....note-30.txt
// const [, , noOfFiles] = process.argv;

// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/note-${i}.txt`, quote2, (err) => {
//     console.log(`Completed writing note-${i}.txt`);
//   });
// }

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error ❌", err);
//   }
//   console.log("The content of the file is:", data);
// });

const niceQuote = "\nMake everyday a little less ordinarily";

// fs.appendFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed writing nice.txt");
// });

// fs.unlink("./toRemove.txt", (err) => {
//   console.log("Deleted Successfully");
// });

// fs.readdir("./backup", (err, files) => {
//   console.log("All file name", files);
// });

//delete all files in backup folder

// fs.readdirSync("./backup", (err, data) => {
//   data.forEach((fileName) => {
//     fs.unlinkSync(`./backup/${fileName}`),
//       console.log("Deleted Successfully", fileName);
//   });
// });

//writeFile => CallStack => WebApi(whoever finishes writing first) => CallBack Queue => CallStack

// fs.writeFile, fs.readFile, fs.appendFile - async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync - sync

// const [, , noOfFiles] = process.argv;

// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFileSync(`./backup/text-${i}.txt`, quote2);
//   console.log(`Completed writing text-${i}.txt`, i);
// }

fs.readdirSync("./backup", files);
console.log("All file name", files);
