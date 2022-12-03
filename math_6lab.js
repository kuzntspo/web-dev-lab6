//Задача 1 - возведение в степень
alert("Возведение в степень");
let power_x = prompt("Введите x", "");
let power_n = prompt("Введите n", "");
function power(power_x, power_n) {
    if (power_n == 1) {
        return power_x;
    }
    if (power_n != 1) {
        return (power_x * power(power_x, power_n - 1));
    }
}        
let answer_1 = power(power_x, power_n);
alert(`${power_x} в степени ${power_n} = ${answer_1}`);
//Задача 2 - наибольший общий делитель
alert("Наибольший общий делитель");
let gcd_a = prompt("Введите a", "");
let gcd_b = prompt("Введите b", "");
function gcd(gcd_a, gcd_b) {
    if(gcd_b == 0) {
        return gcd_a;
    } else {
        return gcd(gcd_b, gcd_a % gcd_b);
    }            
}    
let answer_2 = gcd(gcd_a, gcd_b)
alert(`НОД чисел ${gcd_a} и ${gcd_b} = ${answer_2}`);
//Задача 3 - наименьшая цифра
alert("Наименьшая цифра числа x");
let min_x = prompt("Введите x", "");
function minDigit (x){
    let min_d = 9;
    while (x > 0){
        if ((x % 10) < min_d){
            min_d = x % 10;
        }
        x = Math.floor(x/10);
    }
    return min_d;
}
let answer_3 = minDigit(min_x);                
alert(`Наименьшая цифра числа ${min_x} = ${answer_3}`);
//Задача 4 - количество записей
alert("Количество записей");
let n_4 = prompt("Введите n", "");
function pluralizeRecords_1(n, was){
    n = Math.abs(n) % 100; 
    let n1 = n % 10;
    if ((n != 11) && (n1 == 1)) {
        return was[1];                
    }
    return was[0];
}
let answer_4_1 = pluralizeRecords_1(n_4, ['было найдено', 'была найдена']);
function pluralizeRecords_2(n, records){
    n = Math.abs(n) % 100; 
    let n1 = n % 10;
    if (n > 10 && n < 20) { 
        return records[2]; 
    }
    if (n1 > 1 && n1 < 5) { 
        return records[1];                 
    }
    if (n1 == 1) {
        return records[0]; 
    }        
    return records[2];        
}
let answer_4_2 = pluralizeRecords_2(n_4, ['запись', 'записи', 'записей']);
alert(`В результате выполнения запроса ${answer_4_1} ${n_4} ${answer_4_2}`);
//Задача 5 - ряд Фибоначчи
let error = "Ошибка";
alert("n-ый элемент ряда Фибоначчи");
let n_5 = prompt("Введите n", "");
function fibb(n){
    let last = 1, next = 1;
    if (n <= 1000) {
        for(let i = 1; i < n; i++){
        let current = next;
        next = last + next;
        last = current;                        
    }
    } else {
        return error;
    }
    return last;
}
let answer_5 = fibb(n_5);
alert(`Число Фибоначчи ${n_5}: ${answer_5}`);

