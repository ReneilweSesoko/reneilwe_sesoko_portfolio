import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculmVitaeComponent } from './curriculm-vitae.component';

describe('CurriculmVitaeComponent', () => {
  let component: CurriculmVitaeComponent;
  let fixture: ComponentFixture<CurriculmVitaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculmVitaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculmVitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
