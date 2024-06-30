import { Component } from '@angular/core';
import axios from "axios";
import { Person } from '../person';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  people: Person[] = [];
  private apiUrl = 'http://localhost:3000/person';

  newName: string = '';
  newAge: number | null = null;
  newGender: string = '';
  newMobile: string = '';



  ngOnInit(): void {
    this.fetchPeople();
  }

  async fetchPeople() {
    try {
      const people = await axios.get(this.apiUrl, {
       
      });
      this.people = people.data; // Assign the fetched data to the people variable
    } catch (error) {
      console.error('Error fetching people:', error);
    }
  }
  async deletePerson(name: string): Promise<void> {
    try {
      await axios.delete(this.apiUrl, {
        data: { name: name }
      });
      this.people = this.people.filter(person => person.name !== name); // Update the local state
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  }

}
