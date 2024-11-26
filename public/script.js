document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("search-bar").addEventListener("input", (e) => {
    const filter = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll("#task-list li");
    tasks.forEach(task => {
        const taskText = task.querySelector("input[type='text']").value.toLowerCase();
        if (taskText.includes(filter)) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
    });
});
