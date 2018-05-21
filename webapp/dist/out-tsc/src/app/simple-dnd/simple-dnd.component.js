"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleDndComponent = /** @class */ (function () {
    function SimpleDndComponent() {
        this.simpleDrop = null;
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }
    SimpleDndComponent.prototype.orderedProduct = function ($event) {
        var orderedProduct = $event.dragData;
        orderedProduct.quantity--;
    };
    SimpleDndComponent.prototype.addToBasket = function ($event) {
        var newProduct = $event.dragData;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    SimpleDndComponent.prototype.totalCost = function () {
        var cost = 0;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    };
    SimpleDndComponent.prototype.ngOnInit = function () {
    };
    SimpleDndComponent = __decorate([
        core_1.Component({
            selector: 'app-simple-dnd',
            templateUrl: './simple-dnd.component.html',
            styleUrls: ['./simple-dnd.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SimpleDndComponent);
    return SimpleDndComponent;
}());
exports.SimpleDndComponent = SimpleDndComponent;
var Product = /** @class */ (function () {
    function Product(name, quantity, cost) {
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
    }
    return Product;
}());
//# sourceMappingURL=simple-dnd.component.js.map