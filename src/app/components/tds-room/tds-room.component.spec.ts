import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TdsRoomComponent } from './tds-room.component';

describe('TdsRoomComponent', () => {
  let component: TdsRoomComponent;
  let fixture: ComponentFixture<TdsRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdsRoomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TdsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
