export function filterList(list: any[]): any[] {
    const listWithoutString = [];
    list.forEach(item => {
        if(typeof item !== 'string'){
            listWithoutString.push(item)
        }
    })
    return listWithoutString; 
}