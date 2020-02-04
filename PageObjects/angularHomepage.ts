import { ElementFinder, element, by } from "protractor";

export class angularHomepage {
    angularLink: ElementFinder;
    search: ElementFinder;

    constructor() {
        this.angularLink = element(by.linkText("angular.io"));
        this.search = element(by.css("body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type=search]"));
    }
}