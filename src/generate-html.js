const generateFiles = require('./generate-files.js');

let buildHTML = `<!DOCTYPE html> 
<html lang="en"> 

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Raleway:wght@500&family=Rubik:wght@600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>
`;

const infoCard = teamData => {
    return `
    <div class="card">
        <div class="title">
            <div class="left">
                ${getIcon(teamData.getRole())}
            </div>
            <div class="right">
                <h2> ${teamData.name} </h2>
                <h3> ${roleInfo(teamData.getRole())} </h3>
            </div>
        </div>
        <div class="cardbody">
            <ul class="info">
                <li> <b>ID:</b> ${teamData.id} </li>
                <li> <b>Email:</b> <a href = "mailto: ${teamData.email}">${teamData.email}</a></li>
                <li> ${targetInfo(teamData)} </li>
            </ul>
        </div>
    </div>
    `;
};

const getIcon = role => {
    if (role === "Manager") return `<img src="./images/manager.svg" alt="engineer icon">`;
    if (role === "Engineer") return `<img src="./images/engineer.svg" alt="engineer icon">`;
    if (role === "Intern") return `<img src="./images/intern.svg" alt="intern icon">`;
};

const roleInfo = role => {
    if (role === "Manager") return `Manager`;
    if (role === "Engineer") return `Engineer`;
    if (role === "Intern") return `Intern`;
};

const targetInfo = teamData => {
    if (teamData.officeNumber) return `<b>Office Number:</b> ${teamData.officeNumber}`;
    if (teamData.github) return `<b>GitHub:</b> <a href="https://github.com/${teamData.github}" target="_blank">${teamData.github}</a>`;
    if (teamData.school) return `<b>School Name:</b> ${teamData.school}`;
};

const footer = `
    </main>

    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
    </footer>
</body>
</html>
`;

module.exports = teamData => {
    if (!teamData) {
        buildHTML += footer;
        console.log("HTML template generated! Now Creating Files...")
        generateFiles(buildHTML);
    } else {
        buildHTML += infoCard(teamData);
    }
};