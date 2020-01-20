import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEPPComponent } from './list.component';


describe('ListEPPComponent', () => {
  let component: ListEPPComponent;
  let fixture: ComponentFixture<ListEPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
