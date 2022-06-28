export function factorialize (num: number): number {
    let sum = 1;
    for(let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}
