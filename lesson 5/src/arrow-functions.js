const numbersArr = [12, 4, 67, 90, 100, 135];

const sumArrElements = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }

    return sum;
};

console.log(sumArrElements(numbersArr));

const sports = ['football', 'tennis', 'speedskating', 'weight-lifting'];
const popularityRate = [8, 9, 5, 7, 1];

const twoArrIntoOne = (arr1, arr2) => {
    for (const index in (arr1, arr2)) {
        const a = arr1[index];
        const b = arr2[index];

        if (arr1[index] === undefined || arr2[index] === undefined) break;
        console.log(a + ' ' + b);
    }
};

twoArrIntoOne(sports, popularityRate);
