function countdown (millisecs) {
   let timer  = Math.abs(millisecs);
   let seconds = Math.floor((timer / 1000) % 60)
   let minutes = Math.floor((timer / (1000 * 60)) % 60)
   let hours = Math.floor(timer / (1000 * 60 * 60))
   hours = hours < 10 ? '0' + hours : hours;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;
   return `${millisecs<0?'-':'+'}${hours}:${minutes}:${seconds}`

}
console.log('result string = ', countdown(-154800000)); //'-43:00:00'
console.log('result string = ', countdown(0)); //'+00:00:00'
console.log('result string = ', countdown(61000)); //'+00:01:01'
console.log('result string = ', countdown(360000000)); //'+100:00:00'
