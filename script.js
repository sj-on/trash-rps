// console.log('does my pen write stupid words for those who are dear to me?');

const selection = ['rock', 'paper', 'scissors'];
const record = document.getElementById('record');
const score = [];

function onPageLoad() {
  for (let i = 0; i < 5; i++) {
    let playerChooses = prompt('rock, paper, scissors?');
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    const msg = playRound(playerChooses.toLowerCase(), computerSelection);
    scoreManagement(msg, score, i, playerChooses.toLowerCase(), computerSelection);
  }
}

function playRound(playerSelection, computerSelection) {
  if (!selection.includes(playerSelection)) {
    score.push(-1);
    msg = "wow. poser. can't type properly, now can you? 1 point from gryffindor.";
  } else if (playerSelection === computerSelection) {
    score.push(0);
    msg = 'nobody wins. it is a draw.';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    score.push(0);
    msg = 'loser. paper beats rock.';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    score.push(0);
    msg = 'ha ha. you lose. scissors beat paper.';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    score.push(0);
    msg = 'woah. why do you always have to be such a loser? rock beats scissors.';
  } else {
    score.push(1);
    msg = 'you win. finally.';
  }
  return msg;
}

function scoreManagement(msg, score, i, youch, comp) {
  const para = document.createElement('p');
  para.innerHTML = `${msg} you chose: ${youch}. computer: ${comp}. <span>score for this round: <strong>${score[i]}</strong></span>`;
  record.appendChild(para);
}

function displayFinals(score) {
  const fs = document.createElement('h2');
  fs.innerText = `final score: ${totalScore(score)}`;
  record.appendChild(fs);
}

function totalScore(score) {
  let sum = 0;
  score.forEach((element) => {
    sum += element;
  });
  return sum;
}

onPageLoad();
displayFinals(score);
