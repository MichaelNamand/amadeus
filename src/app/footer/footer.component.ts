import {Component, OnInit} from '@angular/core';
import {FooterService} from "./footer.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    size = 0;
    constructor(private f: FooterService) {
        this.f.card.subscribe((card) => {
            this.size = 0;
            for (let i = 0; i < card.length ; i++) {
                this.size += card[i].count;
            }
        });
    }

    ngOnInit() {
    }

    getCardLength() {

    }

}
