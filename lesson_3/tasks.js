// Реализовать функции-аналоги методов строк.
// concat(), lastIndexOf(), includes(), repeat(), substr(), substring()

// Task 1  -  concat()

function myConcat(str1, str2) {
    let args = [...arguments];
    let resultStr = '';

    args.forEach((item) => {
        if (typeof (item) === 'string') {
            resultStr += item;
        } else alert('enter valid data type of string')
    })

    return resultStr;
}

//console.log('concat', myConcat('asd', 'ggh', 'sdsdfasfv', 'dasdq'));

// Task 2  -  lastIndexOf()

function myLastIndexOf (str1, str2, position) {
    let args = [...arguments];
    let resultIndex = [];

    if (args.length < 2) alert('enter more than one valid argument');

    let pos = args.length >= 3 && typeof args[2] === 'number' ? args[2] : 0;
    let strMain = args.length >= 2 && typeof args[0] === 'string' ? args[0] : undefined;
    let strSub = args.length >= 2 && typeof args[1] === 'string' ? args[1] : undefined;

    if (pos === 0 && args.length >= 3) return -1;

    resultIndex = strIncludeStr(strMain, strSub, pos);

    return  resultIndex.length === 0 ? -1 : resultIndex[resultIndex.length - 1];
}

console.log(myLastIndexOf('Hello world world', 'worldsdf'));

function strIncludeStr(str1, str2, pos) {
    let helpStr = '';
    let k = 0;
    let resIndArray = [];

    for (let i = pos; i <= str1.length - str2.length; i++) {
        for (let j = i; j < str2.length + i; j++) {
            helpStr += str1[j];
        }
        if (helpStr === str2) {
            resIndArray[k] = i - pos;
            k++;
        }
        helpStr = '';
    }
    // console.log('resIndArray = ', resIndArray);
    return resIndArray;
}

// console.log('result position = ', myLastIndexOf('abcdef abcd ab ab', 'ab', 2)); //13
// console.log('result position = ', myLastIndexOf('abcdef abcd ab ab', 'ab')); //15
// console.log('result position = ', myLastIndexOf('Дивный новый мир', 'й')); //11
// console.log('result position = ', myLastIndexOf('Дивный новый мир', 'новый')); //7
// console.log('result position = ', myLastIndexOf('canal', 'a')); //3
// console.log('result position = ', myLastIndexOf('canal', 'a', 2)); //1
// console.log('result position = ', myLastIndexOf('canal', 'a', 0)); //-1
// console.log('result position = ', myLastIndexOf('canal', 'x')); //-1

// Task 3  -  includes()

function myIncludes(str1, str2, position) {
    let args = [...arguments];
    let result = false;
    let helpStr = '';

    if (args.length < 2) alert('enter more than one valid argument');

    let pos = args.length >= 3 && typeof args[2] === 'number' ? args[2] : 0;
    let strMain = args.length >= 2 && typeof args[0] === 'string' ? args[0] : undefined;
    let strSub = args.length >= 2 && typeof args[1] === 'string' ? args[1] : undefined;

    for (let i = pos; i <= strMain.length - strSub.length; i++) {
        let j = i;
        while (j < strSub.length + i && !result) {
            helpStr += str1[j];
            j++;
        }
        if (helpStr === str2) {
            result = true;
        }
        helpStr = '';
    }

    return result;
}

// console.log('result position = ', myIncludes('abcdef abcd ab ab', 'ab', 2)); //true
// console.log('result position = ', myIncludes('abcdef abcd ab ab', 'ab')); //true
// console.log('result position = ', myIncludes('Дивный новый мир', 'й')); //true
// console.log('result position = ', myIncludes('Дивный новый мир', 'новый')); //true
// console.log('result position = ', myIncludes('canal', 'A')); //false
// console.log('result position = ', myIncludes('canal', 'a', 2)); //true
// console.log('result position = ', myIncludes('canal', 'x')); //false

// Task 4  -  repeat()

function myRepeat(str, repeatNumber) {
    let resultStr = '';

    repeatNumber = +repeatNumber || 0;
    if (repeatNumber < 0) {
        throw new RangeError('repeat count must be non-negative');
    }
    if (repeatNumber == Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }
    repeatNumber = Math.floor(repeatNumber);
    if (str.length == 0 || repeatNumber == 0) {
        return '';
    }
    for (let i = 0; i < repeatNumber; i++) {
        resultStr += str;
    }
    return resultStr;
}

