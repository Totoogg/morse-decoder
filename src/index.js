const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let result = '';

    for (let i = 0, b = 1; i < expr.length / 10; i++, b++) {
        let a = expr.slice(i * 10, b * 10)
        arr.push(a);
    }

    let arrResult = arr.map(x => {
        if (x === '**********') {
            return ' ';
        } 

        let arr = [];

        for (let i = 0, b = 1; i < x.length / 2; i++, b++) {
            let a = x.slice(i * 2, b * 2);

            if (a === '00') {
                continue;
            } else if (a === '10') {
                arr.push('.');
            } else {
                arr.push('-')
            }
        }
        
        return arr.join('')
    })

    return arrResult.map(x => {
        if (x === ' ') return x;
        return MORSE_TABLE[x];
    }).join('');

}

module.exports = {
    decode
}