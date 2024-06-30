import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


import { CommonModule } from '@angular/common';


import { Person } from './person';
import { HttpClientModule } from '@angular/common/http';
import axios from "axios";
import { PeopleListComponent } from './people-list/people-list.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { EditPersonFormComponent } from './edit-person-form/edit-person-form.component';


 


 

@Component({
  
 
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, PeopleListComponent, AddPersonFormComponent, EditPersonFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
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

  async addPerson(): Promise<void> {
    const newPerson: Person = {
      name: this.newName,
      age: this.newAge,
      gender: this.newGender,
      mobile: this.newMobile
    };

    try {
      const response = await axios.post(this.apiUrl, newPerson);
      this.people.push(response.data);
      this.resetForm();
    } catch (error) {
      console.error('Error adding person:', error);
    }
  }

 

  async editPerson(): Promise<void> {
    const newPerson: Person = {
      name: this.newName,
      age: this.newAge,
      gender: this.newGender,
      mobile: this.newMobile
    };

    try {
      const response = await axios.put(this.apiUrl, newPerson);
      const updatedPersonIndex = this.people.findIndex(p => p.name === newPerson.name);
      if (updatedPersonIndex !== -1) {
        this.people[updatedPersonIndex] = newPerson; // Update the person in the local array
      }
      this.resetForm();
    } catch (error) {
      console.error('Error adding person:', error);
    }
  }

  resetForm(): void {
    this.newName = '';
    this.newAge = null;
    this.newGender = '';
    this.newMobile = '';
  }

}