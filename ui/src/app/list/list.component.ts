import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/models/task.model';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
tasks : Task[] = [];
  router = inject(Router);
  constructor(private taskService : TaskService) {
  
  }
  ngOnInit(): void {
    this.taskService.getAll().subscribe(result => {
      this.tasks = result
    })
  }
  displayedColumns: string[] = ['id', 'title','description', 'createdAt', 'dueDate'];
  goToDetails(row : Task) {
    this.router.navigate(['/details', row.id]);
  }
  
  isOverdue(row: Task): boolean {
    // assuming row.dueDate is a Date (or ISO‑string convertible to Date)
    return !!row.dueDate && new Date(row.dueDate) < new Date();
  }
}