export function digitNum(str: string): number {
    let sum = 0;
    str.split(' ').forEach((str, i) => {
        if(!Number.isNaN(parseInt(str))){
            sum += parseInt(str)
        }
    })
    return sum;
}
