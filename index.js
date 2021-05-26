const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateManagerCard = require('./src/manager-card')
const generateEngineerCards = require('./src/engineer-card')
const generateInternCards = require('./src/intern-card')

//start
// new array of employees?
class Prompt {
    
    constructor() {
        this.projectManager
        this.engineers = []
        this.interns = []
        this.engineerCount = 0
        this.internCount = 0        
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
            return this.userSwitch()
        })        
        }

    initializeEngineers() {

        this.engineerCount++

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
            
            let count = this.engineerCount.toString()
            this.engineers[count] = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.github)
            //console.log(Object.keys(this.engineers))
            //console.log(this.engineers.length - 1)            
            return this.userSwitch()
        })
    }

    initializeInterns() {
        
        this.internCount++

        inquirer.prompt([{
            type: 'text',
            name: 'intName',
            message: 'What is the Interns name?'
        },
        {
            type: "input",
            name: "intId",
            message: "What is their employee ID number? "
        },
        {
            type: "input",
            name: "intEmail",
            message: "What is their email address? "
        },
        {
            type: "input",
            name: "school",
            message: "What is their school they attended? "
        }]).then(answers => {            
            let count = this.internCount.toString()
            this.interns[count] = new Intern(answers.intName, answers.intId, answers.intEmail, answers.school)            
            //console.log(Object.keys(this.interns))
            //console.log(this.interns.length - 1)            
            return this.userSwitch()
        })
    }

    userSwitch() {
        inquirer
        .prompt({
          type: 'list',
          message: 'What would you like to do next?',
          name: 'action',
          choices: ['Add new Engineer', 'Add new Intern', 'Finish Team']
        })
        // .then(({action}) => {
        //    this.choiceSwitch(action)
        // })  
        
        // If statement
        .then(({ action }) => {
            if (action === 'Add new Engineer') {
                return this.initializeEngineers()
            }
            else if (action === 'Add new Intern') {
                return this.initializeInterns()
            }
            else {
                console.log("Team created!")
                generateInternCards(this.interns)
                generateEngineerCards(this.engineers)
                generateManagerCard(this.projectManager)
            }
        })
    }

    // choiceSwitch(action) {
        
    //     let choice = {
    //         'Add new Engineer': function() {
    //             new Prompt().initializeEngineers()
    //         },
    //             //this.initializeEngineers(),
    //         'Add new Intern': function() {
    //             new Prompt().initializeInterns
    //         },
            
    //             //this.initializeInterns(),
    //         'Finish Team': function() {
    //             new prompt().generateCards()
    //         }
    //     }
    //     return choice[action]
    // }

    }

// please enter the team manager’s name, employee ID, email address, and office number

//then menu to select engineer or intern to add to team

//if selected engineer then enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

//if selected Intern then enter the intern’s name, ID, email, and school, and I am taken back to the menu

//when selected Finished building Team - the HTML is generated

new Prompt().initializeTeam()


// function choiceSwitch(action) {
//     let choice = {
//         'Add new Engineer': function() {
//             return initializeEngineers()
//         },
//         'Add new Intern': function() {
//             return initializeInterns
//         },
//         'Finish Team': function() {
//             return console.log('Team Created!')
//         }
//     }
//     return choice[action]()
// }
