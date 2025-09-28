let tasks = []; 
console.log("bienvenue");
function addtask(taskText) {
    const taskList = document.getElementById('list');
    
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">Terminer</button>
            <button class="delete-btn">Supprimer</button>
        </div>
    `;
    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        taskItem.querySelector('span').classList.toggle('completed');
    });
    
    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskItem.remove();
    });
    taskList.appendChild(taskItem);
}
document.getElementById('btn').addEventListener('click', addTask);
document.getElementById('inp').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
function addTask() {
    const taskInput = document.getElementById('inp');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('veuillez entre une tache');
        return;
    }
    
    addtask(taskText);
    taskInput.value = '';
    taskInput.focus();
}
function deleteTask(index) {
    tasks.splice(index, 1);
}