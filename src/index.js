module.exports = function getZerosCount(number) {

//решаем по формуле Лежандра
//находим number%(5^1) + number%(5^2) + ... пока слагаемые больше или равны единице
    var b =(Math.log(number)/Math.log(5));
    var nuli = 0;
    for (i=1; i <=b; i++) {
        step = Math.pow(5,i);
        nuli = nuli + (number-number%step)/step;
    }
    return nuli;
}
