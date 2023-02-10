import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ItemserviceService } from 'src/app/services/item-service.service';
import { ItemComponent } from '../item/item.component';

@Component({
  standalone: true,
  imports: [ItemComponent, NgFor, AsyncPipe],
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  constructor(public itemService: ItemserviceService) {}
}
