/*Составить скрипт, который запрашивает у пользователя ввести номер кредитной 
карты. Скрипт должен обработать полученный номер и показать на странице 
последние 4 цифры а остальные цифры карты должны заменены на *.
Пример: "Номер вашей карты: **********1245"*/

let cardNumber = prompt('Сredit card number: ');
alert(`Сredit card number: ${cardNumber.replace(cardNumber.slice(0, -4), "************")}`)
