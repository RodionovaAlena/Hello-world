let year = 1997;

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log('Год, который вы ввели - високосный');
} else {
    console.log('Год, который вы ввели - невисокосный');
}