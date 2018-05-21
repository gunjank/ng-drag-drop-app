"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var panelData_1 = require("./panelData");
var cardData_1 = require("./cardData");
var MockData = /** @class */ (function () {
    function MockData() {
        this.panelData = [{ name: "My Money", type: "P1" }, { name: "Coach Panel", type: "P2" }, { name: "Settings", type: "P3" }];
        this.cardData = [{ name: "Accounts", type: "P1" }, { name: "Transactions", type: "P1" },
            { name: "Recent Transactions", type: "P1" }, { name: "Quotes", type: "P2" }, { name: "Sign Out", type: "P3" }];
        this.getListOfPanels = function () {
            var _this = this;
            var res = [];
            this.panelData.forEach(function (item) {
                var p = new panelData_1.PanelData();
                p.name = item.name;
                p.type = item.type;
                p.availableCards = _this.getListOfCards(p.type);
                res.push(p);
            });
            return res;
        };
        this.getListOfCards = function (panelType) {
            var res = [];
            this.cardData.forEach(function (item) {
                if (panelType === item.type) {
                    var p = new cardData_1.CardData();
                    p.name = item.name;
                    p.type = item.type;
                    res.push(p);
                }
            });
            return res;
        };
    }
    return MockData;
}());
exports.MockData = MockData;
//# sourceMappingURL=mockData.js.map