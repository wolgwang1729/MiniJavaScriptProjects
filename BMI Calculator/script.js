const form=document.querySelector('form');
const results=document.querySelector('#results');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height=parseInt(form.elements.height.value);
    const weight=parseInt(form.elements.weight.value);
    if(height<=0 || isNaN(height) || weight<=0 || isNaN(weight)){
        results.innerHTML="Please enter valid values";
    }
    else{
        const BMI=(weight/(height/100*height/100)).toFixed(2);
        switch (true) {
            case (BMI < 18.5):
                results.innerHTML = `<h3>Your BMI is ${BMI} and you are underweight</h3>`;
                break;
            case (BMI >= 18.5 && BMI <= 24.9):
                results.innerHTML = `<h3>Your BMI is ${BMI} and you are normal</h3>`;
                break;
            case (BMI >= 25 && BMI <= 29.9):
                results.innerHTML = `<h3>Your BMI is ${BMI} and you are overweight</h3>`;
                break;
            case (BMI >= 30):
                results.innerHTML = `<h3>Your BMI is ${BMI} and you are obese</h3>`;
                break;
        }
    }
});