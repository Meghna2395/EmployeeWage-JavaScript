const Is_PartTime = 1;
const Is_FullTime = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;

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



const Num_of_WorkingDays = 2;
let empHrs = 0;
for (let day = 0; day < Num_of_WorkingDays; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * Wage_Per_Hour;
console.log("Total Hrs:" + empHrs + "Emp Wage:" + empWage);