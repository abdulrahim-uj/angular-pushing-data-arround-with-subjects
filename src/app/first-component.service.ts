import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstComponentService {

  constructor() { }

  personsChanged = new Subject<string[]>();
  persons: string[] = ['Ubaidulla K', 'Jubairiya K', 'AbdulRahim K', 'AbdulVahid K', 'Suhaila K']


  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons)
    this.personsChanged.next(this.persons);
  }

  removePerson(pName: string) {
    this.persons = this.persons.filter(pData => {
      return pData !== pName;
    });
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }
}
