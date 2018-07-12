import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderService } from '../utils/order.service';
import { isNgTemplate } from '@angular/compiler';
import { FoodItem } from '../utils/order.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockFoodItems = [{
    "id": 0,
    "name": "Crispy Veg Burger",
    "ingredients": ["potato", "bread", "onion", "mayo", "cheese"],
    "price": 50,
    "rating": 4,
    "category": "fastfood",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3a6oM2G2rmV9ll6g0rFkaXGi-IHR4yFWrklVk-0ybHqygUL2tw"
  },
  {
    "id": 1,
    "name": "Frisky Fries",
    "ingredients": ["potato", "salt"],
    "price": 40,
    "rating": 4,
    "category": "fastfood",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3a6oM2G2rmV9ll6g0rFkaXGi-IHR4yFWrklVk-0ybHqygUL2tw"
  },
  {
    "id": 2,
    "name": "Strawberry Slusher",
    "ingredients": ["strawbeery syrup", "ice", "water", "sugar"],
    "price": 70,
    "rating": 4,
    "category": "drinks",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3a6oM2G2rmV9ll6g0rFkaXGi-IHR4yFWrklVk-0ybHqygUL2tw"
  },
  {
    "id": 3,
    "name": "Mc Gorgeous",
    "ingredients": ["fish", "cheese", "lettuce", "tomato"],
    "price": 100,
    "rating": 4,
    "category": "fastfood",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3a6oM2G2rmV9ll6g0rFkaXGi-IHR4yFWrklVk-0ybHqygUL2tw"
  },
  {
    "id": 4,
    "name": "Chinese platter",
    "ingredients": ["fish", "noodles", "momos", "soup"],
    "price": 100,
    "rating": 3.5,
    "category": "fastfood",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3a6oM2G2rmV9ll6g0rFkaXGi-IHR4yFWrklVk-0ybHqygUL2tw"
  },
  {
    "id": 5,
    "name": "North Indian Thali",
    "ingredients": ["rice", "dal", "chapati", "dahi"],
    "price": 160,
    "rating": 4.5,
    "category": "north indian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3a6oM2G2rmV9ll6g0rFkaXGi-IHR4yFWrklVk-0ybHqygUL2tw"
  },
  {
    "id": 6,
    "name": "Masala Dosa",
    "ingredients": ["rice", "sambar", "bottle gourd", "chutney"],
    "price": 100,
    "rating": 4,
    "category": "south indian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3a6oM2G2rmV9ll6g0rFkaXGi-IHR4yFWrklVk-0ybHqygUL2tw"
  }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [DashboardComponent],
      providers: [OrderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add to cart by clicking add to cart button', () => {
    mockFoodItems.forEach(item => {
      component.foodItems.push(new FoodItem(item.id, item.name, item.ingredients, item.price, item.rating, item.category, item.image));
    });
    fixture.detectChanges();
    const addtoCartButton = <HTMLElement>document.querySelector('button.addtocart-btn');
    addtoCartButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.cartItems.length).toBeTruthy();
  })
});
