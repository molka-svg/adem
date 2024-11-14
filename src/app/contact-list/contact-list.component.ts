import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() index = new EventEmitter<number>();
  afficherLaliste = false;
  afficheListe() {
    this.afficherLaliste = true; 
  }
  edit(i: number) {
    this.index.emit(i); 
  }
  select(i: number) {
    this.index.emit(i);
  }
}
