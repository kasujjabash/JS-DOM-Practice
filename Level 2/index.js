let contentTaskInput = document.getElementById("taskInput");
let contentTaskButton = document.getElementById("addTaskButton");
let contentTaskList = document.getElementById("taskList");
let search = document.getElementById("searchInput");
let table = document.getElementById("userTable");
let row = table.getElementsByTagName("tr");


// let tableContent = [
//     { name: "John Doe", age: 30, dateOfBirth: "1993-01-01" },
//     { name: "Jane Smith", age: 25, dateOfBirth: "1998-05-15" },
//     { name: "Alice Johnson", age: 28, dateOfBirth: "1995-03-20" },
//     { name: "Bob Brown", age: 35, dateOfBirth: "1988-07-30" },
//     { name: "Charlie White", age: 22, dateOfBirth: "2001-11-10" },
//     { name: "Diana Green", age: 27, dateOfBirth: "1996-09-25" },
    
// ]

//function to add task
function addTask() {
    let taskTask = contentTaskInput.value.trim()
    if(taskTask === ""){
        alert("Please enter a task.");
        return; 
    }

    //create a new list item
    let taskItem = document.createElement("li");

    //create a span for the task text
    let taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskTask;

    //create a span for the buttons
    let taskSpan = document.createElement("span");

    let taskSpanEditBtn = document.createElement("button");
    taskSpanEditBtn.textContent = "edit";

    // a function to edit the task 
    taskSpanEditBtn.addEventListener("click", function() {
        let newTask = prompt("Edit your task:", taskTextSpan.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            taskTextSpan.textContent = newTask.trim();
        }
    });

    let taskSpandeleteBtn = document.createElement("button");
    taskSpandeleteBtn.textContent = "delete";

    // a function to delete the task
    taskSpandeleteBtn.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this task?")) {
            contentTaskList.removeChild(taskItem);
        }
    });


    taskSpan.appendChild(taskSpanEditBtn);
    taskSpan.appendChild(taskSpandeleteBtn);

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(taskSpan);

    contentTaskList.appendChild(taskItem);

}
contentTaskButton.addEventListener("click", addTask);

// Function to filter table rows based on search input
function filterTable() {
    let searchTerm = search.value.toLowerCase();
    for (let i = 1; i < row.length; i++) { // Start from 1 to skip the header row
        let cell = row[i].getElementsByTagName("td")[0]; // Assuming we are searching by the first column (Name)
        if (cell) {
            let cellText = cell.textContent || cell.innerText;
            if (cellText.toLowerCase().indexOf(searchTerm) > -1) {
                row[i].style.display = ""; // Showing all the row
            } else {
                row[i].style.display = "none"; // Hide the row
            }
        }
    }
}

search.addEventListener("keyup", filterTable);


