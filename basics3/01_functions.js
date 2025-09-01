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
// console.log(name);

// +++++++++++ in shopping we don't know how many item buyer going to add in cart so we use rest operato to merger all amount in array and the calculate it.

function countCartAmmount(...num){         // here ...num work as rest operator. 
    return num
}

// console.log(countCartAmmount(100 , 200, 300, 500, 600));

const user = {
    username: "shviam",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));