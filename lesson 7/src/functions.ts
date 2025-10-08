const numbersArr: number[] = [12, 4, 67, 90, 100, 135];

console.log(numbersArr.reduce((acc, element) => acc + element));

function sumArrElements(arr: number[]): number {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }

    return sum;
}

console.log(sumArrElements(numbersArr));

function getSum(arr: number[]): number {
    let sum = 0;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(getSum(numbersArr));

function arrSumUp(arr: number[]): number {
    let sum = 0;
    arr.forEach((num) => (sum += num));
    return sum;
}

console.log(arrSumUp(numbersArr));

const sports: string[] = ['football', 'tennis', 'speedskating', 'weight-lifting'];
const popularityRate: number[] = [8, 9, 5, 7, 1];

function twoArrIntoOne(arr1: unknown[], arr2: unknown[]): void {
    for (const [index, a] of arr1.entries()) {
        const b = arr2[index];

        if (arr1[index] === undefined || arr2[index] === undefined) break;
        console.log(a + ' ' + b);
    }
}

twoArrIntoOne(sports, popularityRate);
