import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ItemserviceService } from 'src/app/services/item-service.service';
import { ItemComponent } from './item.component';
describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let service: ItemserviceService;
  let spy: jasmine.Spy;
  const item = {
    id: 1,
    imageUrl: 'img.jpg',
    firstName: 'Markus',
    lastName: 'Ederl',
    email: 'office@edma.at',
    contactNumber: '1',
    age: 32,
    dob: '01.01.1990',
    salary: 1,
    address: 'Straßenstraße 1',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemComponent],
      declarations: [],
      providers: [ItemserviceService],
    }).compileComponents();
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('cardTitel should be firstName lastName', () => {
    expect(fixture.nativeElement.querySelector('#cardTitle').innerText).toEqual(
      'Markus Ederl'
    );
  });

  it('container email should contain email', () => {
    expect(fixture.nativeElement.querySelector('.email').innerText).toEqual(
      'office@edma.at'
    );
  });

  it('container address should contain address', () => {
    expect(fixture.nativeElement.querySelector('.address').innerText).toEqual(
      'Straßenstraße 1'
    );
  });

  it('should call deleteItem when delete-button was clicked', fakeAsync(() => {
    spyOn(component, 'deleteItem');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.deleteItem).toHaveBeenCalled();
  }));

  it('should call itemservice when delete-button was clicked', fakeAsync(() => {
    service = fixture.debugElement.injector.get(ItemserviceService);
    spy = spyOn(service, 'deleteItem').and.returnValue();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();

    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
});
