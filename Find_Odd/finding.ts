export function findOdd(list: number[]): number {
    const listObj = {};
    let oddNr;
    for(let i = 0; i < list.length; i++){
        const num = list[i];
        if(listObj[num]){
            listObj[num] = listObj[num] + 1;
        } else {
            listObj[num] = 1;
        }
    }
    for(const prop in listObj) {
        if(listObj[prop] % 2 !== 0) {
            oddNr = prop;
        }
    }
    return parseInt(oddNr)
}