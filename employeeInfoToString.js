// These two functions are broken in some way...
// What went wrong? What needs to be fixed?
// How do we know if it's fixed or not?
// Hint: using a console.log may be useful...

let employee1 = {
    employee_id: 1,
    first_name: "Adam",
    middle_name: "Alexander",
    last_name: "Jones",
    department: "Engineering",
    salary: 74000
}

let result1 = "Adam Alexander Jones\nDepartment: Engineering | Salary: 74000"


export function employeeInfoToString(employee) {
    let full_name = generateFullName(employee.first_name, employee.middle_name, employee.last_name);
// the employee first name is repeating 2 times. 
    return `${full_name}
Department: ${employee.department} | Salary: ${employee.salary}`;
}


function generateFullName(first_name, middle_name, last_name) {
    return `${first_name}${middle_name != null ? " " + middle_name + " " : " " }${last_name}`
} 
console.log(employeeInfoToString(employee1))
console.log("\n");
console.log(result1);