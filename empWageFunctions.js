const WAGE_PER_HR =20;
const NUMBER_OF_WORKING_DAYS = 20;

//UC2 Ability to calucate daily wage of a employee.
function calcDailyEmpWage(){
    var partTime = document.getElementById("parttime");
    var fullTime = document.getElementById("fulltime");
    var dailyWage =0;
    if(partTime.checked)
        {dailyWage=WAGE_PER_HR*(partTime.value)}
    else if (fullTime.checked)        
        {dailyWage = WAGE_PER_HR*(fulltime.value)}
    else {
        alert("Please select type of employee")
        return
    }

    alert("Wage of employee is : "+dailyWage)
}

//UC4 Calculate Monthly wage assuming 20 hrs a day
function calcMonthlyWage(){
    var partTime = document.getElementById("parttime");
    var fullTime = document.getElementById("fulltime");
    var monthlyWage =0;
    if(partTime.checked)
        {monthlyWage=WAGE_PER_HR*(partTime.value)*NUMBER_OF_WORKING_DAYS}
    else if (fullTime.checked)        
        {monthlyWage = WAGE_PER_HR*(fulltime.value)*NUMBER_OF_WORKING_DAYS}
    else {
        alert("Please select type of employee")
        return
    }

    alert("Monthly Wage of employee is : "+monthlyWage)
}