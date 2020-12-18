import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magenta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynma' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma'},
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  /*
    Override the genId methods to ensure that a hero always has an id.
    If the heroes array is empty,
    the method below return the inital number (11).
    if the heroes array is not empty, the method below return the highest
    hero id + 1
  */
 genId(heroes: Hero[]): number {
   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
 }
}
