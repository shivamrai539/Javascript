const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

let intervalid; 

const startchangingcolor = function() {
    document.body.style.backgroundColor = randomcolor();
}

document.querySelector('#start').addEventListener('click',function(){
    if(!intervalid){
        intervalid = setInterval(startchangingcolor,1000);
    }
});

document.querySelector('#stop').addEventListener('click',function(){
    if(intervalid){
        clearInterval(intervalid);
        intervalid = null;
        console.log("Stopped..");
    }
})