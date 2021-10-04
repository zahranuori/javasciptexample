function isPrime (number) {
    if(number === 2 || number === 3)
        return true
    else if (number === 1 || number === 4) {
        return false
    }
    else {
        for (let i = 2; i < (number / 2); i++) {
            if (number % i === 0)
                return false
        }
        return true
    }
}
function isHard(n) {
    let strNum = n.toString();
    let m = strNum.length;
    for (let i = 0; i < m; i++) {
        if (!isPrime(Number(strNum.substring(0, m - i)))) {
            return false;
        }
    }
    return true;
}

function HardPassword(n) {
    for (let i = 10 ** (n - 1); i < 10 ** n; i++) {
        if (isHard(i)) {
            console.log(i)
        }
    }
}

console.log(HardPassword(3))
