import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/models/task.model';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id!: string;
  constructor(private route: ActivatedRoute , private service : TaskService) {}
  task! : Task;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.service.getById(Number.parseInt(this.id)).subscribe(result => {
      this.task = result;
    })
  }
}
