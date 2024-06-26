import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/model/Restaurant';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss',
})
export class RestaurantsComponent implements OnInit {
  restaurantList = Restaurant;
  faHeart = faHeart;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.restaurantList);
  }

  getToMenu(menuId: number) {
    const link = ['/menu', menuId];
    this.router.navigate(link);
  }
}
