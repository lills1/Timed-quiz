var highScoreList = JSON.parse(localStorage.getItem('highscores')) || [];
if (localStorage.getItem('highscores') !== null) {
    highScoreList = JSON.parse(localStorage.getItem('highscores'));
  }
  highScore = {
    name: currentName.value,
    score: gameScore
  }
  highScoreList.push(highscore);
  window.localStorage.setItem('highscores', JSON.stringify(highScoreList));
  

  highScoreText.innerHTML= "<tr><td>Name -</td><td> Score</td></tr><br>";
    //show highscores window
    if (localStorage.getItem('highscores')) {
        highScoreText.innerHTML += highScoreList
    } else {
        highScoreText.textContent += "No high scores to display :("
    }
    highScoresContainer.style.display = "block"; 
  