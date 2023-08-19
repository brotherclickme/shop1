
function arithmetic(x: number): number;
function arithmetic(x: string): string; 
function arithmetic(x: number | string): number | string {
    if (typeof x === 'number') {
        return x;
    } else {
        return x+'是字符串';
    }
}
arithmetic('9').length;
