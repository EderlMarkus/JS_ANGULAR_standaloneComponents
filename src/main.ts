import { bootstrapApplication } from '@angular/platform-browser';
import { ItemListComponent } from './app/components/item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(ItemListComponent, {
    providers: [importProvidersFrom(BrowserAnimationsModule)]
});
