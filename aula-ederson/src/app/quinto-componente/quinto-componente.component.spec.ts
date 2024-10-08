import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoComponenteComponent } from './quinto-componente.component';

describe('QuintoComponenteComponent', () => {
  let component: QuintoComponenteComponent;
  let fixture: ComponentFixture<QuintoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuintoComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuintoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
