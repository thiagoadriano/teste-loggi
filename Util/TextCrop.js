/**
 * Criado por Thiago Adriano<thiago.s.adriano@gmail.com>
 * 
 */
const
    CODE_CARACTERS = require('./CodeCharacters'),
    CARACTER_LIMIT = 133; //pattern twitter: 00/00 [content text].

let textInput = '',
    resultList = [],
    _callback = null;


function init(text, callback) {
    if(!text) {
        throw "Texto não encontrado!"
    }

    textInput = text.trim().replace(/\n|\r/g, ' ');
    _callback = callback || null;
    
    if (textInput.length < CARACTER_LIMIT) {
        if(_callback) {
            _callback(_generateLog(textInput))
        } else {
            console.log(_generateLog(textInput));
        }
    } else {
        _parseTweet();
        _print();
    }
}

function _certifiedFinalCaracter(text) {
    return  _checkLastCaracter(text, 'POINT') ||  
            _checkLastCaracter(text, 'COMMA') ||
            _checkLastCaracter(text, 'SINGLE_QUOTE') ||
            _checkLastCaracter(text, 'TWO_POINTS') ||  
            _checkLastCaracter(text, 'DOUBLE_QUOTE') ||
            _checkLastCaracter(text, 'EXCLAMATION') ||
            _checkLastCaracter(text, 'QUESTION')
}

function _checkLastCaracter(text, compare) {
    var caracter = text.charAt(text.length - 1);
    return caracter.charCodeAt(caracter) === CODE_CARACTERS[compare];
}

function _generateLog(text, counter, total) {
    var firstCaracter = text.slice(0,1).toUpperCase(),
        continuosText = text.slice(1),
        tweetText = firstCaracter + continuosText,
        point = !_certifiedFinalCaracter(text) ? '.' : '',
        tweet = `${tweetText.trim()}${point}`;
    
    
    if (counter && total) {
        tweet = `${counter}/${total} ` + tweet;
    }

    return `Seu Tweet ${counter || ''} \r\ncontém um total de ${tweet.length} caracteres:\r\n${tweet}\r\n`;
}

function _parseTweet() {
    do {
        var tempText = textInput.substring(0, CARACTER_LIMIT),
            tempLength = 0;

        if (_checkLastCaracter(tempText, 'SPACE')) {
            resultList.push(tempText);
            tempLength = tempText.trim().length;
        } else if (textInput.length > CARACTER_LIMIT) {
            let lastPositionSpace = tempText.lastIndexOf(' '),
                textCapture = tempText.substring(0, lastPositionSpace);
            resultList.push(textCapture);
            tempLength = textCapture.length;
        } else {
            resultList.push(textInput);
            tempLength = 0;
            textInput = "";
        }

    } while((textInput = textInput.slice(tempLength).trim())); 
}

function _print() {
    let logs = [];
    for (let i = 0, total = resultList.length; i < total; i++) {
        let that = resultList[i],
            counter = i + 1,
            logGenerated = _generateLog(that, counter, total);
        
        if (!_callback) {
            console.log(logGenerated);
        } else {
            logs.push(logGenerated);
        }
    } 

    if (_callback) {
        _callback(logs.join('\r\n'));
    }
}

module.exports = { init };