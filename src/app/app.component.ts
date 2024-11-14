import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionDeContact';
  contacts: Contact[] = []; 
  ajoutContact(c: Contact) {
    this.contacts.push(c);
  }

  index: number | null = null;
  recevoir(indexDeContact: number) {
    this.index = indexDeContact;
  }
  afficherDetails(index: number) {
    this.index = index; 
  }
}
