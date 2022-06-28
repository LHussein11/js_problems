export function addUpDigits(num: number): number {
    let numString:string = num.toString();
    let arrNumbers = [];
    let sum:number = 0;

    for(let i:number = 0; i < numString.length; i++) {
        arrNumbers.push(parseInt(numString.charAt(i)));
        sum += arrNumbers[i];
    }
    return sum;
    throw new Error('Function is not implemented.');
}
