//creat createtaskhtml 
const createTaskHtml = (myName, floatingTextarea2, assign, status1, date, id ) => {
     let todayDate = new Date();
     let formatDate = (todayDate.getDate() +  "/" +(todayDate.getMonth()+1 )+ "/" + todayDate.getFullYear());
    const html = ` 
    
    <div class="mt-3 me-2 middle card ${status1 === "Done"? "border-success text-success" : status1 === "In Progress" ? "border-warning text-warning": status1 === "Review" ? "border-danger text-danger": "border-info text-info"} " style="width: 20rem;" data-task-id="${id}" >
      <div class=" h-100">

      <div class="card-body">
        <h5 class="card-text fw-bold d-inline">Task Name : </h5>
        <p class="d-inline">${myName}</p>
        <p class="card-text mt-4"> <strong>Description :</strong> </p>
        <p class="card-text">${floatingTextarea2}</p>
        <p class="card-text"><strong>Assigned To :</strong> ${assign} </p>
        <p class="card-text"><strong>Status :</strong> ${status1} </p>
        <p class="card-text"><strong>Date :</strong> ${date}</p>       
        
        <div class="d-grid gap-2 d-md-flex justify-content-center">
        <button  class="btn btn-primary bg-success done-button ${status1 === "Done" ? "invisible" : "visible"}"
         type="button" id="done">Done</button>
          <button class="btn btn-primary me-md-2  edit-button" type="button">Edit</button>
          <button class="btn btn-primary bg-danger delete-button" type="button">Delete</button>
          
        </div>
        </div>
        </div>
        </div>`;
    return html;

}

//create taskManager
class TaskManager {
    constructor(currentId = 0){
        this._tasks = [];
        this.currentId = currentId;
        
    }

    //method to get task ID
    getTaskById(taskId){
        let foundTask;
        for(let i=0; i<this.tasks.length; i++){
            let task = this.tasks[i];
            if(task.id === taskId){
                foundTask = task;
            }
         }
         return foundTask;
    }


    // function to delete task

    delete(taskId){
        const newTasks = [];
       this._tasks.forEach(currentTask =>{
        if(currentTask.id !== taskId ){
            newTasks.push(currentTask);
         }
     this._tasks = newTasks;
       });
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

    //function to Update task
    updateTask(edit_myName, edit_floatingTextarea2, edit_assign, edit_status, edit_date, edit_taskId){
            console.log('inside update') 
       for(let i=0; i<this._tasks.length; i++){
            console.log('outside if'+ this._tasks[i].id + '==' + edit_taskId )
            if(this._tasks[i].id == edit_taskId ) {
                console.log('inside if') 
                // console.log('inside if'+ currentTask.id + '==' + edit_taskId )
                    this._tasks[i].myName = edit_myName,
                    this._tasks[i].floatingTextarea2 = edit_floatingTextarea2,
                    this._tasks[i].assign = edit_assign,
                    this._tasks[i].status1 = edit_status,
                    this._tasks[i].date = edit_date 
           
            }

    }
}


    get tasks(){
        return this._tasks;
    }

    set tasks(_tasks){
        return this._tasks;
    }


    //add render method

    render(){
       
        let tasksHtmlListToDo = [];
        let tasksHtmlListReview = [];
        let tasksHtmlListInProgress = [];
        let tasksHtmlListDone = [];

    //const doneButton = document.querySelector(".done-button");

    for(let i=0; i<this.tasks.length; i++){
        let currentTask = this.tasks[i];
        let date = new Date(currentTask.date);
        let formatDate = (date.getDate() +  "/" +(date.getMonth()+1 )+ "/" + date.getFullYear()); 
        let taskHtml = createTaskHtml(
            currentTask.myName,
            currentTask.floatingTextarea2, 
            currentTask.assign, 
            currentTask.status1, 
            formatDate, 
            currentTask.id
            );


        // tasksHtmlList.push(taskHtml);
        // let newTaskhtml = tasksHtmlList.join('\n');
    
        if (currentTask.status1 === "To Do") {
            tasksHtmlListToDo.push(taskHtml);
          } else if (currentTask.status1 === "Review") {
            tasksHtmlListReview.push(taskHtml);
          } else if (currentTask.status1 === "Done") {
            tasksHtmlListDone.push(taskHtml);
          } else if (currentTask.status1 === "In Progress") {
            tasksHtmlListInProgress.push(taskHtml);
          }
    
    }// for loop ends here

    const to_do_html = document.querySelector("#to_do_tasks");
    to_do_html.innerHTML = tasksHtmlListToDo;

    const review_html = document.querySelector("#review_tasks");
    review_html.innerHTML = tasksHtmlListReview;

    const done_html = document.querySelector("#done_tasks");
    done_html.innerHTML = tasksHtmlListDone;

    const progress_html = document.querySelector("#progress_tasks");
    progress_html.innerHTML = tasksHtmlListInProgress;
    
    }


    // Save Method start
 save(){
    console.log('inside save')
    const tasksJson = JSON.stringify(this.tasks);

    localStorage.setItem("tasks",tasksJson);
    console.log(localStorage);
    const currentId = String(this.currentId);
    localStorage.setItem('currentId',currentId);
 }
 // load Method start
 load(){
 
    if(localStorage.getItem('tasks')){
       // console.log('inside if')
        let tasksJson = localStorage.getItem('tasks');
        console.log(tasksJson);
       this._tasks = JSON.parse(tasksJson);
       console.log(this._tasks)

    }
    if(localStorage.getItem('currentId')){
        let currentId = localStorage.getItem('currentId');
       this.currentId = Number(currentId);
    }

 }
 //delete button
 delete(taskId){
    const newTasks = [];
   this._tasks.forEach(currentTask =>{
    if(currentTask.id !== taskId ){
        newTasks.push(currentTask);
     }
 this._tasks = newTasks;
   });
 }
 //Edit button

 editTask(taskId){
    console.log(`edit task ID`+taskId);
    $('#edit-exampleModal').modal('show');
    const edit_myName = document.querySelector("#edit_myName")
    const edit_taskId = document.querySelector("#edit_taskId")
    const edit_floatingTextarea2 = document.querySelector("#edit_floatingTextarea2");
    const edit_assign = document.querySelector("#edit_assign");
    const edit_status = document.querySelector("#edit_status");
    const edit_date = document.querySelector("#edit_date");
    for (let i = 0; i< this._tasks.length; i++){
        const task = this._tasks[i];
        if(task.id === taskId){
            edit_taskId.value = taskId;
            edit_myName.value = task.myName;
            edit_floatingTextarea2.value =task.floatingTextarea2
            edit_assign.value = task.assign;
            edit_status.value = task.status1;
            edit_date.value = task.date;
            }
        }
        // return task;            
}


 //edit method start

 editTask(taskId){
    console.log(`edit task ID`+taskId);
    $('#edit-exampleModal').modal('show');
    const edit_myName = document.querySelector("#edit_myName")
    const edit_floatingTextarea2 = document.querySelector("#edit_floatingTextarea2");
    const edit_assign = document.querySelector("#edit_assign");
    const edit_status = document.querySelector("#edit_status");
    const edit_date = document.querySelector("#edit_date");


    for (let i = 0; i< this._tasks.length; i++){
        const task = this._tasks[i];

        if(task.id === taskId){
            edit_taskId.value = taskId;
            edit_myName.value = task.myName;
            edit_floatingTextarea2.value =task.floatingTextarea2
            edit_assign.value = task.assign;
            edit_status.value = task.status1;
            edit_date.value = task.date;
            }
        }
       // return task;            
}

 

 

}






