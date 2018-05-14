import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

declare let $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private api: ApiService) {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    }

    ngOnInit() {
    }

    login() {}
}
