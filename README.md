#Team Profile Generator
# Team Profile Builder
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description
This Node.js application gathers information from the user to generate a formatted HTML page to present the team information. It uses Inquirer to prompt the user for inputs. Jest is used to test the functionality of the code to test that the modularied codes are working as intended. Finally, it generates a new file, `index.html`, creates the new directory `./dist/images/` if not found, and copies necessary files from `./src` to `./dist` for the newly generated page to load correctly.

Each question is validated to ensure the information being provided is in the correct format. Phone validation includes extensions as well. The HTML generated populates the data in the order the user enters information about the team, and contains links that are fully functional. Clicking on a link will correctly take the user to it's target destination (ie. clicking an email will open the default email program and populate the TO field with the correct email address, and clicking on the GitHub username will open the link to the profile page in a new tab). 

The user is able to add as many employees to the team as desired, and can exit the application once the process of building the team is complete.

You are also able to view a showcasing of this project by checking out [this video link](https://drive.google.com/file/d/1ZC1ZVtfiUQLsdJZuWTrOSpYVRQwTwfKh/view).

#### Screenshot
![Screenshot](/assets/images/screenshot.png)

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License(s)](#licenses)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation
To generate your own Team's HTML page, `git clone` the repo down to your local so you have the Node project on your local. Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:
  * [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.

The application will start by running `node app.js` in the command line. Answer the prompts in your command line to generate the Team's Profile. After answering all the prompts, all generated files will be ready for you in the `./dist/`.

## Usage
When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions for the Manager's information.

From there, the application will generate an HTML page based on the user's inputs on each employee's information.

## License(s)
MIT

## Test
In order to run a test, simply execute `npm test`. In this application, there are 4 test suites and 12 tests in total.

## Questions
My name is Arslan Tahir, the creator of this project. If you have any issues, comments, concerns, or questions regarding this project, feel free to contact me at tahir.arslan@gmail.com.

If you would like to check out my other projects, feel free to explore my !(GitHub Page)[https://github.com/tahir-arslan/].