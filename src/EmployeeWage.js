const Is_PartTime = 1;
const Is_FullTime = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;
const Max_Hrs_In_Month = 160;
const Num_of_WorkingDays = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case Is_PartTime:
            return Part_Time_Hours;
        case Is_FullTime:
            return Full_Time_Hours;
        default:
            return 0;
    }
}
function calcDailyWage(empHrs) {
    return empHrs * Wage_Per_Hour;
}





while (totalEmpHrs <= Max_Hrs_In_Month && totalWorkingDays < Num_of_WorkingDays) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days:" + totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage:" + empWage);