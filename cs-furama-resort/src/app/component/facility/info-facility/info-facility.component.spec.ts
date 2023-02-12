import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFacilityComponent } from './info-facility.component';

describe('InfoFacilityComponent', () => {
  let component: InfoFacilityComponent;
  let fixture: ComponentFixture<InfoFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
