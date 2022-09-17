// const inquirer = require('inquirer');

// Logic.prototype.initializeLogic = function() {
//     this.builderIntro = true;
//     // initialize manager input and data collection
//     console.log(`
//         -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//         Hello, and welcome to the team builder application! Only the team manager is able 
//         to log in to  build the team. Make sure you have the following information ready: 
//         Team manager name, employee ID, email address, and office number.
//         -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//     `)
//     inquirer
//         .prompt({
//             type: 'text',
//             name: 'managerName',
//             message: 'Welcome team manager. What is your name?',
//             validate: managerNameInput => {
//                 if (managerNameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your name!');
//                 }
//             }
//         },
//         {
//             type: 'text',
//             name: 'managerID',
//             message: 'What is your employee ID?',
//             validate: managerIdInput => {
//                 if (managerIdInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your employee ID!');
//                 }
//             }
//         },
//         {
//             type: 'text',
//             name: 'managerEmail',
//             message: 'What is your email address?',
//             validate: managerEmailInput => {
//                 if (managerEmailInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter email address!');
//                 }
//             }
//         },
//         {
//             type: 'text',
//             name: 'managerOfficeNumber',
//             message: 'What is the number to contact your office?',
//             validate: manageNumberInput => {
//                 if (manageNumberInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your office number!');
//                 }
//             }
//         })
//         .then(({ managerInfo }) => {
//             // destructure information from prompts
//             // begin next logic
//             this.buildTeam();
//         });
// };

// Logic.prototype.buildTeam = function () {
//     // intro text set to appear only once
//     if (builderIntro) {
//         console.log(`
//             -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//             Welcome to the team builder portion of this application! Here you will be presented 
//             with choices to create your team. You can add as many employees as you would like.
//             When you are done, please select 'Finished.'
//             -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//         `)
//         this.builderIntro = false;
//     }

//     // initialize prompts to build team
//     inquirer
//         .prompt({
//             type: 'list',
//             name: 'role',
//             message: 'Which position would you like to add?',
//             choices: [ 'Engineer', 'Intern' ]
//         })
// }




// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated