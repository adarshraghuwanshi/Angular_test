import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './person.service';
import { Person } from './person';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})
export class AppComponent {
  people: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(): void {
    this.personService.getPeople().subscribe(data => {
      this.people = data;
    }, error => {
      console.error('Error fetching people', error);
    });
  }
}
