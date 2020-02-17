// Task 2

function meeting(str) {

    let newStr = str.split(';').map(item => item.toUpperCase().split(':').reverse().join(', '));

    newStr = newStr.sort();

    return newStr.map(item => '(' + item + ')').join('');

}

console.log('str = ', meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Fred:Corwill;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));

// Task 3

function encoding(str) {

    let row = []; // массив строк в которых считаем длины слов
    let arrWordsLength = []; // массив длин слов в каждой row[i]
    let worlds = [];
    let i = 0; s = 0;
    let k,l,sentence;
    let resultStr = '';
    let flag = true;

    if(str === '' || str.trim()==='') return '';

    let arr = str.split(/[.|!|?]/);// массив предложений
    arr = (arr[arr.length-1]==='') ? arr.slice(0, arr.length - 1) : arr; // урезаем на один элемент. т.к. последняя точка добавляет пустой лишний эл-т

    while(flag) {
        row[i] = arr[s].trim().split(' ');
        row[i].forEach((item, j, arr) => {
            item = item.replace(/[,"']/g,"");
            arrWordsLength[j] = item.length;
        });

        i++;
        k = s;
        s = s + row[i - 1].length + 1;
        l=0; sentence = '';

        while (k < s-1 && arr[k+1]) {
            worlds = arr[k+1].trim().replace(/[,":;]/g,"").split(' ');
            sentence += worlds[arrWordsLength[l]-1] + ' ';
            l++; k++;
        }

        sentence = (sentence[0].toUpperCase() + sentence.slice(1)).trim() + '. ';

        resultStr += sentence;

        if (!arr[s]) {flag = false;}
    }

    return resultStr.trim();
}

console.log('RESULT STR = ', encoding('Yeste"rday, we bump\'ed into Lau"ra! ' +
    'It had to happen, but you can\'t deny the timing couldn\'t be worse! ' +
    'The "mission" to try and seduce her was a complete failure last month? ' +
    'By the way she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. ' +
    'I wanted to feel done with it first.' +
    'Yesterda1, we bum\'ped into Laura! ' +
    'It had to happen, but you can\'t deny the timing couldn\'t be worse! ' +
    'The "mission" to try and seduce her was a complete failure last month. ' +
    'By the way she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. ' +
    'I wanted to feel done with it first.' +
    'Yesterda2, we bumped into Laura. ' +
    'It had to happen, but you can\'t deny the timing couldn\'t be worse. ' +
    'The "mission" to try and seduce her was a complete failure last month. ' +
    'By the way she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. ' +
    'I wanted to feel done with it first.' +
    'Yesterda3, we bumped into Laura. ' +
    'It had to happen, but you can\'t deny the timing couldn\'t be worse. ' +
    'The "mission" to try and seduce her was a complete failure last month. ' +
    'By the way she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. ' +
    'I wanted to feel done with it first.' +
    'Yesterda4, we bumped into Laura. ' +
    'It had to happen, but you can\'t deny the timing couldn\'t be worse. ' +
    'The "mission" to try and seduce her was a complete failure last month!'));

//   'The mission has been done.'

// console.log('RESULT STR = ', encoding('   34  hjgjj'));
