const board1 = [[1, 1, 2],
                [1, 2, 2],
                [2, 2, 1]];

function ticTacToe(arr) {
    let strDiagonal1 ='', strDiagonal2 = ''; 
    let rowsNum = arr.length;
    let colNum = arr[0].length;
    for (let i = 0; i < rowsNum; i++) {
        strRow = '';
        strColumn = '';
        for (let j = 0; j < colNum; j++) {
            if(arr[i][j] == 0) return -1;
            strRow += arr[i][j]; 
            strColumn += arr[j][i];
            if(i === j) {strDiagonal1 += arr[i][j];}  
            if(i + j === rowsNum - 1) {strDiagonal2 += arr[i][j];}
        }
        if(strRow === '111' || strColumn === '111') return 1;
            else if(strRow === '222' || strColumn === '222') return 2;
    }
    if(strDiagonal1 === '111' || strDiagonal2 === '111') return 1;
        else if(strDiagonal1 === '222' || strDiagonal2 === '222') return 2;
            else return 0;
}
console.log('result = ', ticTacToe(board1));

