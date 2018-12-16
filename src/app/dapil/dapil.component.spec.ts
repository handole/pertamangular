import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DapilComponent } from './dapil.component';

describe('DapilComponent', () => {
  let component: DapilComponent;
  let fixture: ComponentFixture<DapilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DapilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DapilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
