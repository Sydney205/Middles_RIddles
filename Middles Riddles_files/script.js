const start = () => {
   window.location.href = 'Middles Riddles_files/riddles.html';
}

// The Answer
const answer = (e) => {
 e.target.value;
}

const correctAnswer = 'footstep';

const inputValue = document.getElementById('answer');

const submit = () => {
  if (inputValue.value == correctAnswer) {
   window.location.href = 'success.html';
 } else {
  alert('Wrong');
 }
}


