const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')



const employee1 = new Employee('Chris', '1', 'one@gmail.com')
console.log(employee1)


const manager1 = new Manager('Mike', '2', 'mike@gmail.com', '512-655-4242')
console.log(manager1)

const engineer1 = new Engineer('Robert', '3', 'rob@gmail.com', 'robertgithub')
console.log(engineer1)

const intern1 = new Intern('Sam', '4', 'sam@gmail.com', 'WTAMU')
console.log(intern1)

console.log(employee1.getRole())
console.log(manager1.getRole())
console.log(engineer1.getRole())
console.log(intern1.getRole())


console.log(intern1.getName())
console.log(intern1.getSchool())