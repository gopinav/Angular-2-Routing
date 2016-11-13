import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({  
  template: `<h3>You selected department with id = {{departmentId}}</h3>
            
  `
})
export class DepartmentDetailComponent implements OnInit { 
  public departmentId;
  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id']);
    this.departmentId = id;
  }
}
