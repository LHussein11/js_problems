export function amendSentence (str: string): string {
    str = str.match(/[A-Z][a-z']+/g).join(' ').toLowerCase();
    return str;
    throw new Error('Function is not implemented.');
}
