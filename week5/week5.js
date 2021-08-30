const links = [
  { label: "Week 5 Notes and Questions",  url: "notes5.html"       },
  { label: "ToDo Project",                url: "ToDo-Project.html" },
  { label: "ToDo Project 2",              url: "2Do2.html"         },
  { label: "Group Activity",              url: "week5team.html"    }
]; 



function addToIndex() {
    for (let i = 0; i < links.length; i++ ) {
      var a = document.createElement("a");
      var linkText = document.createTextNode(links[i].label);
      a.appendChild(linkText);
      a.title = "This is the " + links[i].label + " link";
      a.href = links[i].url;
      var y = document.createElement("LI");
      y.appendChild(a);
      document.getElementById("indexList").appendChild(y);
    }
}

//To Do list
const tasks =  [];//Array.from(loadedTasks);
const taskId = ["T_one", "T_two", "T_three", "T_four", "T_five", "T_six"];
let loadedTasks = loadTasks();
let inputField = document.getElementById('task_input');
let addToDoButton = document.getElementById('addButton');           
//const tester = ["libro","com", "sem"];  //erase later




//************display tasks function **************
function displayTasks() {

  addToDoButton.addEventListener('click', function(){

    //elements
    var listItem = document.createElement('LI');
    var divItem  = document.createElement('DIV');
    var checkBox = document.createElement('input');
    var spanItem = document.createElement('span');
    var btnItem = document.createElement('button');

    //attributes
    var divAtt = document.createAttribute('class');
    divAtt.value ="taskList";
    divItem.setAttributeNode(divAtt);

    var inputAtt = document.createAttribute('type');
    var inputAtt2 = document.createAttribute('style');
    inputAtt.value = "checkbox";
    inputAtt2.value = "style='float: left;'";
    checkBox.setAttributeNode(inputAtt);
    checkBox.setAttributeNode(inputAtt2);

    var spanAtt = document.createAttribute("id");
    spanAtt.value = "T_one";
    spanItem.setAttributeNode(spanAtt);

    var btnAtt = document.createAttribute('style');
    btnAtt.value = "style='float: right;'";
    btnItem.setAttributeNode(btnAtt);
    
    spanItem.appendChild(btnItem);
    checkBox.appendChild(spanItem);
    divItem.appendChild(checkBox);
    listItem.appendChild(divItem);
    document.getElementById("tasks").appendChild(listItem);
    //displayTasks();

    //<li><div class="taskList"><input type="checkbox" style="float: left;" >
  //<span id="T_one"></span><button style="float: right;">X</button></div></li>
    
    
    
    
    /*
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    inputField.focus();
    paragraph.addEventListener('click', function() {
      if (paragraph.style.textDecoration == "line-through") {
        paragraph.style.textDecoration = 'none';
        paragraph.style.color = "";
      }
      else {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "lightgray";
      }
    })
    paragraph.addEventListener('dblclick', function() {
      paragraph.style.textDecoration = "line-through";
      toDoContainer.removeChild(paragraph);
    })  */
  })

  //for (let i = 0; i < tasks.length; i ++){
  //document.getElementById(taskId[i]).innerHTML = tasks[i];    //This goes into the span
  //document.getElementById("tasksLeft").innerHTML = tasks.length;//tasks.length;
  //}

}


//***************Load tasks function***************
function loadTasks() {
  let addedTasks = localStorage.getItem("toDoTasks");
  let savedTasks = JSON.parse(addedTasks);

  return savedTasks;
}

//*************ADDTASKS ***************/
function addTask() {
  
  let newTask = document.getElementById("task_input").value;
  let addTaskToArray = tasks.push(newTask);
  inputField.value = "";
  inputField.focus();
  displayTasks();
  //localStorage.setItem("toDoTasks", JSON.stringify(tasks));

//************ Test Display at bottom of page ******* */  
  let newArray = tasks;                                  //test erase
  document.getElementById("test").innerHTML = newArray;   //test erase

}



function completeTask() {

}

function eraseTask() {

}






/*
//call the load tasks function
loadTasks();  



//inputs
const inputBox = document.querySelector(".taskInput input");
const addButton = document.querySelector(".taskInput button");
const todoList = document.querySelector(".tasks");

//add task on click
addButton.onclick = addTask();

//add task function
function addTask() {
  let userInput = inputBox.nodeValue;
  let getLocalStorageData = localStorage.getItem("New Todo")
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  
  }
  listArray.push(userEnteredValue); //
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  loadTasks(); 
}

//load tasks function
function loadTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}
*/

//body
/*
<body>

  <div id="toDo">
    <h1>To-dos</h1>
    <div id="innerTodos">
      <ul id="tasks">
        <li id="first">Groceries</li>
        <li id="second"></li>
        <li id="third"></li>
        <li id="fourth"></li>
      </ul>
    </div>
    <div class="tasksLeftDiv">
      <span class="tasksLeft"></span><span> tasks left</span>
      <button onclick="loadTasks()">Load</button>
      <button>All.</button><button>Active.</button><button>Completed</button>
    </div>
    <br>
    <div class="taskInput">
      <input id="task_input" type="text" placeholder="Add to list"></input>
      <button onclick="addTask()">+</button>
    </div>
  </div>
</body>



*/


