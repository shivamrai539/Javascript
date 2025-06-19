function addTwoNumber(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;
}

// addTwoNumber(5,6);\

const ans = addTwoNumber(8 , 3)
// console.log("Return value ", ans);


function loginUserMessage(Username = "Anonymous"){  // here parameter is already pass so if not argument pass still it is not undefined. 
    if(Username === undefined){   
        console.log("Please Enter Name First. ");
        return
    }
    return `${Username} just loggedin.`
}

let name = loginUserMessage()       // if no argument pass then it return undefined.
console.log(name);