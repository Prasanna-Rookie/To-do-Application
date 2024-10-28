import { Component, ViewChild} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

taskArray = [{taskname:'workout',Deadline:'10/26/2024',iscomplete : false,date: new Date()}]

editIndex: number | null = null;

@ViewChild('formdata') formdata!: NgForm;

selectedTask = { taskname: '', Deadline: '', iscomplete: false, date: new Date() };


  onsubmit(form : NgForm){
    if(this.editIndex != null){
      this.taskArray[this.editIndex] ={
        taskname: form.value.taskName,
        Deadline: form.value.Deadline,
        iscomplete: this.taskArray[this.editIndex].iscomplete,
        date: this.taskArray[this.editIndex].date
      };
      this.editIndex = null;
      form.reset();
    }else{
      this.taskArray.push({
        taskname: form.value.taskName,
        Deadline: form.value.Deadline,
        iscomplete: false,
        date: new Date()
      });
      form.reset();
  }
  }

  onUpdateTask(index: number){
    const task = this.taskArray[index];
    this.editIndex = index; 
    this.formdata.setValue({
      taskName: task.taskname,
      Deadline: task.Deadline,
      iscomplete: task.iscomplete,
      date: task.date
    })
  }

  deletetask(index: number){
    this.taskArray.splice(index,1);
  }

  onchecked(index: number){
    console.log(this.taskArray);
    this.taskArray[index].iscomplete = !this.taskArray[index].iscomplete;
  }
}
