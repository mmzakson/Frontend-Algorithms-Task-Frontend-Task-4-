// convertFahrToCelsius
function convertFahrToCelsius(val) {
    if (isNaN(val) && (typeof val !== 'string')) {
        console.log(`${val} is not a valid number but a/an ${typeof val} type`)
    } else {
        return (val - 32) * (5/9);
    }
}

console.log(convertFahrToCelsius(44));


// checkYuGiOh
function checkYuGiOh(num) {
    const yuGiOhArr = [];
    for (let i = 1; i <= num; i++) {
        if((i%2 === 0) && (i%3 === 0) && (i%5 === 0)) {
            yuGiOhArr.push("yu-gi-oh")
        } else if((i%3 === 0) && (i%5 === 0)) {
            yuGiOhArr.push("gi-oh")
        } else if((i%2 === 0) && (i%5 === 0)) {
            yuGiOhArr.push("yu-oh")
        } else if((i%2 === 0) && (i%3 === 0)) {
            yuGiOhArr.push("yu-gi")
        } else if (i%2 === 0) {
            yuGiOhArr.push("yu");
        } else if (i%3 === 0) {
            yuGiOhArr.push("gi")
        } else if (i%5 === 0) {
            yuGiOhArr.push("oh")
        } else {yuGiOhArr.push(i)}
    }
    return yuGiOhArr;
}

console.log(checkYuGiOh(30))
