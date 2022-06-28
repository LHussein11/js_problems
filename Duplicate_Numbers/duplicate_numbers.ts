export function hasDuplicate(arr: number[]): boolean {
    const objNum = {};
    for(let i = 0; i < arr.length; i++){
    const num = arr[i];
    if(num in objNum) {
        return true;
        }
        objNum[num] = true
    }
    return false;
}