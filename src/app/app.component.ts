import {Component} from '@angular/core';
import {CardService} from "./card/card.service";
import {ApiService} from "./api.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    articles;

    constructor(private cardService : CardService, private api: ApiService){
        this.api.getArticles().subscribe(
            response => {
                this.articles = JSON.parse(response['_body']);
                console.log(this.articles);
            },
            error => {
                console.log(error);
            }
        );
    }
    addToCard(i) {
        i = {
            name : 'Nimbus 2000',
            price: 2000
        };
        console.log('ajout de ' + i.name);
      this.cardService.updateCard(i);
    }
}
