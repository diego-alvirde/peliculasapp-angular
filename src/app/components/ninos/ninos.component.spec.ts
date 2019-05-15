import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinosComponent } from './ninos.component';

describe('NinosComponent', () => {
  let component: NinosComponent;
  let fixture: ComponentFixture<NinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
