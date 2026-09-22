import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddServer } from './add-server';

describe('AddServer', () => {
  let component: AddServer;
  let fixture: ComponentFixture<AddServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddServer],
    }).compileComponents();

    fixture = TestBed.createComponent(AddServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
