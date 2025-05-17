const ToDoList = () => {
    const tasks = [
    {taskName: "big task", isComplete: false},
    {taskName: "little task", isComplete: true},
    {taskName: "fun task", isComplete: true},
    {taskName: "hard task", isComplete: false},
    {taskName: "easy task", isComplete: true},
    {taskName: "avoided task", isComplete: false}
    ];
    let check = "\u2705";
    let xmark = "\u274c";

    const taskList = tasks.map(task=> 
        <li key={task.taskName}>{task.isComplete ? check + "   " + task.taskName : xmark + "   " + task.taskName}</li>);
    return <ul>{taskList}</ul>;
}

export default ToDoList;