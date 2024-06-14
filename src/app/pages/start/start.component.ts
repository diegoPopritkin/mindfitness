import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [MatButtonModule, HeaderComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

}
