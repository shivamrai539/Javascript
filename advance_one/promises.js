// 1st here we store in variable , let's try new way.

// const  promiseOne = new Promise(function(resolve,reject) {
//     // Do an async task
//     // Database calls, cryptography related , network call

//     setTimeout(function(){
//         console.log('Async task is complete.')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// // 2nd way

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('2nd Async task is completed')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('2nd promise consumed')
// })

// const promiseThree = new Promise(function(resolve,reject){
//      resolve({username : "Shivam", id : 2315002073})
// })

// promiseThree.then(function(user){
//     console.log(user)
// })



const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "Shivam", id : 123})
        }else{
            reject('Error : Something went wrong')
        }
    },1000)
})

promisefour.then(function(user) {
    console.log(user);
    return user.username
}).then(function(name) {
    console.log(name);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected here")
})



// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username : "Shivam", id : 123});
//         }else{
//             reject('Error : Something went wrong');
//         }
//     },2000)
// })


// async function consumepromisefive(){
//     try {
//         const response = await promisefive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumepromisefive()




// async function getallusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch (error) {
//         console.log(error);
//     }
// }

// getallusers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error)
})