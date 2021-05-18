// convertFahrToCelsius
function convertFahrToCelsius(val) {
    let fahren = val;
    // console.log(fahren);
    if (isNaN(fahren) && (typeof fahren !== 'string')) {
        return (`${fahren} is not a valid number but a/an ${typeof fahren} type`)
    } else {
        return (fahren - 32) * (5/9);
    }
}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));


// checkYuGiOh
function checkYuGiOh(num) {
    const yuGiOhArr = [];
    if (isNaN(num)) {
        return (`Invalid parameter: ${num}`);
    }
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
console.log(checkYuGiOh(10))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("fizzbuzz is meh"))
