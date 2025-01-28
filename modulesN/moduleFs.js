const fs = require('fs');
const mainIndex = 'index.html';
const testIndex = 'indexToReplace.html'

// reading file and copy file
function readAndCopyF(indexToRead) {
    fs.readFile(indexToRead, 'utf-8', (err, contenido) => {
        if (err) {
            throw err;
        } else {
            const fuente = contenido
            console.log('');
            console.log('readFile executed!!');
            console.log('****************************************************');
            console.log('');
            console.log('');
            fs.writeFile('copia.html', fuente, (err) => {
                if (err) {
                    throw err;
                }
                console.log('');
                console.log('coppied content executed!!');

            });
        }
    });
    return
}

/*

// rename file

fs.rename('index.html', 'newIndex.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('');
    console.log('rename name  executed!!');

});*/


//readF(mainIndex);
console.log('');

/*
// adding content in file

fs.appendFile('index.html', '<p>Hello Again</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('');
    console.log('adding content executed!!');

});
*/

//readAndCopyF(mainIndex);
readAndCopyF(testIndex)