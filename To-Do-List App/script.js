const inputBox = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");
const addtask = document.getElementById("addtask")

addtask.addEventListener(('click'), function(){
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement('span');
        span.innerHTML = "&times"; // Unicode for ×
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = '';
});

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});
