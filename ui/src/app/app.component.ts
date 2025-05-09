import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/models/task.model';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskService]
})
export class AppComponent implements OnInit {
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
}
