function findPartMaxProd(n) {
  let a = [];
  let res = '';

  function partition(n, high, pos) {
    let i;
    if (n > 0) {
      for (i = 1; i <= high; i++) {
        a[pos] = i;
        min = i < n - i ? i : n-i;
        partition(n - i, min, pos + 1);
      }
    } else {
      for (i = 0; i < pos; i++)
        res = res + a[i] + '.';
      res = res.slice(0, -1);
      res += "\n";
    }
  }

  partition(n, n - 1, 0);
  res += n; // добавлем последнее число 
  let arrayOfPartitions = res.split('\n');  //массив строк со слагаемыми

  let prods = [];
  let maxProd = 0;

  for (var i = 0; i < arrayOfPartitions.length; i++) {
    let prod = getProd(arrayOfPartitions[i]);
    if (prod > maxProd) maxProd = prod;
    prods.push(prod);
  }
  
  let partitionsWithMaxProd = [];
  for (var i = 0; i < prods.length; i++) {
    if (prods[i] == maxProd) {
      partitionsWithMaxProd.push(arrayOfPartitions[i].split('.').map(e => Number(e)));
    }
  }

  partitionsWithMaxProd.push(maxProd);

  return partitionsWithMaxProd;
}

function getProd(str) {
  let nums = str.split('.');
  return nums.reduce((a, b) => a * b);
}


console.log('====== ', findPartMaxProd(100));