const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const resultInput = document.querySelector('#res');
    const prescription = document.querySelector('#prescription')

    if(height === '' || height <= 0 || isNaN(height)){
        resultInput.value = `Invalid height: ${height}`;
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        resultInput.value = `Invalid weight: ${weight}`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        resultInput.value = bmi;

        if(bmi < 18.6){
            prescription.innerText = "Under Weight = Less than 18.6"
        }else if(bmi > 24.9){
            prescription.innerText = "Overweight = Greater than 24.9"
        }else{
            prescription.innerText = "Normal Range = 18.6 and 24.9"
        }
    }

});