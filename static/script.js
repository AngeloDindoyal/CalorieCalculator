const results = document.getElementById("results");
const error = document.getElementById("er");
const submit = document.getElementById("cal");
const active = [1.2, 1.375, 1.55, 1.725, 1.9];


function calculate(age, height, heightU, weight, weightUnit, gender, activity, bf) {
    var adjustedWeight = weight;
    var adjustedHeight = height;
    if (weightUnit == 1) {
        adjustedWeight *= 0.454;
    }

    if (heightU == 1) {
        adjustedHeight /= 100;
    } else {
        adjustedHeight *= 0.0254;
    }

    var adjustedGender = (gender == 1) ? 1 : 0;

    var calories = ((11.963 * adjustedWeight ) + (587.782 * adjustedHeight) - (8.129 * age) + (191.027 * adjustedGender) + 29.279) * active[activity];

    if(bf) calories = (((adjustedWeight * (100 - bf) / 100) * 21.6) + 370) * active[activity];

    document.getElementById("result").innerHTML = "Your total daily calorie expenditure is: " + calories.toFixed(0);
    calories /= active[activity];
    document.getElementById("lev1").innerHTML = (calories * active[0]).toFixed(0);
    document.getElementById("lev2").innerHTML = (calories * active[1]).toFixed(0);
    document.getElementById("lev3").innerHTML = (calories * active[2]).toFixed(0);
    document.getElementById("lev4").innerHTML = (calories * active[3]).toFixed(0);
    document.getElementById("lev5").innerHTML = (calories * active[4]).toFixed(0);
    calories *= active[activity];
    document.getElementById("loss1").innerHTML = (calories - 200).toFixed(0);
    document.getElementById("loss2").innerHTML = (calories - 500).toFixed(0);
    document.getElementById("loss3").innerHTML = (calories - 700).toFixed(0);
    document.getElementById("gain1").innerHTML = (calories + 200).toFixed(0);
    document.getElementById("gain2").innerHTML = (calories + 500).toFixed(0);
    document.getElementById("gain3").innerHTML = (calories + 700).toFixed(0);
}

submit.addEventListener("click", function(event){
    event.preventDefault();
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const heightU = $('input:radio[name=heightU]:checked').val();
    const weight = document.getElementById("weight").value;
    const weightUnit = $('input:radio[name=unit]:checked').val();
    const gender = $('input:radio[name=gender]:checked').val();
    const activity = document.getElementById("activity").value;
    const bf = document.getElementById("bf").value;

    if (age === "" || weight === "" || weightUnit === undefined || gender === undefined || activity === "" || height === "" || heightU === undefined) {
        results.style.display = "none";
        error.style.display = "flex";
    } 
    else{
        error.style.display = "none";
        results.style.display = "flex";
        calculate(age, height , heightU, weight, weightUnit, gender, activity, bf);
    }
});

