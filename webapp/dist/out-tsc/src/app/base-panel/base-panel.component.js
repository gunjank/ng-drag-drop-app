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
var panelData_1 = require("../model/panelData");
var BasePanelComponent = /** @class */ (function () {
    // availableCards :Array<CardData> = [];
    function BasePanelComponent() {
        this.previewPanelType = "P1";
        this.previewPanelType = "P1";
    }
    BasePanelComponent.prototype.ngOnInit = function () {
    };
    BasePanelComponent.prototype.dragSuccessHandler = function ($event) {
        var cardData = $event.dragData;
        console.log(cardData.name + " " + cardData.type);
        //orderedProduct.quantity--;
    };
    BasePanelComponent.prototype.checkPanelType = function () {
        return (this.panelData.type === "P1") ? true : false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", panelData_1.PanelData)
    ], BasePanelComponent.prototype, "panelData", void 0);
    BasePanelComponent = __decorate([
        core_1.Component({
            selector: 'app-base-panel',
            templateUrl: './base-panel.component.html',
            styleUrls: ['./base-panel.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], BasePanelComponent);
    return BasePanelComponent;
}());
exports.BasePanelComponent = BasePanelComponent;
//# sourceMappingURL=base-panel.component.js.map