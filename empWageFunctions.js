//UC2 Ability to calucate daily wage of a employee.
function calcDailyEmpWage(){
    var partTime = document.getElementById("parttime");
    var fullTime = document.getElementById("fulltime");
    var wagePerHr = 20;
    var dailyWage =0;
    if(partTime.checked)
        dailyWage=wagePerHr*(partTime.value)
    else if (fullTime.checked)        
        dailyWage = wagePerHr*(fulltime.value)
    else
        alert("Please select type of employee")

    alert("Wage of employee is : "+dailyWage)
}
