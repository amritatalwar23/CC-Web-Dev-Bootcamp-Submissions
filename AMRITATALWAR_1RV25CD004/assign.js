function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Task text
    let span = document.createElement("span");
    span.textContent = task;

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    // Delete functionality
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Add elements
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}