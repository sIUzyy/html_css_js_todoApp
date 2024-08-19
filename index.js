// invoke the 'input' tag in our html
const inputValue = document.querySelector('input')

// invoke the 'button' tag that has a #addTask id in our html
const addTask = document.querySelector('#addTask')

// invoke the 'taskList' container
const taskContainer = document.querySelector('.taskList')

// invoke the 'createTask'-container 
const inputContainer = document.querySelector('.createTask-container')

// create an element h1 tag and called it as 'isEmpty'
const isEmpty = document.createElement('h1')

// create an attribute to it
isEmpty.setAttribute('class','empty-message')

// put a message.
isEmpty.innerText = 'your input field is empty'

// by default the isEmpty is hidden
isEmpty.style.display = 'none'

// add the isEmpty in inputContainer.
inputContainer.append(isEmpty)

// create a function for button 'addTask'
addTask.addEventListener('click', function(){

    // create a new other 'div' element called 'subContainer' 
    const subContainer = document.createElement('div')

    // set an attribute to it to add a css and functionality.
    subContainer.setAttribute('class', 'sub-list')
   
    // create a 'h1' tag
    const textTask = document.createElement('h1')

    // set an attribute to it to add a css and functionality.
    textTask.setAttribute('class','main-content')
   
    // display the inputed value
    textTask.innerText = `${inputValue.value}`
    
    // create a button for 'deleteContainer' 
    const deleteContainer = document.createElement('button')

    // add a name for that button
    deleteContainer.innerText = 'Delete'

     // set an attribute to it to add a css and functionality.
    deleteContainer.setAttribute('id', 'deleteTask')

    // create a button for 'markAsDone'
    const markAsDone = document.createElement('button')

    // add a name for that button
    markAsDone.innerText = 'Mark as Done'

    // set an attribute to it to add a css and functionality.
    markAsDone.setAttribute('id', 'doneTask')

    // add the textTask h1 tag to subContainer div
    subContainer.append(textTask)
   
    // add the deleteContainer button to subContainer div
    subContainer.append(deleteContainer)

    // add the markAsDone button to subContainer div
    subContainer.append(markAsDone)

    // check if the input is empty
    if(inputValue.value === ''){
        // if yes, show the isEmpty message.
        isEmpty.style.display = 'block';
    } else {
        // if not, hide the isEmpty message.
        isEmpty.style.display = 'none';

        // display the h1 tag, delete button, markAsDone button
        taskContainer.append(subContainer);
    }
    // reset the input to empty after inputting.
    inputValue.value = ''

    // create a functionality to our markAsDone button
    markAsDone.addEventListener('click', function(){
        if (textTask.style.textDecorationLine === 'line-through') {
            // If the text is already marked as done, remove the line-through
            textTask.style.textDecorationLine = 'none'

            // Reset to original color or use another color if preferred
            textTask.style.color = 'initial'
        } else {
            // Otherwise, mark the text as done
            textTask.style.textDecorationLine = 'line-through';
            textTask.style.color = '#7feaac';
        }
    })

    // create a functionality to our deleteContainer button
    deleteContainer.addEventListener('click', function(){

        // remove the subContainer div. node traversal.
        subContainer.remove()
    })


})


