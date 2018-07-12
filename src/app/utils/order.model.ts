export class FoodItem {
    "id": number;
    "name": string;
    "ingredients": string[];
    "price": number;
    "rating": number;
    "category": string;
    "image": string;
    "added2cart": boolean = false;

    constructor(id: number, name: string, ingredients: string[], price: number, rating: number, category: string, image: string) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.rating = rating;
        this.category = category;
        this.image = image;
    }
}