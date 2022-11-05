import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetoComponent } from './neto.component';

describe('NetoComponent', () => {
  let component: NetoComponent;
  let fixture: ComponentFixture<NetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
