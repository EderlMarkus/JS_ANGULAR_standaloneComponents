import { TestBed, fakeAsync } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { ItemserviceService } from './item-service.service';

describe('ItemServiceService', () => {
  let service: ItemserviceService;

  beforeEach(() => {
    service = TestBed.inject(ItemserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should delete Item when deleteItem was called', fakeAsync(() => {
    const item = {
      id: 1002,
      imageUrl: 'https://hub.dummyapis.com/Image?text=OZ&height=120&width=120',
      firstName: 'Oswaldo',
      lastName: 'Zieme',
      email: 'Oswaldo.Zieme@dummyapis.com',
      contactNumber: '4145795907',
      age: 44,
      dob: '23/06/1979',
      salary: 2,
      address: 'Address2',
    };
    service.deleteItem(item);
    firstValueFrom(service.items$).then((items) => {
      expect(items.length).toBe(9);
    });
  }));

  it('should not delete Item when deleteItem was called with Item not in list of itemservice', fakeAsync(() => {
    const item = {
      id: 1,
      imageUrl: 'https://hub.dummyapis.com/Image?text=AC&height=120&width=120',
      firstName: 'Fakey',
      lastName: 'McFakeFace',
      email: 'fakey@dummyapis.com',
      contactNumber: '111',
      age: 33,
      dob: '12/01/1990',
      salary: 1,
      address: 'Fakeystreet 1',
    };
    service.deleteItem(item);
    firstValueFrom(service.items$).then((items) => {
      expect(items.length).toBe(10);
    });
  }));
});
