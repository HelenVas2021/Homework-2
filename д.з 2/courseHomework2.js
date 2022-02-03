//Задача №1
/*
let a = +prompt('Введите число А');
let b = +prompt('Введите число В');


let i = 0;
for (let i = a; i <= b; i++) {
	if (i % 2 == 0) {
		let sumK = Math.pow(i, 2);
		console.log(sumK);
	};
};
*/

//Задача №2
/*
let num;
do {
	num = prompt("Введите число ", 0);
	console.log('Вы ввели не число. Попробуйте еще раз!');
} while (isNaN(num));
console.log(num);
*/
/*
do {
	num = prompt("Введите число ", 0);
	if (!isNaN(num)) {
		console.log(num);
		break;
	}
	console.log('Вы ввели не число. Попробуйте еще раз!');

} while (true)
*/


//Задача№3
/*
let num = +prompt('Введите число', '');
// if (num === 2) {
// 	console.log("Вы ввели простое число " + num);
// }
// if (num === 1 || num === 0) {
// 	console.log('Вы ввели простое число ' + num);
// }
let flag = true;
for (let i = 2; i < num; i++) {
	if (num % i === 0) {
		flag = false;
		console.log('Вы ввели НE простое число ' + num);
		break;
	}
}
console.log('Вы ввели простое число ' + num);
*/


//Задача №4

let sum = 0;
let num = 250;

for (let i = 2; i < num; i++) {
	let isPrime = true;
	for (let j = 2; j < i; j++) {
		if (i % j === 0) {
			isPrime = false;
		}
	}
	if (isPrime) {
		sum += i;

	}

}
console.log(sum);
