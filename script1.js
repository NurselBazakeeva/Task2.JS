//Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

let str = 'ddd@bbb@ccc';
let newSymbol = '!';
let replacedSymbol = str.replaceAll("@", newSymbol);
console.log(replacedSymbol);
