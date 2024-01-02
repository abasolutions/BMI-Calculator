let calcButton = document.getElementById("calculate");
calcButton.addEventListener("click", calcBMI);

function calcBMI() {
    let heightInput = document.getElementById("height");
    let heightInputValue = heightInput.value;
    let usersHeight = parseInt(heightInputValue);
    let weightInput = document.getElementById("weight");
    let weightInputValue = weightInput.value;
    let usersWeigth = parseInt(weightInputValue);
    let usersHeightInmeter = usersHeight / 100;
    let showBmi = document.querySelector(".bmivalue");
    let bmiCat = document.querySelector(".bmicategory")

    if ((isNaN(usersHeight)) || (isNaN(usersWeigth))) {
        alert("Please write only numbers!");
    } else if (usersWeigth > 250){
        alert("The maximum weight could be 250 kg.")
    }
    else if (usersHeight > 220){
        alert("The maximum height could be 220 cm.")
    }
    else {
        let BMI = (usersWeigth / (usersHeightInmeter ** 2)).toFixed(2);
        showBmi.innerText = `Your BMI is: ${BMI}`;

        if (BMI < 18.5){
            bmiCat.innerText = "Underweight";
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            bmiCat.innerText = "Normal weight";
        } else if (BMI >= 25 && BMI <= 29.9) {
            bmiCat.innerText = "Overweight";
        } else if (BMI >= 30) {
            bmiCat.innerText = "Obesity";
        }
    }
}