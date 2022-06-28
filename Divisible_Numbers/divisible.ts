export function divisible(number: number): number {
    const arrNum = [];
    let sum = 0;
    for(let i = 1; i < number; i++) {
        if(i%3 === 0 || i%5 === 0) {
            arrNum.push(i);
        }
    }
    arrNum.forEach(num => sum += num)
    return sum;
}