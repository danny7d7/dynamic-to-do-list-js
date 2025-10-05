document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = () => {
        const taskText = taskInput.value.trim();

        if(taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add click event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to list item
        li.appendChild(removeBtn);
        
        // Append list item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    };

    // Event listeners should be OUTSIDE the addTask function
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            addTask();
        }
    });
});