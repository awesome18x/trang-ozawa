import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BieuDoComponent } from './bieu-do.component';

describe('BieuDoComponent', () => {
  let component: BieuDoComponent;
  let fixture: ComponentFixture<BieuDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BieuDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BieuDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
