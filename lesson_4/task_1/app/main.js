cars //Массив с объектами

function countColor(carsArr){
   
    let colorArr = [];

    carsArr.forEach(item => {
        if(!colorArr.includes(item["COLOR"])) {
            colorArr.push(item["COLOR"]); 
        };
    });

    return colorArr;
}

function maxColor(carsArr){

     let color = countColor(carsArr);
     let col = {};      // объект {название цвета: кол-во авто}
     let max=0, maxCol;

    color.forEach((item, i, arr) => {
        col[`${item}`] = cars.filter(num => {
            return num['COLOR'] == item;
        }).length;
    });
        
    for(let key in col) {
        if (col[key] >= max) {
            max = col[key];
            maxCol = key;
        }
    }

    return [maxCol, max];
}

function countCars(carsArr){
    //Выдает массив объектов с именем ОВД и количеством автомобилей
    // [{OVD: 'Название ОВД', count : количество_машин}, ...]

    let arrOVD = [], arrResult = [];
    let objOVD = {};
    let carNumber;

    carsArr.forEach(item => {
        if(!arrOVD.includes(item["OVD"])) {
            arrOVD.push(item["OVD"]); 
        };
    });

    arrOVD.forEach(item => {
        carNumber = cars.filter(num => {
            return num['OVD'] == item;
        }).length;
        objOVD = {
            OVD: item,
            count: carNumber,
        };
        arrResult.push(objOVD);
    });

    return arrResult;
}

function oldAndNew(carsArr){
    //Выдает массив объектов с датой и именем авто самого раннего и самого позднего в массиве
    //[{name : 'HONDA (Мопед)', date : '2009-09-18T00:00:00'}, {name : 'ВАЗ - 2105 (Легковий автотранспорт)', date : '2012-11-30T00:00:00'}]

}

console.log(countColor(cars));
console.log(maxColor(cars)); //  ["ЧОРНИЙ", 11895]
console.log(countCars(cars));
//console.log(oldAndNew(cars));