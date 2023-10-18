
function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else {
        let fibSeries = [0, 1];
        for (let i = 2; i < n; i++) {
            const nextNumber = fibSeries[i - 1] + fibSeries[i - 2];
            fibSeries.push(nextNumber);
        }
        return fibSeries;
    }
}
const numar = 10; 
const rezultat = fibonacci(numar);
console.log(rezultat);


/////

const greet = function (arg, arg2){
    return 'My name is' + this.name + arg2
}

const obj = {
    name: 'Ion',
    greet: greet
}

const obj1 = {
    name: 'Alex',
    greet: greet
}

const obj2 = {
    name: 'Vlad',
    greet: greet
}

const bound = greet.bind(obj1)



console.log(obj1.greet('hi', '!'))
console.log(obj1.greet.apply(obj, ['Bonjour', '?']))
console.log(obj1.greet.call(obj, 'ola', '?'))
console.log(bound('Hey', '!!!'))