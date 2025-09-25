const a = 8;
const b = 3;
const c = '3';
const d = 'number';
let abc;
const sum = a + b;

console.log(sum);
console.log(a <= sum);
console.log(a === b);
console.log(b >= a);
console.log(b == c);
console.log(b === c);
console.log(sum !== a);

console.log('----------');

const bool = Boolean('false');
console.log(bool);

const dogHungry = false;
const catThirsty = false;

console.log(catThirsty == dogHungry);

if (catThirsty === true && dogHungry === true) {
    console.log('Feed the animals!');
} else if (catThirsty === false || dogHungry === true) {
    console.log('still feed the animals');
} else if (catThirsty === true) {
    console.log('Pure some water');
} else {
    console.log('Animals are fed up! :P');
}

