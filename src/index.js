function showScore() {
  document.querySelector("#user1-score").innerHTML = user1_score;
  document.querySelector("#user2-score").innerHTML = user2_score;

  if (count == 0) {
    if (user1_score === user2_score) {
      alert("It's a Draw!!!");
    } else {
      user1_score > user2_score ? alert("you win !!!") : alert("you lost");
    }
    window.location.reload();
  }
}

function setScore(user1, user2) {
  if (user1 === user2) {
    return;
  } else {
    if (user1 === "Rock") {
      if (user2 === "Paper") {
        user2_score += 1;
      } else if (user2 === "Scissor") {
        user1_score += 1;
      } else {
        return;
      }
    } else if (user1 === "Paper") {
      if (user2 === "Rock") {
        user1_score += 1;
      } else if (user2 === "Scissor") {
        user2_score += 1;
      } else {
        return;
      }
    } else if (user1 === "Scissor") {
      if (user2 === "Paper") {
        user1_score += 1;
      } else if (user2 === "Rock") {
        user2_score += 1;
      } else {
        return;
      }
    }
  }
  showScore();
}

function showValue(user1_value, user2_value) {
  document.querySelector("#user").innerHTML = user1_value;
  document.querySelector("#user2").innerHTML = user2_value;
}

function showCount() {
  document.querySelector("h2").innerHTML = `${count} out of 5 chance left`;
}

function getValue(event) {
  event.preventDefault();
  let user1 = document.activeElement.getAttribute("value");
  let values = ["Rock", "Paper", "Scissor"];
  let random_value = Math.round(Math.random() * 2);
  let user2 = values[random_value];
  count -= 1;
  showCount();
  showValue(user1, user2);
  setScore(user1, user2);
}

document.querySelector("form").addEventListener("submit", getValue);
let user1_score = 0;
let user2_score = 0;
let count = 5;
