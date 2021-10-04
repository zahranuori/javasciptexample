function number(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 2000) {
            sum += i;
        }
    }
    if(sum === n){
        return "yes"
    }
    else {
        return "no"
    }

}
console.log(number(0))
console.log(number(11))
