import { Component } from '@angular/core';
import { FunctionningComponent } from '../../components/functionning/functionning.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RestaurantsComponent } from '../../components/restaurants/restaurants.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FunctionningComponent,
    RestaurantsComponent,
    FooterComponent,
    MenuComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
