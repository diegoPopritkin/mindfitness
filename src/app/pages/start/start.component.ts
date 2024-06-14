import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [MatButtonModule, HeaderComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  constructor(
    private router: Router
  ) {}

  goForm() {
    this.router.navigate(['form']);
  }

}
