import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input('personData') public person;
  people:any;
  ratingList:boolean[] = [true, true, true, true, true];
  setStar;
  rate;
  constructor(private persons: ServiceService) { }

  ngOnInit() {
    this.persons.getData()
      .subscribe(res => {
        this.people = res["People"];
        this.person = this.people[0];
    });
  }

  

}
