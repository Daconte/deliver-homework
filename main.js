// Run this file to test your code
// Don't change anything in it - everything is fine the way it is!

import {employeeInfoToString} from "./employeeInfoToString.js"

let employee1 = {
    employee_id: 1,
    first_name: "Adam",
    middle_name: "Alexander",
    last_name: "Jones",
    department: "Engineering",
    salary: 74000
}

let test1 = employeeInfoToString(employee1);
let result1 = "Adam Alexander Jones\nDepartment: Engineering | Salary: 74000"
if (test1 == result1) {
    console.log("Test 1 good");
}
else {
    console.log("Test 1 bad");
}

let employee2 = {
    employee_id: 3,
    first_name: "Brittany",
    middle_name: null,
    last_name: "Smith",
    department: "Sales",
    salary: 68000
}

let test2 = employeeInfoToString(employee2);
let result2 = "Brittany Smith\nDepartment: Sales | Salary: 68000"

if (test2 == result2) {
    console.log("Test 2 good");
}
else {
    console.log("Test 2 bad");
}

let employee3 = {
    employee_id: 4,
    first_name: "Charlie",
    middle_name: "",
    last_name: "Andrews",
    department: "Engineering",
    salary: "79000"
}

let test3 = employeeInfoToString(employee3);
let result3 = "Charlie Andrews\nDepartment: Engineering | Salary: 79000"

if (test3 == result3) {
    console.log("Test 3 good");
}
else {
    console.log("Test 3 bad");
}

let employee4 = {
    employee_id: 7,
    first_name: "Devin",
    middle_name: null,
    last_name: "McAllister",
    department: "Sales",
    salary: "81000"
}

let test4 = employeeInfoToString(employee4);
let result4 = "Devin McAllister\nDepartment: Sales | Salary: 81000"

if (test4 == result4) {
    console.log("Test 4 good");
}
else {
    console.log("Test 4 bad");
}