import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirbyClicksComponent } from './kirby-clicks.component';

describe('KirbyClicksComponent', () => {
  let component: KirbyClicksComponent;
  let fixture: ComponentFixture<KirbyClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KirbyClicksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KirbyClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
