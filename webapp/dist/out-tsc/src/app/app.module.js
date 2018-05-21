"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_dnd_1 = require("ng2-dnd/ng2-dnd");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var simple_dnd_component_1 = require("./simple-dnd/simple-dnd.component");
var base_card_component_1 = require("./base-card/base-card.component");
var base_panel_component_1 = require("./base-panel/base-panel.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                simple_dnd_component_1.SimpleDndComponent,
                base_card_component_1.BaseCardComponent,
                base_panel_component_1.BasePanelComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                ng2_dnd_1.DndModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map