//get the id from index.html
const taskManager = new TaskManager(0);
console.log(taskManager.currentId);
taskManager.addTask('farahnaz','student', 'sarika', 'to do', '23/09/2021');
console.log(taskManager.tasks);

const  myName = document.querySelector('#myName');
const  floatingTextarea2 = document.querySelector('#floatingTextarea2');
const  assign = document.querySelector('#assign');
const  status1 = document.querySelector('#status');
const  date = document.querySelector('#date');
let validationFail = 1;
 const submit = document.querySelector('#submit');
 
 
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
     clearFormFields();
      //$("#exampleModal").modal("hide");
    }
      
     
  }

submit.addEventListener('click',validFormFieldInput);


