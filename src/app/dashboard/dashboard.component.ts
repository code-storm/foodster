import { Component, OnInit } from '@angular/core';
import { OrderService } from '../utils/order.service';
import { FoodItem } from '../utils/order.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  foodItems: FoodItem[] = [];
  searchedFoodItems: FoodItem[] = [];
  cartItems: FoodItem[] = [];
  searchText: string = '';
  activeFilter = false;
  activePromo = false;
  promocode: string = '';
  currentPromotion = {
    promo: "HAPPYHOURS",
    value: 50
  }

  ngOnInit() {
    this.getFoodMenu();
  }

  getFoodMenu(): void {
    this.orderService.getAllItems()
      .subscribe(data => {
        data.forEach(item => {
          this.foodItems.push(new FoodItem(item.id, item.name, item.ingredients, item.price, item.rating, item.category, item.image));
        });
        this.foodItems = data;
      });
  }

  cartTotal(): number {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.price;
    });
    return total;
  }

  star(num: number): { full: number[], half: number[] } {
    const full = Math.floor(num);
    const half = (num - full >= .5 ? 1 : 0);
    return {
      full: Array(full).fill(full),
      half: Array(half).fill(half)
    };
  }

  getIngredients(ingredients: string[]): string {
    return ingredients.join(',');
  }

  addToCart(item: FoodItem): void {
    item.added2cart = true;
    this.cartItems.push(item);
  }

  onSearchItem(event: KeyboardEvent): void {
    this.activeFilter = false;
    const target = <HTMLInputElement>event.target;
    console.log(event, target.value);
    const inputValue = target.value.trim().toLowerCase();
    if (target.value.length > 0) {
      this.searchedFoodItems = this.foodItems.filter(t => t.name.toLowerCase().indexOf(inputValue) > -1);
    }
  }

  filterItemsByRating(rating: number): void {
    this.activeFilter = true;
    this.searchedFoodItems = this.foodItems.filter(t => t.rating >= rating && t.rating < rating + 1);
  }

  checkForValidPromo(code: string): boolean {
    this.activePromo = code === this.currentPromotion.promo;
    return this.activePromo;
  }

}
