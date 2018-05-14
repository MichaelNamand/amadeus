import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';
import {CardService} from "./card/card.service";
import {FooterService} from "./footer/footer.service";
import {ApiService} from "./api.service";
import {HttpModule} from '@angular/http';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        FooterComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [CardService, FooterService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
