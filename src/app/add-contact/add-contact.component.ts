import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  @Output() addevent = new EventEmitter<Contact>();
  isFormVisible = false;
  isSuccess = false;
  afficheForm() {
    this.isFormVisible = true;
  }
  addContact(f: NgForm) {
    if (f.valid) {
      const c = new Contact(f.value.nom, f.value.prenom, f.value.email, f.value.cin);
      this.isFormVisible = false;
      this.isSuccess = true; 
      this.addevent.emit(c);
    }
  }
  resetSuccessMessage() {
    this.isSuccess = false; 
  }
}
