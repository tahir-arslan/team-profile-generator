const inquirer = require('inquirer');
const TeamBuilder = require ('./lib/Logic');

new TeamBuilder().initializeLogic();

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated