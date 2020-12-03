const form = () => document.querySelector('form')
const input = () => document.querySelector('input#new-task-description')
const tList = () => document.querySelector('ul#tasks')

document.addEventListener("DOMContentLoaded", () => {
  form().addEventListener('submit', createTask)

});

function createTask(e) {
  e.preventDefault()
  
  const description = input().value
  
  const li = document.createElement('li')
  li.innerText = description

  const deleteButton = document.createElement('button')
  deleteButton.innerText = "Delete!"

  deleteButton.addEventListener('click', function() {
    this.parentNode.remove()
  })

  li.appendChild(deleteButton)
  tList().appendChild(li)

  
  clearInput()
}

function clearInput() {
  input().value = ''
}