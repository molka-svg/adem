import { Component } from '@angular/core';

@Component({
  selector: 'app-lock-out',
  templateUrl: './lock-out.component.html',
  styleUrls: ['./lock-out.component.css']
})
export class LockOutComponent {
  lockoutMessage = 'Vous avez atteint le nombre maximal de tentatives. Essayez à nouveau plus tard.';
}
