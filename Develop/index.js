//global variables 
const inquirer = require('inquirer');
const fs = require("fs");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const generateHTML = require('./utils/generateHTML');
const Engineer = require('./lib/Engineer');
const employeesArray = [];

function init() {

    console.log("team-profile.....");

    inquirer.prompt([{
        type: 'list',
        message: 'What kind of employee are you?',
        name: 'employeeType',
        choices: ['Intern', 'Engineer', 'Manager', 'Done Making Team']
    }]).then(response => {
        console.log(response);
        switch (response.employeeType) {
            case 'Intern':
                console.log("time to go to school ");
                addIntern();
                break;
            case 'Engineer':
                console.log("Engineer ");
                addEngineer();
                break;
            case 'Manager':
                console.log(" Manager");
                addManager();
                break;
            default:
                //fs.writeFile() -- create the html file 
                createHTML();
                console.log("goodbye!!");
                break;
        }
    })

}
const createHTML = () => {
    //console.log("employess", employeesArray);
    //convert data into HTML fiendly string 
    const data = generateHTML(employeesArray); 
    console.log("HTML Format", data ); 
    //Create the file 
    fs.writeFile("team.html", data, (err,response)=>{
        if(err) console.log(err); 

        console.log("Create html file sucessfully ")
    })
}

function addIntern() {
    inquirer.prompt([{
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your school ID?',
                name: 'schoolID'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your school/university name?',
                name: 'school',
            },
        ])
        .then(res => {

            console.log("intern Info", res);
            //convert into an intern class obj 
            const internInfo = new intern(res.name, res.schoolID, res.email, res.school);
            console.log("class Object: ", internInfo);
            employeesArray.push(internInfo);
            // //ask again 
            init();
        })
}

function addEngineer() {
    inquirer.prompt([{
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'github',
            },
        ])
        .then(res => {

            console.log("engineer Info", res);
            //convert into an intern class obj 
            const engineerInfo = new intern(res.name, res.id, res.email, res.github);
            console.log("class Object: ", engineerInfo);
            employeesArray.push(engineerInfo);
            // //ask again 
            init();
        })
}

function addManager() {
    inquirer.prompt([{
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your manager ID?',
                name: 'managerId',
            },
        ])
        .then(res => {

            console.log("Manager Info", res);
            //convert into an manager class obj 
            const managerInfo = new manager(res.name, res.managerId, res.email, res.officeNumber);
            console.log("class Object: ", managerInfo);
            employeesArray.push(managerInfo);
            // //ask again 
            init();
        })
}

init()