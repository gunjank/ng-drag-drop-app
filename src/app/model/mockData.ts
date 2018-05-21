import { PanelData } from "./panelData";
import { CardData } from "./cardData";

export class MockData {
    private panelData: Array<object> = [{name:"My Money",type:"P1"},{name:"Coach Panel",type:"P2"},{name:"Settings",type:"P3"}];
    private cardData: Array<object> = [{name:"Accounts", type:"P1"},{name:"Transactions",type:"P1"},
    {name:"Recent Transactions",type:"P1"},{name:"Quotes",type:"P2"},{name:"Sign Out",type:"P3"}];
    
    public getListOfPanels = function () {
        let res:Array<PanelData>=[];
        this.panelData.forEach(item => {
            let p:PanelData = new PanelData();
            p.name = item.name;
            p.type = item.type;
            p.availableCards =this.getListOfCards(p.type);
            res.push(p);
        });
        return res;
    }
    public getListOfCards = function (panelType:string) {
        let res:Array<CardData>=[];
        this.cardData.forEach(item => {
            if(panelType===item.type){
                let p:CardData = new CardData();
                p.name = item.name;
                p.type = item.type;
                res.push(p);
            }
        });
        return res;
    }

}