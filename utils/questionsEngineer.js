const questionsEngineer = [{
    type: 'input',
    name: 'engineerName',
    message: "Engineer's Name:",
    validate: engineerNameInput => {
        if (engineerNameInput) {
            return true;
        } else {
            console.log("     Please enter the name of the engineer's name!");
            return false;
        }
    }
}, {
    type: 'input',
    name: 'engineerId',
    message: "Engineer's ID:",
    validate: engineerIdInput => {
        if (engineerIdInput) {
            return true;
        } else {
            console.log("     Please enter the name of the engineer's ID!");
            return false;
        }
    }
}, {
    type: 'input',
    name: 'engineerEmail',
    message: "Engineer's Email:",
    validate: emailInput => {
        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (emailInput && valid) {
            return true;
        } else if (emailInput && !valid) {
            console.log('     Please enter a valid email.');
            return false;
        } else {
            console.log("     Please enter the engineer's email address!");
            return false;
        }
    }
}, {
    type: 'input',
    name: 'engineerGithub',
    message: "Engineer's GitHub Username:",
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log("     Please enter the name of the engineer's GitHub username!");
            return false;
        }
    }
}]

module.exports = questionsEngineer