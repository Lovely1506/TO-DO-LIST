// Add event listener for the push button
document.querySelector('#push').onclick = function() {
  let taskInput = document.querySelector('#newtask input');
  
  // Check if the task input is empty
  if (taskInput.value.trim().length == 0) {
      alert("Please Enter a Task");
  } else {
      // Add the new task to the tasks div
      document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${taskInput.value.trim()}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;

      // Add delete functionality to the delete buttons
      addDeleteFunctionality();

      // Add toggle functionality for marking task as completed
      addToggleTaskCompletion();

      // Clear the input after adding the task
      taskInput.value = "";
  }
};

// Function to add delete functionality
function addDeleteFunctionality() {
  let deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(button => {
      button.onclick = function() {
          this.parentNode.remove();
      };
  });
}

// Function to add toggle functionality for task completion
function addToggleTaskCompletion() {
  let tasks = document.querySelectorAll(".task");
  tasks.forEach(task => {
      task.onclick = function() {
          this.classList.toggle('completed');
      };
  });
}
