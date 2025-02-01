let toDoListArray = JSON.parse(localStorage.getItem('toDoList')) || [];
showToDo();

function addToDo() {
    const toDoListName = document.querySelector('.input-list');
    const toDoListDate = document.querySelector('.input-date');
    const toDoListSub = document.querySelector('.selection');

    const list = {
        name : toDoListName.value,
        date : toDoListDate.value,
        subject : toDoListSub.value
    }

    toDoListArray.push(list);

    toDoListName.value = '';
    toDoListDate.value = '';
    toDoListSub.value = list.subject;

    showToDo();
}

function showToDo() {
    let html = '';
    toDoListArray.forEach(function(value,index){
        html = html + `<div class="list">
        <div>${value.subject}</div>
        <div>${value.name}</div>
        <div>${value.date}</div>
        <div><button class= "delete-button" onclick="toDoListArray.splice(${index}, 1); showToDo();" >Done</button></div>
        </div>`;
    });
    document.querySelector('.show-list').innerHTML = html;
    
    localStorage.setItem('toDoList', JSON.stringify(toDoListArray));
}