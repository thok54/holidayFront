import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEPPComponent } from './add.component';


describe('AddEPPComponent', () => {
  let component: AddEPPComponent;
  let fixture: ComponentFixture<AddEPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
