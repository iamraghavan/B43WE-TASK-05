let  anonymousFunction = (()=>{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let oddFunctions = numbers.filter((numbers)=>{
        return numbers % 2!== 0;
    });

    console.log(oddFunctions);
})();

// anonymousFunction();

