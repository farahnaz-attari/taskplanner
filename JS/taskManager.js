class TaskManager {
    constructor(currentId = 0){
        this._tasks = [];
        this.currentId = currentId;
    }
    
    //function to add task
    addTask(myName, floatingTextarea2, assign, status1, date){
             
        const newTask = {
            id: this.currentId++,
            myName: myName,
            floatingTextarea2: floatingTextarea2,
            assign: assign,
            status1: status1,
            date: date
        };
        this._tasks.push(newTask);


    }

    // get tasks(){
    //     return this._tasks;
    // }

}



// taskList.addTask(myName.value, floatingTextarea2.value, assign.value, status1.value, date.value);
// console.log(taskList.tasks);


