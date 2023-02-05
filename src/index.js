//function needs to
// create a new li
//fill it with the submission text content
//append it to the correct ul

let n=0;
let priorityArray = ['High Priority','Medium Priority','Low Priority','Select Priority']
const createTaskBtn = document.querySelector('input[type="submit"]')
let thisForm = document.querySelector('form');
let selectElem = document.querySelector('#select'); // Needs to be selected in Global Scope but before handleLi event listener and after dropdown generation

function dropDownCreation () {
  
  newSelect = document.createElement('select');
  newSelect.setAttribute ('id','select');

  priorityArray.forEach( (arrayElement) => {
    newOption = document.createElement('option');
    newOption.textContent = arrayElement;    

    if (newOption.textContent == priorityArray[3]){
      newOption.setAttribute ('selected','selected')
      newOption.setAttribute ('disabled','disabled')
      newOption.setAttribute ('hidden','hidden')
    } else if(newOption.textContent == priorityArray[0]) {
      newOption.style.color = '#C03221';
    } else if(newOption.textContent == priorityArray[1]){
      newOption.style.color = '#3CDBD3';
    } else {
      newOption.style.color = '#9E8FB2';
    }
    newSelect.append(newOption);
  });
  thisForm.append(newSelect);
};

document.addEventListener("DOMContentLoaded", () => {
  
  dropDownCreation ();

  thisForm.addEventListener('submit', handleLi)
});

function handleLi (eventObj) {
  eventObj.preventDefault();
  let newLi = document.createElement('li');
  newLi.setAttribute('id', `li-${n}`)
  newLi.textContent = eventObj.target['new-task-description'].value;
  

  if (selectElem.selectedIndex === 0) {
    newLi.style.color = '#C03221';
    () => {document.querySelector('#tasks').append(newLi)};
  } else if (selectElem.selectedIndex === 1){
    newLi.style.color = '#3CDBD3';
    () => {document.querySelector('#tasks').append(newLi)};
  } else if (selectElem.selectedIndex === 2) {
    newLi.style.color = '#9E8FB2';
    () => {document.querySelector('#tasks').append(newLi)};
  } else {
    newLi.textContent = 'ERROR! No Priority Selected!';
    () => {document.querySelector('#tasks').append(newLi)};
  }
    
  const newDeleteButton = document.createElement('button');
  newDeleteButton.setAttribute('class',`deletebtn`); // NEED THIS TO TIE PRIORITY TO
  newDeleteButton.id = `deletebtn${n}`
  newDeleteButton.innerText = "X";




  newLi.append(newDeleteButton);

  newDeleteButton.addEventListener(`click`,(e) => {e.target.parentNode.remove()});

  n++
};