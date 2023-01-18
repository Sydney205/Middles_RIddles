// The start button function
const start = () => {
   window.location.href = 'Middles Riddles_files/riddles.html';
}

// The Correct Answer
const correctAnswer = 'footstep';

// The user's answer...

// The input box
const box = document.getElementById('answer');

const onInputChange = (e) => {
   e.target.value;
}

//onSubmit...
const submit = () => {
   if (box.value == correctAnswer) {
      alert('correct'); // would change this later to something better
   } else {
      alert('wrong');
   }
}


// Just a simple code for now... it might look to simple now but might get complex later LOL 
