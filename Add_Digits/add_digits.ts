export function addUpDigits(num: number): number {
    const numString = num.toString();
    let sum = 0;

    for(let i:number = 0; i < numString.length; i++) {
        sum += parseInt(numString.charAt(i))
    }
    return sum;
}
