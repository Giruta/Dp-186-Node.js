const board = [
    [0,0,2,2,2,2],
    [0,3,0,0,0,0],
    [0,3,0,1,0,0],
    [0,3,0,1,0,0]
];
const attacks = [[2,1],[1,3],[4,2],[2,2],[4,1]];
const ships = [1, 2, 3, 4];

function damagedOrSunk (board, attacks) {
    let x, y, sunk = 0, damaged = 0, notTouched = 0, points = 0;
    let boardCopy = [], sumsBefore = [], sumsAfter = [];

    boardCopy = board.slice();
    sumsBefore = iterateTable(boardCopy);
    //console.log('sumsBefore = ', sumsBefore);
    attacks.forEach(el => {
        x = el[0] - 1;
        y = board.length - el[1];
        boardCopy[y][x] = -1;
     });
    sumsAfter = iterateTable(boardCopy);
    //console.log('sumsAfter = ', sumsAfter);

    let lengs = sumsAfter.length;
    for(let i = 0; i < lengs; i++) {
        if(sumsBefore[i] && sumsAfter[i] && sumsBefore[i] === sumsAfter[i]) {
            notTouched++;
            points-=1;
        } else if (sumsBefore[i] && sumsAfter[i] === 0) {
            sunk++;
            points++;
        } else if (sumsBefore[i] > sumsAfter[i]) {
            damaged++;
            points+=0.5;
        }
    }
    return {'sunk':sunk, 'damaged':damaged, 'notTouched':notTouched, 'points':points};
}

function iterateTable(table) {
    let sums = [0,0,0,0];
    table.forEach(item1 => {
        item1.forEach(item2 => {
            if(item2 === ships[0]) {sums[0] = sums[0]+1;}
                else if (item2 === ships[1]) {sums[1] = sums[1]+1;}
                    else if(item2 === ships[2]) {sums[2] = sums[2]+1;}
                        else if(item2 === ships[3]) {sums[3] = sums[3]+1;}
        })
    })

    return sums;
};

console.log('result obj = ', damagedOrSunk(board, attacks));
