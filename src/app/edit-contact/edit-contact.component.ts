import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  @Input() contactsAediter: Contact | null = null; 
  @Output() contactedited = new EventEmitter<Contact>();
  isFormVisible = true;
  failedAttempts = 0;
  isLockout = false;
  isSuccess = false;
  editerContact(f: NgForm) {
    if (this.isLockout || !this.contactsAediter) return; 

    if (f.valid) {
      const updatedContact = new Contact(
        f.value.nom,
        f.value.prenom,
        f.value.email,
        f.value.cin
      );
      this.contactedited.emit(updatedContact);
      this.isSuccess = true;
      this.isFormVisible = false;
      this.failedAttempts = 0;
    } else {
      this.failedAttempts++;
      if (this.failedAttempts >= 3) {
        this.isLockout = true;
      }
    }
  }
  resetLockout() {
    this.isLockout = false;
    this.failedAttempts = 0;
    this.isSuccess = false;
  }
  get safeContactsAediter(): Contact {
    return this.contactsAediter ?? new Contact('', '', '', '');
  }
}
