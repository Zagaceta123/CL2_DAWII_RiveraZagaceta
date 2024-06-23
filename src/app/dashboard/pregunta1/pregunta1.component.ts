import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule, MatFormFieldModule, MatInputModule,MatCardModule],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component {

}
