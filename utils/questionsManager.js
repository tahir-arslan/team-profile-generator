const questionsManager = [{
    type: 'text',
    name: 'managerName',
    message: 'Welcome team manager. What is your name?',
    validate: managerNameInput => {
        if (managerNameInput) {
            return true;
        } else {
            console.log('     Please enter your name!');
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
            console.log('     Please enter your employee ID!');
            return false;
        }
    }
},
{
    type: 'text',
    name: 'managerEmail',
    message: 'What is your email address?',
    validate: emailInput => {
        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (emailInput && valid) {
            return true;
        } else if (emailInput && !valid) {
            console.log('     Please enter a valid email.');
            return false;
        } else {
            console.log("     Please enter your email address!");
            return false;
        }
    }
},
{
    type: 'text',
    name: 'managerOfficeNumber',
    message: 'What is the number to contact your office?',
    validate: manageNumberInput => {
        let valid = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(manageNumberInput)
        if (manageNumberInput && valid) {
            return true;
        } else if (manageNumberInput && !valid) {
            console.log('     Please enter a valid phone number');
            return false;
        } else {
            console.log("     Please enter the phone number to your office.")
        }
    }
}]

module.exports = questionsManager