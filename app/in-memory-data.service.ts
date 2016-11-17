import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Rice' },
      { id: 12, name: 'Narco Baron' },
      { id: 13, name: 'Bombastick' },
      { id: 14, name: 'Celebrity' },
      { id: 15, name: 'Magenta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynamo' },
      { id: 18, name: 'Dr FAQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}