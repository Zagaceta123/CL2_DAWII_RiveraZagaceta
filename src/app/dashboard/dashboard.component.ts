import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService

  
  ){

  }

  irHome():void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irPregunta1():void{
    this.router.navigate(["pregunta1"], {relativeTo: this.route})
  }
  irPregunta2():void{
    this.router.navigate(["pregunta2"], {relativeTo: this.route})
  }
  irPregunta3():void{
    this.router.navigate(["pregunta3"], {relativeTo: this.route})
  }

}
