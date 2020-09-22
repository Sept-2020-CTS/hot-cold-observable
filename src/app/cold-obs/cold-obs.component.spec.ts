import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObsComponent } from './cold-obs.component';

describe('ColdObsComponent', () => {
  let component: ColdObsComponent;
  let fixture: ComponentFixture<ColdObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
