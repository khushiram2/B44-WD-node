console.log("Hello World");

const double = (num) => num * 2;
// console.log(double(10));

//console.log(document)
//console.log(window)
//console.log(global)
// console.log(process.argv);
// console.log(process.argv[2]);

const [, , n] = process.argv;
console.log(double(n));
