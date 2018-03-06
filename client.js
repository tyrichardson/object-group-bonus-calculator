/* We didn't realize there was a Repo with this info. We are pasting out work in below.
const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);
*/

//console.log('js');


//extractFromArray();


console.log('js');
//create object
let testEmployee = {name: 'Ty', employeeNumber: 4004, annualSalary: 40000.00, reviewRating: 4};
class Employee {
  constructor(nameIn, employeeNumberIn, annualSalaryIn, reviewRatingIn) {
    this.name = nameIn;
    this.employeeNumber = employeeNumberIn;
    this.annualSalary = annualSalaryIn;
    this.reviewRating = reviewRatingIn;
  }
}

function inputEmployee(employeeInputted) {
  let updatedEmployee = new Employee(employeeInputted.name, employeeInputted.employeeNumber,
    employeeInputted.annualSalary, employeeInputted.reviewRating);
  //return updatedEmployee;
  console.log(updatedEmployee);
}
inputEmployee(testEmployee);

function bonusCalc(){

}
