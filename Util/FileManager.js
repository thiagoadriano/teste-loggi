/**
 * Criado por Thiago Adriano<thiago.s.adriano@gmail.com>
 * 
 */
const fs = require('fs');

function hasExtension(file) {
    if (file.length > 0 && file.length < 160) {
        let isFile = /.*\.([a-z]{3,4})$/g.exec(file);
        return isFile && isFile.length > 0;
    }
    return false;
}

function isFile(file) {
    try {
        let stat = fs.statSync(file);
        return stat.isFile(); 
    } catch(e) {
        console.log('Arquivo de não encontrado', e);
    }
}

function isTXTFile(file){
    let extension = /.*\.([a-z]{3,4})$/g.exec(file);
    return extension[1] === 'txt';  
}

function readFile(fileUrl, callback, outfile) {
    if (!fileUrl) {
        throw  "Arquivo não especificado"
    }
    if (!callback) {
        throw  "Callback não especificado"
    }

    fs.readFile(fileUrl, 'latin1', (error, data) => {
        if(error) {
            throw error;
        } else {
            if (outfile) {
                callback(data.toString(), writeFile);
            } else {
                callback(data.toString());                
            }
        }
    });
}

function writeFile(text) {
    if (!text) {
        throw  "Texto não especificado"
    }

    let date = new Date(),
        dateFormated = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`,
        hourFormated = `${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`, 
        formateTimeStamp = `${dateFormated} ${hourFormated}`,
        localFile = `out/tweets-${formateTimeStamp}.txt`;

    fs.writeFile(localFile, text, {enconding: 'latin1'}, (err) => {
        if (err) { 
            throw err;
        }
        console.log(`File is Save in ${localFile}!`);
    });
}

module.exports = {readFile, writeFile, isFile, isTXTFile, hasExtension};