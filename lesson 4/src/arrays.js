const score = [28, 100, 95, 13];
console.log(score.indexOf(28));
score[3] = 45;
console.log(score);
score.push(119);
console.log(score);
console.log(score.pop());
console.log(score.map(item => item - 50));

console.log('---');
const students = ['Maria', 'Andrew', 'John'];
students.unshift('Ann');
console.log(students);

const absentStudent = students.includes('Mark');
console.log(absentStudent);

console.log(students.sort());
console.log('On duty today are ' + students.join(', '));


console.log('---');
const truthOrLies = [true, false];

truthOrLies.unshift(false);
console.log(truthOrLies);
const allTruth = truthOrLies.every(element => element == true);
console.log(allTruth);

console.log('---');

const anyTypeArray = [...score, ...students, ...truthOrLies];
console.log(anyTypeArray.length);

anyTypeArray.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

console.log(anyTypeArray.reverse());
console.log(anyTypeArray.copyWithin(0, 3, 4, 5));
