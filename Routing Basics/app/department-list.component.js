"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var DepartmentListComponent = (function () {
    function DepartmentListComponent(route, router) {
        this.route = route;
        this.router = router;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "Node" },
            { "id": 3, "name": "MongoDB" },
            { "id": 4, "name": "Ruby" },
            { "id": 5, "name": "Bootstrap" }
        ];
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.selectedId = id;
        });
    };
    DepartmentListComponent.prototype.isSelected = function (department) { return department.id === this.selectedId; };
    DepartmentListComponent.prototype.onSelect = function (department) {
        this.router.navigate(['/departments', department.id]);
        // Relative Path
        // this.router.navigate([department.id], { relativeTo: this.route });
    };
    DepartmentListComponent = __decorate([
        core_1.Component({
            selector: 'department-list',
            template: "<h3>Department List</h3>\n             <ul class=\"items\">\n                <li *ngFor=\"let department of departments\" [class.selected]=\"isSelected(department)\" (click)=\"onSelect(department)\">\n                   <span class=\"badge\">{{department.id}}</span> {{department.name}}\n                </li>\n             </ul>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map