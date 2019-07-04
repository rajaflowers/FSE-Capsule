import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { log } from 'util';
import { Task } from '../task';
import { Router } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})

export class ViewTaskComponent implements OnInit {
  public _taskService!: TaskService;
  public availableTasks!: Task[];
  public availableProjects!: Project[];
  public selectedProjectId: number = 0;
  public taskSearch: TaskSearch = new TaskSearch();
  constructor(private taskService: TaskService, private router: Router) {
    this._taskService = taskService;
  };

  ngOnInit() {
    this.searchProjects();
  }
  callService() {
    this._taskService.getAllTasks().subscribe(
      lstResults => {
        let result: Task[] = lstResults;
        if (this.taskSearch.TaskName !== "") {
          result = result.filter(t => t.Name.includes(this.taskSearch.TaskName));
        }
        if (this.selectedProjectId !== 0) {
          result = result.filter(t => t.ProjectId === this.selectedProjectId);
        }
        //if (this.taskSearch.ParentName !== "") {
        //  result = result.filter(t => t.ParentTaskName.includes(this.taskSearch.ParentName));
        //}
        result = result.filter(t => t.Priority >= this.taskSearch.PriorityFrom && t.Priority <= this.taskSearch.PriorityTo);

        this.availableTasks = result;
      }
    );
    console.log(this.availableTasks);
  }

  searchProjects() {
    this._taskService.getAllProjects().subscribe(
      lstResults => {
        let result: Project[] = lstResults;
        this.availableProjects = result;
      }
    );
  }

  endTask(task: Task) {
    this._taskService.endTask(task.TaskId).subscribe(
      result => {
        alert('Task ended successfully.');
        for (var i = 0; i < this.availableTasks.length; i++) {
          if (this.availableTasks[i] === task) {
            this.availableTasks.splice(i, 1);
          }
        }
      }
    );
  }
  updateTask(task: Task) {
    this.router.navigate(['/add-task'], { queryParams: { TaskId: task.TaskId } });
  }

  SortByName() {
    this._taskService.getAllTasks().subscribe(
      lstResults => {
        let result: Task[] = lstResults;
        result = result.sort((a, b) => a.Name.toUpperCase() > b.Name.toUpperCase() ? 1 : -1);
        this.availableTasks = result;
      }
    );
  }

  SortByPriority() {
    this._taskService.getAllTasks().subscribe(
      lstResults => {
        let result: Task[] = lstResults;
        result = result.sort((a, b) => a.Priority > b.Priority ? 1 : -1);
        this.availableTasks = result;
      }
    );
  }

  SortByStartDate() {
    this._taskService.getAllTasks().subscribe(
      lstResults => {
        let result: Task[] = lstResults;
        result = result.sort((a, b) => a.StartDate > b.StartDate ? 1 : -1);
        this.availableTasks = result;
      }
    );
  }

  SortByEndDate() {
    this._taskService.getAllTasks().subscribe(
      lstResults => {
        let result: Task[] = lstResults;
        result = result.sort((a, b) => a.EndDate > b.EndDate ? 1 : -1);
        this.availableTasks = result;
      }
    );
  }
}


export class TaskSearch {
  TaskName: string = "";
  ParentName: string = "";
  PriorityFrom: number = 0;
  PriorityTo: number = 30;
  StartDate: string = new Date().toISOString().split('T')[0];
  EndDate: string = new Date().toISOString().split('T')[0];
}
