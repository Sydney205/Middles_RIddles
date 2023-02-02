// The start button function
const start = () => {
    window.location.href = 'Middles Riddles_files/riddles.html';
}

//onSubmit...
const submit = () => {

    // The Correct Answer
    const correctAnswer = 'footstep';

    // The input box
    const box = document.getElementById('answer');
    if (box.value == correctAnswer) {
       swal({
             title: "Correct!",
             text: "You're Correct!",
             icon: "success",
             button: "Next",
        }); // would change this later to something better
    } else {
        alert('wrong');
    }
}


// Just a simple code for now... it might look to simple now but might get complex later LOL 
