const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/',function (req,res) {
    res.sendFile(__dirname+"/index.html");
});


var data=0 ,equation, result ,answers;
app.post('/',function (req,res) {
    const fNum = parseInt(req.body.first_num);
    const sNum = parseInt( req.body.second_num);
    const operator = req.body.operator;
    switch (operator) {
        case "+":
            result = fNum + sNum;
            break;
        case "-":
                result = fNum - sNum;

                break;
        case "*":
                result = fNum * sNum;

                break;
        case "/":
                result = fNum / sNum;

                break;
        default:
            break;
    };
    var random1 = parseInt(Math.random() * 7);
    var random2 = parseInt(Math.random() * 7);
    answers = [result, random1, random2];
    shuffle(answers);
     data = {
        firstNum : fNum,
        secondNum : sNum,
        operator: operator,
        fullEquation: fNum +" " +operator + " " + sNum +" =",
        result: result,
        answers: answers
    }


    res.redirect('/quizPage');
});



app.get('/quizPage',function (request,response) {
    response.render("index",{data:data});

});

app.post('/quizPage',function (request,response) {

});

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


app.listen(3000, function () {
    console.log("Listening to 3000");
});