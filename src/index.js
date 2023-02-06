let thisForm = document.querySelector('form');
let n=0; // used to set ID for newLi & Delete Button 
let priorityArray = ['High Priority','Medium Priority','Low Priority','Select Priority']
const createTaskBtn = document.querySelector('input[type="submit"]')

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// Calling dropDownCreation function prior to selectElem so that 
//////////// select Elem can be read!
//////////////////////////////////////////////////////////////////////////////////////////////////////

dropDownCreation ();

const selectElem = document.querySelector('#select');

function handleLi (eventObj) {

///////////////////////////////////////////////////////////////////
//////////// Creation of Task
///////////////////////////////////////////////////////////////////

  eventObj.preventDefault();
  const priority = document.querySelector('#select').selectedOptions[0].value;
  const ul = document.querySelector('#tasks');
  let newLi = document.createElement('li');
  newLi.setAttribute('id', `li-${n}`)
  newLi.textContent = eventObj.target['new-task-description'].value;
  
///////////////////////////////////////////////////////////////////
//////////// If Block for task Colour
///////////////////////////////////////////////////////////////////


  if (priority === priorityArray[0]) {
    newLi.style.color = '#C03221';
    } else if (priority === priorityArray[1]){
     newLi.style.color = '#3CDBD3';
    } else if (priority === priorityArray[2]) {
    newLi.style.color = '#9E8FB2';
    } else {
    newLi.textContent = 'ERROR! No Priority Selected!';
  }
  
  ul.append(newLi)

///////////////////////////////////////////////////////////////////
//////////// Delete Button Creation and Event Listener
///////////////////////////////////////////////////////////////////  
  
  const newDeleteButton = document.createElement('button');
  newDeleteButton.setAttribute('class',`deletebtn`); // WILL LIKELY NEED CLASS TO TIE PRIORITY TO
  newDeleteButton.id = `deletebtn${n}`
  newDeleteButton.innerText = "X";
  
  newLi.append(newDeleteButton);
  
  newDeleteButton.addEventListener(`click`,(e) => {e.target.parentNode.remove()});

///////////////////////////////////////////////////////////////////
//////////// Iterating Global Variable, may Delete
///////////////////////////////////////////////////////////////////  

  n++
};

///////////////////////////////////////////////////////////////////
//////////// Creation of Dropdown!
///////////////////////////////////////////////////////////////////

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
      newOption.value = `${arrayElement}`
    } else if(newOption.textContent == priorityArray[0]) {
      newOption.style.color = '#C03221';
      newOption.value = `${arrayElement}`
    } else if(newOption.textContent == priorityArray[1]){
      newOption.style.color = '#3CDBD3';
      newOption.value = `${arrayElement}`
    } else {
      newOption.style.color = '#9E8FB2';
      newOption.value = `${arrayElement}`
    }

    newSelect.append(newOption);
  });
  thisForm.append(newSelect);
};

document.addEventListener("DOMContentLoaded", () => {

  thisForm.addEventListener('submit', handleLi)
});

