// Task 1

points = [ 
    [2,2], //A
    [2,8], //B
    [5,5], //C
    [6,3], //D
    [6,7], //E
    [7,4], //F
    [7,8]  //G
]; 

function distance (point1, point2) {
    return Math.sqrt(Math.pow((point1[0] - point2[0]), 2) + Math.pow((point1[1] - point2[1]), 2)).toFixed(2);
}

function minDistance (array) {
    let dist, firstPoint, secondPoint;
    let minDist = Infinity;

    array.forEach((point1, i, arr) => {
        let tempArr = arr.slice(i+1);
        
        tempArr.forEach(point2 => {
            dist = distance(point1, point2);
            if(dist < minDist) {
                minDist = dist;
                firstPoint = point1;
                secondPoint = point2;
            }
        });
    });

    return [firstPoint, secondPoint];
}

//console.log('the smaller distance is between points: ', minDistance(points));


// Task 2

function meeting(arr, num) {
    let countChair = num;
    let freeChair;
    let resultArr = [];
    
    if(num === 0) return 'Game On';

    for (let i = 0; i < arr.length && countChair > 0; i++) {
        freeChair = arr[i][1] - arr[i][0].length;
        if (freeChair > 0) {
            countChair -= freeChair; 
            resultArr[i] = freeChair;
        } else resultArr[i] = 0;
    }

    if(countChair) return 'Not enough!';

    return resultArr;    
}

//console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)); // [0, 0, 1, 2, 2]

//console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]], 4)); //  [0, 1, 3]

//console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]], 14)); //  'Not enough!'

//console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)); //'Game On'

//console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)); // [0, 1, 3]

