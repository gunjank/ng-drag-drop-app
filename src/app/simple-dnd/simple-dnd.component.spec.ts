import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDndComponent } from './simple-dnd.component';

describe('SimpleDndComponent', () => {
  let component: SimpleDndComponent;
  let fixture: ComponentFixture<SimpleDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
