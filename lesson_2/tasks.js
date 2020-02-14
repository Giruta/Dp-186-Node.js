// <!-----------1------------->
function nextVersion (str) {

    let arr = str.trim().split('.').join('');
    const length_1 = arr.length;

    arr = (parseInt(arr) + 1).toString().split('');
    const length_2 = arr.length;

    if(length_1 != length_2) {
        arr[1] = arr[0] + arr[1];
        arr = arr.slice(1);
    }
    return arr.join('.');
};

//    console.log(nextVersion("1.2.3")); // "1.2.4"
//    console.log(nextVersion("0.9.9")); //"1.0.0"
//    console.log(nextVersion("1"));  //  "2"
//    console.log(nextVersion("1.2.3.4.5.6.7.8")); "1.2.3.4.5.6.7.9"
//    console.log(nextVersion("9.9")); "10.0"
//    console.log(nextVersion("9.9.9")); "10.0.0"
//
// <!-----------2------------->

function intTobinary(num) {

    let res = num.toString(2).split('');
    let sum = 0;

    res.forEach((item) => {
        if(item === '1') ++sum
    });
    return sum;
};

//    console.log(intTobinary(1234)); // 5

// <!-----------3------------->

function sortString (str) {
    let res = str.trim().split(' ');

    return res.sort((a, b) => parse(a) - parse(b));
}

function parse(num) {
    let res = '';
    for (let char in num) {
        if ( parseInt(num[char]) ) res += num[char];
    }
    return res;
}

// console.log ('sort = ', sortString("4of Fo1r pe6ople g3ood th5e the2"));
