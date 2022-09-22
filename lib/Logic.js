const inquirer = require('inquirer');
const generateHTML = require('../src/generate-html');

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const questionsManager = require('../utils/questionsManager');
const questionsEngineer = require('../utils/questionsEngineer');
const questionsIntern = require('../utils/questionsIntern');

function TeamBuilder() {
    // create empty team array to store team data
    this.firstQuestion = true;
    this.builderInstructions = true;
};

// prompt manager info input
TeamBuilder.prototype.initializeLogic = function() {
    // welcome text
    console.log(`
        -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
         Hello, and welcome to the team builder application! 
         Please make sure you have the following information ready: 
           Manager: Manager Name, Employee ID, Email Address, and Office Number
           Engineer: Name, Employee ID, Email Address, and GitHub Username
           Intern: Name, Employee ID, Email Address, and School Name
        -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-    `);

    // initialize manager input and data collection
    return inquirer
        .prompt(questionsManager)
        .then(({ managerName, managerID, managerEmail, managerOfficeNumber }) => {
            generateHTML(new Manager(managerName, managerID, managerEmail, managerOfficeNumber));
            // console.log(this.team);
            this.buildTeam();
        })
};

// prompt questions to build team
TeamBuilder.prototype.buildTeam = function () {
    // intro text set to appear only once
    if (this.builderInstructions) {
        console.log(`
        -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
          Welcome to the team builder portion of this application! 
          You can add as many employees as you would like.
          When you are done, please select 'Build HTML.'
        -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        `)
        this.builderInstructions = false;
    }

    inquirer.prompt({
            type: 'list',
            name: 'member',
            message: this.firstQuestion ? ('Which position would you first like to add?') : ('Which position would you like to add next?'),
            choices: this.firstQuestion ? [ 'Engineer', 'Intern' ] : [ 'Engineer', 'Intern', 'Build HTML' ]
        })
        .then(({ member }) => {
            if (member === 'Engineer') {
                this.firstQuestion = false;
                inquirer.prompt(questionsEngineer)
                    .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
                        generateHTML(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));
                        this.buildTeam();
                    });
            } 
            else if (member === 'Intern') {
                this.firstQuestion = false;
                inquirer.prompt(questionsIntern)
                    .then(({ internName, internId, internEmail, internSchool }) => {
                        generateHTML(new Intern(internName, internId, internEmail, internSchool));
                        this.buildTeam();        
                    });
            } 
            else {
                console.log('You have completed building your team!');
                // generate HTML
                generateHTML(false);
            }
        })
} ;

module.exports = TeamBuilder