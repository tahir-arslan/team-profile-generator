const questionsManager = [{
    type: 'text',
    name: 'managerName',
    message: 'Welcome team manager. What is your name?',
    validate: managerNameInput => {
        if (managerNameInput) {
            return true;
        } else {
            console.log('Please enter your name!');
            return false;
        }
    }
},
{
    type: 'text',
    name: 'managerID',
    message: 'What is your employee ID?',
    validate: managerIdInput => {
        if (managerIdInput) {
            return true;
        } else {
            console.log('Please enter your employee ID!');
            return false;
        }
    }
},
{
    type: 'text',
    name: 'managerEmail',
    message: 'What is your email address?',
    validate: managerEmailInput => {
        if (managerEmailInput) {
            return true;
        } else {
            console.log('Please enter email address!');
            return false;
        }
    }
},
{
    type: 'text',
    name: 'managerOfficeNumber',
    message: 'What is the number to contact your office?',
    validate: manageNumberInput => {
        if (manageNumberInput) {
            return true;
        } else {
            console.log('Please enter your office phone number!');
            return false;
        }
    }
}]

module.exports = questionsManager