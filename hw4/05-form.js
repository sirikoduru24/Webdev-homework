let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('date').value;
  let newsLetter = document.forms[0].elements['class-section'].value;
  if(!name && !email && !date && !newsLetter) {
    console.warn("You must enter some data to submit this form");
  } else {
    console.group('=========Form Submission=========');
    if(!name) {
      console.log('Username: no submission');
    } else {
      console.log('Username: '+name);
    }
    if(!email) {
      console.log('Email: no submission');
    } else {
      console.log('Email: '+email);
    }
    if(!newsLetter) {
      console.log('News Letter: no submission');
    } else {
      console.log('News Letter: '+newsLetter);
    }
    if(!date) {
      console.log('Date: no submission');
    } else {
      console.log('Date: '+date);
    }
  }
}