// console.log('result string = ', myRepeat('абв', 0)); // ''
// console.log('result string = ', myRepeat('абв', 2)); // 'абвабв'
// console.log('result string = ', myRepeat('абв', 1)); // 'абв'
// console.log('result string = ', myRepeat('абв', 3.5)); // 'абвабвабв'
// console.log('result string = ', myRepeat('абв', -1)); // RangeError

// Task 5  -  substr()

function mySubstr(string, indStart, length) {
    let args = [...arguments];
    let resultStr = '';
    let start, end, str;

    if (args.length < 2) alert('enter more than one valid argument');

    if (args.length >= 3 &&
        typeof (args[0]) === 'string' &&
        typeof (args[1]) === 'number' &&
        typeof (args[2]) === 'number')
    {
        str = args[0];
        start = args[1];

        if ( (start > 0 && start >= str.length) || (str.length <= 0) ) {return ''}

        if (start < 0 && Math.abs(start) > str.length) {
            start = 0;
        } else if (start < 0 ) {
            start = str.length - Math.abs(start);
        }
        end = start + args[2] - 1;

    }

    if (args.length === 2 &&
        typeof (args[0]) === 'string' &&
        typeof (args[1]) === 'number')
    {
        str = args[0];
        start = args[1];

        if (start < 0 && Math.abs(start) > str.length) {
            start = 0;
        } else if (start < 0 ) {
            start = str.length - Math.abs(start);
        }

        end = str.length - 1;
    }

    for (let i = start; i <= end; i++) {
        resultStr += str[i];
    }

    return resultStr;
}

//console.log('result string = ', mySubstr('Hello world!', 1, 4)); // 'ello'
// console.log('result string = ', mySubstr('Hello world!', 2)); // 'llo world!'
// console.log('result string = ', mySubstr('Hello world!', 0, 1)); // 'H'
//console.log('result string = ', mySubstr('Hello world!', 11, 1)); // '!'
//console.log('result string = ', mySubstr('Hello world!', 11, -1)); // ''
//console.log('result string = ', mySubstr('Hello world!', 12, 2)); // ''
//console.log('result string = ', mySubstr('Hello world!', -12, 2)); // 'He'
//console.log('result string = ', mySubstr('Hello world!', 12)); // ''
//console.log('result string = ', mySubstr('Hello world!', -12)); // 'Hello world!'
//console.log('result string = ', mySubstr('Hello world!', -5, 2)); // 'or'

//console.log('result string = ', mySubstr('абвгдеёжзи', -3, 2)); //
//console.log('result string = ', mySubstr('абвгдеёжзи', -3)); //
//console.log('result string = ', mySubstr('абвгдеёжзи', -20, 2));
//console.log('result string = ', mySubstr('абвгдеёжзи', 20, 2));

// Task 6  -  substring()

function mySubstring(string, indStart, length) {
    let args = [...arguments];
    let resultStr = '';
    let start, end, str;

    if (args.length < 2) alert('enter more than one valid argument');

    str = args[0];

    if(args[2]) {
        start = args[1] <= args[2] ? args[1] : args[2];
        end = args[2] > args[1] ? args[2] -1 : args[1] - 1;
    } else {
        start = args[1];
        end = str.length - 1;
    }

    if (start < 0) start = 0;
       else if (start > str.length) start = str.length;

    if (end < 0) end = 0;
        else if (end > str.length) end = str.length;

    if (start === end) return '';

    for (let i = start; i <= end; i++) {
        resultStr += str[i];
    }

    return resultStr;
}

//console.log('result string = ', mySubstring('Hello world!', 1, 4)); //
//console.log('result string = ', mySubstring('Hello world!', 2)); //
//console.log('result string = ', mySubstring('Hello world!', 11, 1)); //
//console.log('result string = ', mySubstring('Hello world!', 11, -1)); //
//console.log('result string = ', mySubstring('Hello world!', 12, 2)); //
//console.log('result string = ', mySubstring('Hello world!', -12, 2)); //
console.log('result string = ', mySubstring('Hello world!', 12)); //
//console.log('result string = ', mySubstring('Hello world!', -12)); //
//console.log('result string = ', mySubstring('Hello world!', 5, 5)); //

// console.log('result string = ', mySubstring('Hello world!', 0, 1)); //