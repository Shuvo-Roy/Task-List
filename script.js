//ui
let form=document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clarBtn = document.querySelector('#clear');
let filter = document.querySelector('#task-filter');
let taskInput = document.querySelector('#new_task');


//event listener
form.addEventListener('submit',newtask);

taskList.addEventListener('click',removeTask);
clear.addEventListener('click',clearTask);

//functions

function newtask(e){
    if(taskInput.value===''){
        alert('add a task')
    }else{
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value +""));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value='';
    }
    e.preventDefault();
}

function removeTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure")){
            let elem = e.target.parentElement;
            elem.remove();    
        }
        //console.log(e.target);
    }
}

function clearTask(e){
    taskList.innerHTML="";
}