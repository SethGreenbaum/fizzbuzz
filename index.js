var start = +new Date();

// first try
for (var i = 1; i < 10001 ; i++) {
    if (i % 15 == 0) console.log("fizzbuzz")
    else if (i % 3 == 0) console.log("fizz") 
    else if (i % 5 == 0) console.log("buzz")
    else    console.log(i)
};

var end = +new Date();
var diff = end - start;

var begin = +new Date();

//second try
for(let i=0;i<10000;)
console.log(
    (++i%3?'':'fizz')+(i%5?'':'buzz')||i
    );
var completion = +new Date();
var duration = completion - begin;

var commence = +new Date();

//third try
var string = ""

for (var i = 1; i < 10001 ; i++) {
    if (i % 15 == 0) {string += "fizzbuzz \n"}
    else if (i % 3 == 0) {string += "fizz \n"}
    else if (i % 5 == 0) {string += "buzz \n"}
    else    {string += i + "\n"}
};
console.log(string)

var cease = +new Date();
var passage = cease - commence;

console.log("first function: " + diff + "ms")
console.log("second function: " + duration + "ms")
console.log("third function: " + passage + "ms")