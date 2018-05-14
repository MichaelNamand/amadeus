import {EventEmitter, Output} from "@angular/core";

export class CardService {
    @Output() item: EventEmitter<any> = new EventEmitter();
    updateCard(item) {
        console.log('transmission item ok')
            this.item.emit(item);
        }
}