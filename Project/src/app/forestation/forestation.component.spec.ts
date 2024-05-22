import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestationComponent } from './forestation.component';

describe('ForestationComponent', () => {
  let component: ForestationComponent;
  let fixture: ComponentFixture<ForestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForestationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
