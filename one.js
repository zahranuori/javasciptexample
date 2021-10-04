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
function primeNumbers(a , b)
{
    let arr=[]
    for (let i = a ; i <= b ; i++)
    {
        if (isPrime(i))
            arr.push(i)
    }
    return arr;
}
console.log(primeNumbers(11 , 119))