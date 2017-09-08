import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'n-contact',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailComponent implements OnInit {
    avartar: any = {};
    message: string = "Oh yeah!";
    constructor() {}
    ngOnInit() {
        this.avartar.url = "https://c1.staticflickr.com/5/4437/36918435051_f2ff4fd01a_k.jpg";
        this.avartar.width = 200;
    }
    btnZoomIn() {
        this.avartar.width += 50;
    }
    btnZoomOut() {
        this.avartar.width -= 50;
    }
}