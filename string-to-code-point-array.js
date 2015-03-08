export default function stringToCodePointArray(string) {
    string = String(string);

    const arr = [];

    for(let i = 0, length = string.length; i < length; ++i) {
        let codePoint = string.codePointAt(i);

        arr.push(codePoint);
        if(codePoint !== string.charCodeAt(i)) {
            ++i;
        }
    }

    return arr;
}
