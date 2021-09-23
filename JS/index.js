//get the id from index.html
// const taskForm = document.querySelector('#taskForm');

// taskForm.addEventListener('submit', (event)=> {



  
   const taskManager = new TaskManager(0);
   console.log(taskManager.addTask('farahnaz','student', 'sarika', 'to do', '23/09/2021'));
  

  // taskList.addTask(myName.value, floatingTextarea2.value, assign.value, status1.value, date.value);
  // console.log(taskList.tasks);
 const  myName = document.querySelector('#myName');
 const  floatingTextarea2 = document.querySelector('#floatingTextarea2');
 const  assign = document.querySelector('#assign');
 const  status1 = document.querySelector('#status');
 const  date = document.querySelector('#date');
 const submit = document.querySelector('#submit');


 
const validFormFieldInput = () => {

    //checking task name//
    if (myName.value.length > 5) {
        myName.classList.add("is-valid");
        myName.classList.remove("is-invalid");
      } else {
        myName.classList.add("is-invalid");
        myName.classList.remove("is-valid");
        // validationFail++;
      }

    //end task name

   
    

    //check description//
    if ( floatingTextarea2.value.length > 5) {
        floatingTextarea2.classList.add("is-valid");
        floatingTextarea2.classList.remove("is-invalid");
      } else {
        floatingTextarea2.classList.add("is-invalid");
        floatingTextarea2.classList.remove("is-valid");
        // validationFail++;
      }
    //end discription//

    //check assign//
    if (assign.value.length > 5) {
        assign.classList.add("is-valid");
        assign.classList.remove("is-invalid");
      } else {
        assign.classList.add("is-invalid");
        assign.classList.remove("is-valid");
        // validationFail++;
      }
    //end assign//
    
     //check status//
     if (status1.value !== 'Choose') {
        status1.classList.add("is-valid");
        status1.classList.remove("is-invalid");
      } else {
        status1.classList.add("is-invalid");
        status1.classList.remove("is-valid");
        // validationFail++;
      }
     //end status//

     //check due date
    //  let currentTime = Date.now();
  // validate for date
    
//   $('.datepicker').datepicker({ 
//     startDate: new Date()
// });
   

  //

     if (date.value){
        date.classList.add("is-valid");
        date.classList.remove("is-invalid");
      } else {
        date.classList.add("is-invalid");
        date.classList.remove("is-valid");
        // validationFail++;
      }
     //end due date

}

submit.addEventListener('click',validFormFieldInput);

