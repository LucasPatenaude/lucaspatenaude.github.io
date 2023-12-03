// Problem 1
// Create JSON for each employee

// Declare JSON properties for Sam
const sam = 
{ 
    firstName: 'Sam', 
    department: 'Tech', 
    designation: 'Manager', 
    salary: 40000, 
    raiseEligible: true 
};

// Declare JSON properties for Mary
const mary = 
{ 
    firstName: 'Mary', 
    department: 'Finance', 
    designation: 'Trainee', 
    salary: 18500, 
    raiseEligible: true 
};

// Declare JSON properties for Bill
const bill = 
{ 
    firstName: 'Bill', 
    department: 'HR', 
    designation: 'Executive', 
    salary: 21200, 
    raiseEligible: false 
};

// Create a copy of the original employees for logging before modifications
const originalEmployees = [Object.assign({}, sam), Object.assign({}, mary), Object.assign({}, bill)];

// Output the original JSON for employees (before any modifications)
console.log('Problem 1 - Original Employees:', originalEmployees);

//----------------------------------------------------------------------------

// Problem 2
// Inititialize JSON properties for Company

// Create JSON for the company
const company = 
{ 
    companyName: 'Tech Stars', 
    website: 'www.techstars.site', 
    employees: [sam, mary, bill] 
};

// Output the JSON for the company
console.log('Problem 2 - Company:', company);

//----------------------------------------------------------------------------

// Problem 3
// A new employee has joined the company

// Declare JSON properties for Anna
const anna = 
{ 
    firstName: 'Anna', 
    department: 'Tech', 
    designation: 'Executive', 
    salary: 25600, 
    raiseEligible: false 
};

company.employees.push(anna); // Add Anna to employees array
console.log('Problem 3 - Updated Employees:', company.employees); // Output all employees

//----------------------------------------------------------------------------

// Problem 4
// Calculate the total salary for all company employees

let totalSalary = 0; // Initialize totalSalary to 0
for (let i = 0; i < company.employees.length; i++)  // Run through each employee in array
{
  totalSalary += company.employees[i].salary; // Add employee salary at i to totalSalary sum
}

// Output the total salary of each employee together
console.log('Problem 4 - Total Salary: $', totalSalary);

//----------------------------------------------------------------------------

// Problem 5
// Update the salary of each eligible employee by 10%

// Check if each employee if raise eligible and update if true
for (let i = 0; i < company.employees.length; i++) 
{
    // Run loop if raiseEligible is true
    if (company.employees[i].raiseEligible == true) 
    {
        company.employees[i].salary *= 1.1; // Raise salary by 10% for employee at i
        company.employees[i].raiseEligible = false; // Set to raiseEligible to false if given raise
    }
}

// Output the changed salary for each employee
console.log('Problem 5 - Employees after Raise:', company.employees);

//----------------------------------------------------------------------------

// Problem 6
// Update and output employees that work from home

// Set 'wfh' property to false for all employees
for (let i = 0; i < company.employees.length; i++) 
{
    company.employees[i].wfh = false;
}

// Set 'wfh' property to true for Sam and Anna
sam.wfh = true;
anna.wfh = true;

// Collect names of employees working from home into an array
const employeesWorkingFromHome = [];
company.employees.forEach((employee) => 
{
  if (employee.wfh) 
  {
    employeesWorkingFromHome.push(employee.firstName);
  }
});

// Output the employees working form home array
console.log('Problem 6 - Working from home:', employeesWorkingFromHome);
