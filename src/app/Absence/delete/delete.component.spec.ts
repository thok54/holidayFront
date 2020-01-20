import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAbsenceComponent } from './delete.component';


describe('DeleteAbsenceComponent', () => {
  let component: DeleteAbsenceComponent;
  let fixture: ComponentFixture<DeleteAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
