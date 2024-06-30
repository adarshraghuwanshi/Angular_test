import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


import { CommonModule } from '@angular/common';


import { Person } from '../person';
import { HttpClientModule } from '@angular/common/http';
import axios from "axios";
@Component({
  selector: 'app-add-person-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './add-person-form.component.html',
  styleUrl: './add-person-form.component.css'
})
export class AddPersonFormComponent {
  people: Person[] = [];
  private apiUrl = 'http://localhost:3000/person';

  newName: string = '';
  newAge: number | null = null;
  newGender: string = '';
  newMobile: string = '';

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

  resetForm(): void {
    this.newName = '';
    this.newAge = null;
    this.newGender = '';
    this.newMobile = '';
  }
}
