import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DatePipe } from '@angular/common';
import { ItemserviceService } from 'src/app/services/item-service.service';

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, DatePipe],
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  constructor(private itemService: ItemserviceService) {}
  @Input() item!: Item;

  deleteItem(item: Item) {
    this.itemService.deleteItem(item);
  }
}
