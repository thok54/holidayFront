import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteEPPComponent } from './delete.component';


describe('DeleteEPPComponent', () => {
  let component: DeleteEPPComponent;
  let fixture: ComponentFixture<DeleteEPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
