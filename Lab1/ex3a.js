//3a
let tasks = ["work", "eat", "study"]; //Array of strings

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
//
let deleteTask = (task)=> {
    let index = tasks.indexOf(task);
    if(index > -1){
    tasks.splice(index, 1);
    console.log(task + " has been deleted from my tasks")
    }else{
        console.log(task +" not found in my Tasks.")
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


