const Is_PartTime = 1;
const Is_FullTime = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;
const Max_Hrs_In_Month = 100;
const Num_of_WorkingDays = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

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




while (totalEmpHrs <= Max_Hrs_In_Month && totalWorkingDays < Num_of_WorkingDays) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

let empWage = totalEmpHrs * Wage_Per_Hour;
console.log("Total Days:" + totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage:" + empWage);