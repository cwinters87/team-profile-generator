const inquirer = require('inquirer')
const generatePageTemplate = require('./src/page-template')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateManagerCard = require('./src/manager-card')
const generateEngineerCards = require('./src/engineer-card')
const generateInternCards = require('./src/intern-card')
const writeFile = require('./src/generate-site')

// Prompt start
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
    
        .then(({ action }) => {
            if (action === 'Add new Engineer') {
                return this.initializeEngineers()
            }
            else if (action === 'Add new Intern') {
                return this.initializeInterns()
            }
            else {
                console.log("Team created!    index.html generated")                
                writeFile(generatePageTemplate(generateManagerCard(this.projectManager), generateEngineerCards(this.engineers), generateInternCards(this.interns)))
            }
        })
    }

}

// Start
new Prompt().initializeTeam()

