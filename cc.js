document.getElementById("calculate").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = document.getElementById("activity").value;
  
    let bmr = 0;
  
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    let calorieIntake = 0;
  
    switch (activity) {
      case "sedentary":
        calorieIntake = bmr * 1.2;
        break;
      case "lightly":
        calorieIntake = bmr * 1.375;
        break;
      case "moderately":
        calorieIntake = bmr * 1.55;
        break;
      case "very":
        calorieIntake = bmr * 1.725;
        break;
      case "super":
        calorieIntake = bmr * 1.9;
        break;
    }
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Estimated daily caloric intake: ${calorieIntake.toFixed(2)} calories`;
    
    if (calorieIntake < bmr) {
        resultElement.textContent += "\nTo lose weight, consider reducing your calorie intake.";
      } else if (calorieIntake > bmr) {
        resultElement.textContent += "\nTo gain weight, consider increasing your calorie intake.";
      }
    });