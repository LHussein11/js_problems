export function hasDuplicate(arr: number[]): boolean {
    let objNum = {};
    for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    if(num in objNum) {
        return true;
        }
        objNum[num] = true
    }
    return false;
    throw new Error('Function is not implemented');
}