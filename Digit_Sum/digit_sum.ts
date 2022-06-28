export function digitNum(str: string): number {
    let sum: number = 0;
    str.split(' ').forEach((str, i) => {
        if(!Number.isNaN(parseInt(str))){
             parseInt(str)
             return sum += parseInt(str)
        } else {
             return str.slice(i, 1)
        }
    })
    return sum;
    throw new Error('Function is not implemented.');
}
