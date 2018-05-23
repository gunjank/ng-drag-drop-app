import { Injectable } from '@angular/core';
import { PanelData } from './model/panelData';
import { CardData } from './model/cardData';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {
    private cardData: Array<object> = [{ name: "Webview", type: "W1", cardId: "C13", url: "https://google.com" }, 
    { name: "Configurable Webview", type: "W1", cardId: "C14",isConfigEditor:true, htmlSource:"You content here..."},
    { name: "Monthly Spent Graph", type: "B1", cardId: "C1" }, { name: "Money In", type: "B1", cardId: "C3" },
    { name: "Linked Accounts", type: "B1", cardId: "C4" }, { name: "Recent Activity", type: "B1", cardId: "C5" }, { name: "Insights", type: "B1", cardId: "C6" },
    { name: "WANG", type: "B1", cardId: "C7" }, { name: "Challenges", type: "B1", cardId: "C8" }, { name: "Steps vs Money Out", type: "B1", cardId: "C9" }, 
    { name: "Money Out", type: "B1", cardId: "C2" },
    { name: "Money In vs Out", type: "B1", cardId: "C10" }, { name: "Wang Transactionss", type: "B1", cardId: "C11" }, { name: "Quotes/Did You Know", type: "B1", cardId: "C12" }
    ];

    constructor() { }
   

    public getBasePanel() {
        let p: PanelData = new PanelData();
        p.name = "Drag & Drop Cards";
        p.type = "B1";
        p.isBase = true;
        p.availableCards = this.getListOfCards(p.type);
        return p;
    }
    public getListOfCards = function (panelType: string) {
        let res: Array<CardData> = [];
        this.cardData.forEach(item => {
            let p: CardData = new CardData();
            p.name = item.name;
            p.type = item.type;
            p.cardId = item.cardId;
            p.url = item.url;
            p.isConfigEditor=item.isConfigEditor;
            p.htmlSource=item.htmlSource;
            res.push(p);
        });
        return res;
    }


}
