import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../../shared/model/Restaurant';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FooterComponent, FontAwesomeModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  resturantList = Restaurant;
  restaurant: any;
  faHeart = faHeart;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.restaurantList);
    const restaurantId: string | null = this.route.snapshot.paramMap.get('id');
    const resaurantItem = this.resturantList.find(
      (el) => el.id.toString() === restaurantId
    );
    this.restaurant = resaurantItem;
    console.log(this.restaurant);
  }
}
