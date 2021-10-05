//get the id from index.html
const taskManager = new TaskManager(0);

taskManager.load();
taskManager.render();


const  myName = document.querySelector('#myName');
const  floatingTextarea2 = document.querySelector('#floatingTextarea2');
const  assign = document.querySelector('#assign');
const  status1 = document.querySelector('#status');
const  date = document.querySelector('#date');
let validationFail = 0;
const submit = document.querySelector('#submit');
const doneButton = document.querySelector(".done-button");

//edit Modal variable
const edit_myName = document.querySelector('#edit_myName');
const edit_floatingTextarea2 = document.querySelector('#edit_floatingTextarea2');
const edit_assign = document.querySelector('#edit_assign');
const edit_status = document.querySelector('#edit_status');
const edit_date = document.querySelector('#edit_date');
const Update = document.querySelector('#Update');
 
 var today = new Date().toISOString().split('T')[0];
 //console.log("today" + today);
 date.setAttribute("min",today);
 
const validFormFieldInput = (event) => {
  
event.preventDefault();
  const clearFormFields = () => {
    myName.value = "";
    floatingTextarea2.value = "";
    assign.value = "";
    status1.value = "";
    date.value = "";
    myName.classList.remove("is-valid");
    floatingTextarea2.classList.remove("is-valid");
    assign.classList.remove("is-valid");
    status1.classList.remove("is-valid");
    date.classList.remove("is-valid");
  };


 


    //checking task name//
    if (myName.value.length > 5) {
        myName.classList.add("is-valid");
        myName.classList.remove("is-invalid");
      } else {
        myName.classList.add("is-invalid");
        myName.classList.remove("is-valid");
         validationFail++;
      }

    //end task name

      

    //check description//
    if ( floatingTextarea2.value.length > 5) {
        floatingTextarea2.classList.add("is-valid");
        floatingTextarea2.classList.remove("is-invalid");
      } else {
        floatingTextarea2.classList.add("is-invalid");
        floatingTextarea2.classList.remove("is-valid");
         validationFail++;
      }
    //end discription//



    //check assign//
    if (assign.value.length > 5) {
        assign.classList.add("is-valid");
        assign.classList.remove("is-invalid");
      } else {
        assign.classList.add("is-invalid");
        assign.classList.remove("is-valid");
         validationFail++;
      }
    
      //end assign//
    

     //check status//
     if (status1.value !== 'Choose') {
        status1.classList.add("is-valid");
        status1.classList.remove("is-invalid");
      } else {
        status1.classList.add("is-invalid");
        status1.classList.remove("is-valid");
         validationFail++;
      }
     //end status//

     
      // check due date

     if (date.value){
        date.classList.add("is-valid");
        date.classList.remove("is-invalid");
      } else {
        date.classList.add("is-invalid");
        date.classList.remove("is-valid");
         validationFail++;
      }
     //end due date

     
     if (validationFail > 0) {
      validationFail = 0;
      //clearFormFields();
      return;
    } else {
      // Push the valid input into our tasks array
      console.log("Task Name :" + myName.value);
      console.log("Task Description :" + floatingTextarea2.value);
      console.log("Task Assigned To :" + assign.value);
      console.log("Task Due Date :" + status1.value);
      console.log("Task Status:" + date.value);
      taskManager.addTask(
        myName.value,
        floatingTextarea2.value,
        assign.value,
        status1.value,
        date.value
      );
      taskManager.save();
      taskManager.render();
      clearFormFields();
      $("#exampleModal").modal("hide");
    }
      
     
  }

  //editValidFormFieldInput function
  const editValidFormFieldInput = event => {
    event.preventDefault();
     //checking task name//
     if (edit_myName.value.length > 5) {
      edit_myName.classList.add("is-valid");
      edit_myName.classList.remove("is-invalid");
    } else {
      edit_myName.classList.add("is-invalid");
      edit_myName.classList.remove("is-valid");
       validationFail++;
    }

  //end task name
  //check description//
  if ( edit_floatingTextarea2.value.length > 5) {
    edit_floatingTextarea2.classList.add("is-valid");
    edit_floatingTextarea2.classList.remove("is-invalid");
  } else {
    edit_floatingTextarea2.classList.add("is-invalid");
    edit_floatingTextarea2.classList.remove("is-valid");
     validationFail++;
  }
//end discription//

 //check assign//
 if (edit_assign.value.length > 5) {
  edit_assign.classList.add("is-valid");
  edit_assign.classList.remove("is-invalid");
} else {
  edit_assign.classList.add("is-invalid");
  edit_assign.classList.remove("is-valid");
   validationFail++;
}

//end assign//

//check status//
if (edit_status.value !== 'Choose') {
  edit_status.classList.add("is-valid");
  edit_status.classList.remove("is-invalid");
} else {
  edit_status.classList.add("is-invalid");
  edit_status.classList.remove("is-valid");
   validationFail++;
}
//end status//


      // check due date

      if (edit_date.value){
        edit_date.classList.add("is-valid");
        edit_date.classList.remove("is-invalid");
      } else {
        edit_date.classList.add("is-invalid");
        edit_date.classList.remove("is-valid");
         validationFail++;
      }
     //end due date

 
     if (validationFail > 0) {
      validationFail = 0;
      //clearFormFields();
      return;
    } else {
      // Push the valid input into our tasks array
      taskManager.updateTask(
        edit_myName.value,
        edit_floatingTextarea2.value,
        edit_assign.value,
        edit_status.value,
        edit_date.value,
        edit_taskId.value
  
      );
      taskManager.save();
      taskManager.render();
      // clearFormFields();
      $("#edit-exampleModal").modal("hide");
    }
      
     
  }








  

 submit.addEventListener('click',validFormFieldInput);
 

 

 const taskList = document.querySelector(".task-list");

 taskList.addEventListener('click',event=>{
   if(event.target.classList.contains("done-button")){
    const parentTask =
    event.target.parentElement.parentElement.parentElement.parentElement;
    console.log(parentTask);

    const taskId = Number(parentTask.dataset.taskId);
    
    console.log(parentTask.dataset);

    let task = taskManager.getTaskById(taskId);
    
    
    task.status1 = 'Done';
    
    taskManager.render();
    
   }


   //edit task 
   if(event.target.classList.contains("edit-button")){
    const parentTask =
    event.target.parentElement.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    let task = taskManager.getTaskById(taskId);
    let taskEdit = taskManager.editTask(taskId);
        
   }


   taskManager.save();
   taskManager.render();

   //delete task 
    if(event.target.classList.contains("delete-button")){
      const parentTask =
    event.target.parentElement.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    //let task = taskManager.getTaskById(taskId);
    taskManager.delete(taskId);
    }
    // taskManager.save();
    // taskManager.render();
    if(event.target.classList.contains("edit-button")){
      const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;
      const taskId = Number(parentTask.dataset.taskId);
      taskManager.editTask(taskId);
      let task = taskManager.getTaskById(taskId);
   //Update button
   Update.addEventListener('click', editValidFormFieldInput);
     
    }
    taskManager.save();
    taskManager.render();
   
 });

 
 


