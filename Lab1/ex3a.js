//3a
let tasks = ["work", "eat", "study"]; //Array of "task" strings

//3b
//add task arrow function
let addTask = (task)=> {
    tasks.push(task);
    console.log(task + " has been added to my tasks.")
    return tasks.length
}

//List all tasks arrow function
let listAllTasks=()=>{
    tasks.forEach((element) =>{
        console.log(element);
    });
}
// arrow function that deletes a task from the array
let deleteTask = (task)=> {
    let index = tasks.indexOf(task);
    if(index > -1){
    tasks.splice(index, 1);
    console.log(task + " has been deleted from my tasks") // displays when successfully deleted
    }else{
        console.log(task +" not found in my Tasks.") // displays if task doesnt exist or cant be deleted
    }

    
    return tasks.length;
}

//Adds sleep to task list
addTask("sleep");
//lists all tasks
listAllTasks();
//Removes eat from task list
deleteTask("eat");
//lists updated task list
listAllTasks();


