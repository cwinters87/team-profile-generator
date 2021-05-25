const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

//start
// new array of employees?
class Prompt {
    
    constructor() {
        this.projectManager
        this.engineers = []
        this.interns = []
        this.engineerCount = 0

        
    }

    initializeTeam(){
        inquirer.prompt([{
            type: 'text',
            name: 'manager',
            message: 'What is the Project Managers name?'
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee ID number? "
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address? "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Office Telephone Number? "
        }]).then(answers => {
            const manager = new Manager(answers.manager, answers.id, answers.email, answers.officeNumber)
            this.projectManager = manager

            //console.log(this.projectManager)
        })
        
        }

    initializeEngineers() {
        
        console.log(this.engineerCount)
        inquirer.prompt([{
            type: 'text',
            name: 'engName',
            message: 'What is the Engineers name?'
        },
        {
            type: "input",
            name: "engId",
            message: "What is their employee ID number? "
        },
        {
            type: "input",
            name: "engEmail",
            message: "What is their email address? "
        },
        {
            type: "input",
            name: "github",
            message: "What is their GitHub username? "
        }]).then(answers => {
            //engineerName = answers.engName
            //console.log(answers)
            let count = this.engineerCount.toString()
            this.engineers[count] = answers
            
            console.log(this.engineers)
            console.log(Object.keys(this.engineers))
            



            

            // const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.github)
            // console.log(engineer)
            // console.log(engineer.name)
            // const engineerName = engineer.name
            // console.log(typeof engineerName)
            // const engineerArr = [engineerName]
            // console.log(engineerArr)
            // console.log(typeof engineerArr)


            
            //this.engineers.push(new Engineer(answers.engName, answers.engId, answers.engEmail, answers.github))

                  

            console.log(this.engineers.length)
            console.log(this.engineers[0])
            

        })
    }





    }

// please enter the team manager’s name, employee ID, email address, and office number

//then menu to select engineer or intern to add to team

//if selected engineer then enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

//if selected Intern then enter the intern’s name, ID, email, and school, and I am taken back to the menu

//when selected Finished building Team - the HTML is generated

new Prompt().initializeEngineers()
