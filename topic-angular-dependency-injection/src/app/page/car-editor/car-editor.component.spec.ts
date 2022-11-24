import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditorComponent } from './car-editor.component';

describe('CarEditorComponent', () => {
  let component: CarEditorComponent;
  let fixture: ComponentFixture<CarEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
