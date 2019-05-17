import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  people:any[];
  active:boolean[]=[];
  filteredPeople:any[] = this.people;
  text:string;
  @Output() public valueChange = new EventEmitter();
  @Input('searchData') public searchText:string;

  constructor(private persons: ServiceService) { }

  ngOnInit() {
    this.persons.getData()
      .subscribe(res => {
        this.people = res["People"];
        this.active[0] = true;
      });
  }

  onSelect(val, i){
    this.valueChange.emit(val);
    this.active = [false];
    this.active[i] = true;
  }
}
