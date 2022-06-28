export function amendSentence (str: string): string {
    return str.match(/[A-Z][a-z']+/g).join(' ').toLowerCase();
}
