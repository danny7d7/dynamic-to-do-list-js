// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = [];

    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => {
                addTaskToDOM(taskText);
            });
        }
    }

    // Create the addTask Function
    const addTask = function() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Task Creation and Removal
        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            // Set its textContent to taskText
            li.textContent = taskText;
            
            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            // Set its textContent to "Remove"
            removeButton.textContent = "Remove";
            // Give it a class name of 'remove-btn' using className instead of classList.add
            removeButton.className = 'remove-btn';
            
            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                // Remove the li element from taskList when triggered
                taskList.removeChild(li);
            };
            
            // Append the remove button to the li element
            li.appendChild(removeButton);
            // Then append the li to taskList
            taskList.appendChild(li);
            
            // Clear the task input field
            taskInput.value = "";
        }
    };

    // Attach Event Listeners
    
    // Add an event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);
    
    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
