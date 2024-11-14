import { Component, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent {
  @Input() contact: Contact | null = null;
}
