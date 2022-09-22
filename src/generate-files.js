const fs = require("fs");
const path = require("path");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if err, reject promise and send err to promise's `.catch()` method
            if (err) {
                reject(err);
                // return is necessary to exit function, otherwise it will continue to resolve (next code)
                return;
            }
            // if success, resolve promise and send successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
        fs.copyFile('./src/images/engineer.svg', './dist/images/engineer.svg', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
        fs.copyFile('./src/images/intern.svg', './dist/images/intern.svg', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
        fs.copyFile('./src/images/manager.svg', './dist/images/manager.svg', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

module.exports = templateHTML => {
    writeFile(templateHTML);
    if (!fs.existsSync('./dist/images')) {
        fs.mkdirSync('./dist/images');
    };
    copyFile();
    console.log("Team Builder Project complete! You can find all of the files in the './dist' folder.")
};