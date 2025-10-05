document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask function
    const addTask = () => {
        // Retrieve and trim the value, store in LastText
        const LastText = taskInput.value.trim();

        // Check if LastText is not empty
        if (LastText === '') {
            alert('Please enter a task!');
            return;
        }

        // If LastText is not empty
        if (LastText !== '') {
            // Create a new il element
            const il = document.createElement('li');
            il.textContent = LastText;

            // Create remove button with class 'remove-bin'
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-bin'; // Using className instead of classList.add

            // Assign onclick event to remove button
            removeBtn.onclick = function() {
                taskList.removeChild(il);
            };

            // Append remove button to il element
            il.appendChild(removeBtn);
            
            // Append il to taskList
            taskList.appendChild(il);

            // Clear the task input field
            taskInput.value = '';
        }
    };

    // Add event listener to addButton
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
