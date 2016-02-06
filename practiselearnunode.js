//learnyounode module of Nodeschool.io

//Exercise 1 Printing hello world
/*
console.log("HELLO WORLD")
*/

//Printing command-line arguments, node hello.js 1 2 3
/*
console.log(process.argv)
*/

//Exercise 2 Printing sum of numbers in command-line arguments
/*
var total=0;
for(i=2;i<process.argv.length;i++){
	total+=Number(process.argv[i]);
}
console.log(total);
*/

//Exercise 3 My First I/O
//Single sync filesystem operation to read a file 
//and print the number of newlines
/* 
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString().split('\n').length - 1;
console.log(str);
*/

/*Exercise 4 My First Async I/O*/
//Single async filesystem operation to read a file 
//and print the number of newlines
/*
var fs = require('fs');
var str = fs.readFile(process.argv[2],'utf-8',function callback(err, data){
	console.log(data.split('\n').length-1);
});
*/

/*Exercise 5 Filtered ls*/
// print a list of files in a given directory,
// filtered by the extension of the files
/*
var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],function (err,files){
		files.forEach(function (file){
		if (path.extname(file) === '.'+process.argv[3])
		{
			console.log(file);
		}
	});
})
*/

/*Exercise 6 Make it modular*/
