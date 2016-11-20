import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'department-list',
  template: `<h3>Department List</h3>
             <ul class="items">
                <li *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
                   <span class="badge">{{department.id}}</span> {{department.name}}
                </li>
             </ul>
  `
})
export class DepartmentListComponent { 
  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
  this.route.params.subscribe((params: Params) => {
     let id = parseInt(params['id']); 
     this.selectedId = id;
   });
}
  isSelected(department) { return department.id === this.selectedId; }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
   // Relative Path
   // this.router.navigate([department.id], { relativeTo: this.route });
    
  }
}
