import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CardService} from "./card.service";
import {FooterService} from "../footer/footer.service";
declare let $: any;
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    card = [];

    constructor(private cardService: CardService, private f: FooterService) {
        this.cardService.item.subscribe((item) => this.addToCard(item));
        if (localStorage.getItem('card')) {
            this.card = JSON.parse(localStorage.getItem('card'));
        }
    }

    ngOnInit() {
    }

    getPrice(n) {
        return this.formatNumber(n);
    }

    getTotalCard() {
        let total = 0;
        for (let i = 0; i < this.card.length; i++) {
            total += this.card[i].price * this.card[i].count;
        }
        return total;
    }

    formatNumber(nb: number) {
        const stringNb = nb + '';
        let stringFormatted = '';
        for (let i = 0; i < stringNb.length; i++) {
            stringFormatted = stringFormatted + stringNb[stringNb.length - i - 1];
            if ((i + 1) % 3 === 0) {
                stringFormatted = stringFormatted + ' ';
            }
        }
        return stringFormatted.split('').reverse().join('');
    }

    addToCard(item) {
        let exists = null;
        console.log(item);
        for (let i = 0; i < this.card.length; i++) {
            let count = parseInt(this.card[i].count.toString(), 10);
            if (item.name === this.card[i].name) {
                count += 1;
                this.card[i].count = count;
                this.card[i].totalPrice = count * this.card[i].price;
                exists = i;
            }
        }
        if (exists == null) {
            item['count'] = 1;
            item['totalPrice'] = item.price;
            this.card.push(item);
        }
        console.log(this.card);
        this.refreshCard();
    }

    deleteItemCard(item) {
        this.card.splice(this.card.indexOf(item), 1);
        this.refreshCard();
    }

    deleteOneItemCard(item) {
        const i = this.card.indexOf(item);
        this.card[i].count--;
        if (this.card[i].count !== 0) {
            this.card[i].totalPrice = this.card[i].count * this.card[i].price;
        } else {
            this.deleteItemCard(item);
        }
        this.refreshCard();
    }

    refreshCard() {
        localStorage.setItem('card', JSON.stringify(this.card));
        this.f.updateCard(this.card);
    }

    purchase() {
        $('#card-modal').modal('hide');
        $('#status-order-modal').modal('show');
        this.card = [];
        this.refreshCard();
    }

}
