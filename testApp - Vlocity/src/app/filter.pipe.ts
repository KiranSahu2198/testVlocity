import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(people: any, searchText?: any): any {

    if(!people)return null;
    if(!searchText)return people;
    return people.filter(function(person){
      return person.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
