"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class angularHomepage {
    constructor() {
        this.angularLink = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.search = protractor_1.element(protractor_1.by.css("body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type=search]"));
    }
}
exports.angularHomepage = angularHomepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvYW5ndWxhckhvbWVwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsZUFBZTtJQUl4QjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUdBQXFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pJLENBQUM7Q0FDSjtBQVJELDBDQVFDIn0=