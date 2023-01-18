// The start button function
const start = () => {
   window.location.href = 'Middles Riddles_files/riddles.html';
}

// The Correct Answer
const correctAnswer = 'footstep';

// The user's answer
const userAnswer = (e) => {
   e.target.value;
}

//onSubmit...
const submit = () => {
   if (userAnswer === correctAnswer) {
      alert('correct'); // would change this later to something better
   } else {
      alert('wrong');
   }
}
