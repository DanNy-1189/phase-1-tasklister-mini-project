document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(document.querySelector('#new-task-description').value);
    form.reset();
  })  
});

function buildToDo(task) {
  const p = document.createElement('p');
  const press = document.createElement('button');
  press.addEventListener('click', handleDelete);
  press.textContent = 'x';
  p.textContent = `${task}`;
  p.appendChild(press);
  document.querySelector('#list').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}