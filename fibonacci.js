let fibonacci = num => {
    let first = 0
    let second = 1
    let result =0;
    while (num >= 0) {
        result = first + second;
        // console.log(result);
        //update new values
        first = second;
        second = result;
        num--;
    }
    return result;
};

// let fibonacci = num => {
//     if (num <= 0) return 1;

//     return fibonacci(num - 1) + fibonacci(num - 2);
// };


console.log(fibonacci(100));