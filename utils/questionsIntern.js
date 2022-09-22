const questionsIntern = [{
    type: 'input',
    name: 'internName',
    message: "Intern's Name:",
    validate: managerNameInput => {
        if (managerNameInput) {
            return true;
        } else {
            console.log("     Please enter the intern's name!");
            return false;
        }
    }
}, {
    type: 'input',
    name: 'internId',
    message: "Intern's ID:",
    validate: internIdInput => {
        if (internIdInput) {
            return true;
        } else {
            console.log("     Please enter the intern's ID!'");
            return false;
        }
    }
}, {
    type: 'input',
    name: 'internEmail',
    message: "Intern's Email:",
    validate: emailInput => {
        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (emailInput && valid) {
            return true;
        } else if (emailInput && !valid) {
            console.log('     Please enter a valid email.');
            return false;
        } else {
            console.log("     Please enter this employee's email address!");
            return false;
        }
    }
}, {
    type: 'input',
    name: 'internSchool',
    message: "Intern's School Name:",
    validate: schoolInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log("     Please enter the name of the intern's school!");
            return false;
        }
    }
}]

module.exports = questionsIntern