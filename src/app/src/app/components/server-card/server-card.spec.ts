import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerCard } from './server-card';

describe('ServerCard', () => {
  let component: ServerCard;
  let fixture: ComponentFixture<ServerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
