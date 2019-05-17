import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('personData') public person;
  people:any;
  name:string;
  searchText:string="";
  @Output() public searchEvent = new EventEmitter;

  constructor(private persons: ServiceService) { }

  ngOnInit() {
    this.persons.getData()
      .subscribe(res => {
        this.people = res["People"];
        this.person = this.people[0];
      });
  }

  OnSearch(v) {
    this.searchEvent.emit(v);
  }

}
