
//console.log('hello');
/*
var example = 'some string'
console.log(example);
*/

//var someString = 'example string'
//console.log(someString.length);

/*
var pizza = 'pizza is alright';
pizza = pizza.replace('alright','wonderful');
console.log(pizza);
*/

/*
var example = 123456789;
console.log(example);
*/

/*
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);
*/

/*
var n = 128;
console.log(n.toString());
*/

/*
var fruit = 'orange';

if(fruit.length>5)
{
	console.log('The fruit name has more than five characters.');
}
else{
	console.log('The fruit name has five characters or less');
}
*/

/*
var total = 0;
var limit = 10;

for(i=0;i<limit;i++){
total+=i;
}
console.log(total);
*/

//var pizzaToppings = ['tomato sauce','cheese','pepperoni'];
//console.log(pizzaToppings);

/*
var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function evenNumbers(number){
	return number%2===0;
});
console.log(filtered);
*/

//var food = ['apple','pizza','pear'];
//console.log(food[1]);

/*
var pets = ['cat','dog','rat'];

for(i=0;i<pets.length;i++){
	pets[i]=pets[i]+'s';
}
console.log(pets);
*/

/*
var pizza = {
	toppings:['cheese','sauce','pepperoni'],
	crust:'deep dish',
	serves:2
};
console.log(pizza);
*/

/*
var food = {
	types:'only pizza'
};
console.log(food['types']);
*/

/*
function eat (food){
	return food + 'tasted really good.';
}
console.log(eat('bananas '));
*/

/*
function math(a,b,c){
	return a+(b*c); 
}
console.log(math(53,61,67));
*/

var a=1,b=2,c=3;
(function firstFunction(){
	var b=5,c=6;
	(function secondFunction(){
		var b=8;		
		(function thirdFunction(){
			var a=7,c=9;
			(function fourthFunction(){
				var a=1,c=8;
			})();
		})();
		console.log("a: "+a+", b: "+b+", c: "+c);
	})();
})();

