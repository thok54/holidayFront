import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEPPComponent } from './edit.component';


describe('EditEPPComponent', () => {
  let component: EditEPPComponent;
  let fixture: ComponentFixture<EditEPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
