import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewroomPage } from './newroom.page';

describe('NewroomPage', () => {
  let component: NewroomPage;
  let fixture: ComponentFixture<NewroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
