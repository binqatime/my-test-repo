console.log('-- while loop --');

let i = 0;
while (i <= 9) {
    console.log(i);
    i++;
}

let a = 100;
while (a >= 0) {
    console.log(a);
    a = a - 10;
}

console.log('-- do-while loop --');

let e = 0;
do {
    console.log(e);
    e++;
} while (e <= 9);

let b = 100;
do {
    console.log(b);
    b = b - 10;
} while (b >= 0);

console.log('-- for loop --');

for (i = 0; i <= 9; i++) {
    console.log(i);
}

let q;
for (q = 100; q >= 0; q = q - 10) {
    console.log('q :' + q);
}
