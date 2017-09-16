import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

var TodoList: String[] = new Array();
var ToDoList: String[] = new Array();
var Historyy: String[] = new Array();
var historyy: String[] = new Array();
var TodoListB: Boolean[] = new Array();
var addinglist =false;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

ToDoList = TodoList;
Historyy = historyy;
addtodo(value): void {
  if(value.length>0){
    TodoList.push(value);
    TodoListB.push(false);
    ToDoList = TodoList;
  }
  }
  addedlist(value): void {
    if(value.length>0){
      historyy.push(value);
      Historyy = historyy;
    }
    addinglist=false;
  }
addlist(): void{
  addinglist=true;
}
getaddinglist(){
  return addinglist;
}
checked(todo): void{
  for (var i=TodoList.length-1; i>=0; i--) {
    if (TodoList[i]==todo.value) {
        TodoListB[i] = !TodoListB[i];
        console.log(TodoListB[i]);
        break;
    }
  }
}

getStyle(task) {
  for (var i=TodoListB.length-1; i>=0; i--) {
    if (TodoListB[i]==true) {
      return "line-through";
    }else{
      return "none";
    }
  }
}

getCheck(task) {
  for (var i=TodoListB.length-1; i>=0; i--) {
    if (TodoListB[i]==true) {
      return true;
    }else{
      return false;
    }
  }
}


deletetodo(value): void {
  for (var i=TodoList.length-1; i>=0; i--) {
    if (TodoList[i]==value) {
        TodoList.splice(i, 1);
        break;
    }
}
  ToDoList= TodoList;
}

openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}
// list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

}
