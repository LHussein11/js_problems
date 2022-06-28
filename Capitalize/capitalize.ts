export function capitalize(str: string): string {
    str = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    return str;
    throw new Error('Function is not implemented.');
}
