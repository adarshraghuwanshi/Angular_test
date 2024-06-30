import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


import { CommonModule } from '@angular/common';


import { Person } from '../person';
import { HttpClientModule } from '@angular/common/http';
import axios from "axios";

@Component({
  selector: 'app-edit-person-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule,  EditPersonFormComponent],
  templateUrl: './edit-person-form.component.html',
  styleUrl: './edit-person-form.component.css'
})
export class EditPersonFormComponent {
  people: Person[] = [];
  private apiUrl = 'http://localhost:3000/person';

  newName: string = '';
  newAge: number | null = null;
  newGender: string = '';
  newMobile: string = '';



  
 
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

