//function needs to
// create a new li
//fill it with the submission text content
//append it to the correct ul

document.addEventListener("DOMContentLoaded", () => {
  let thisForm = document.querySelector('form');
  thisForm.addEventListener('submit', handleLi)
});

function handleLi (eventObj) {
  eventObj.preventDefault();
  let newLi = document.createElement('li');
  newLi.textContent = eventObj.target['new-task-description'].value;
  document.querySelector('#tasks').append(newLi);
};

//Questions 
// How exactly does .target work?
// Practice using the debugging tool
// How quickly does the learning escalate?
// Practice Labs for tonight?
//

