var highScoreEl= document.getElementById("highScoresContainer");
var highscores="";
var highScoreList = JSON.parse(localStorage.getItem('highscores')) || [];
if (localStorage.getItem('highscores') !== null) {
    highScoreList = JSON.parse(localStorage.getItem('highscores'));
  }
  /*highScore = {
    name: currentName.value,
    score: gameScore
  }
  highScoreList.push(highscore);
  window.localStorage.setItem('highscores', JSON.stringify(highScoreList));
  */
  text = "<h3>High Scores</h3>\n<table><tr><td>Name -</td><td> Score</td></tr>";
  for (let i = 0; i < highScoreList.length; i++) {
    text += "<tr><td>"+highScoreList[i].name+"</td><td>"+highScoreList[i].score+ "</td></tr>";
  }
  text += "</table>";
  highScoreText.innerHTML= text;
    //show highscores window
    if (localStorage.getItem('highscores')) {
        // highScoreText.innerHTML += highScoreList
    } else {
        highScoreText.innerHTMLContent += "No high scores to display"
    }
    highScoresContainer.style.display = "block"; 


  