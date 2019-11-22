import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailViewPage } from './detail-view.page';

describe('DetailViewPage', () => {
  let component: DetailViewPage;
  let fixture: ComponentFixture<DetailViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
