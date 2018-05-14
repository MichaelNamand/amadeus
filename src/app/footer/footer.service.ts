import {EventEmitter, Output} from "@angular/core";

export class FooterService {
    @Output() card: EventEmitter<any> = new EventEmitter();
    updateCard(card) {
        console.log('transmission item ok')
        this.card.emit(card);
    }
}