var output = [];
var count = 1;

function fizzBuzz(){
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz");
        } else if (count % 3 === 0){
            output.push("Fizz");
        } else if (count % 5 === 0){
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

function fibonacciGenerator (n) {
    var outputArray = [n];
    outputArray.push(0);
    if (n === 1) { return outputArray; }
    outputArray.push(1);
    if (n === 2) { return outputArray; }
    var num1 = 0;
    var num2 = 1;
    for (var i = 2; i < n; i++){
        var temp = num1;
        num1 = num2;
        num2 = temp + num2;
        outputArray.push(num2);
    }
    return outputArray;
}


console.log(fibonacciGenerator(10));