import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAbsenceComponent } from './add.component';


describe('AddAbsenceComponent', () => {
  let component: AddAbsenceComponent;
  let fixture: ComponentFixture<AddAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
